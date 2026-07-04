const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 5174);
const ROOT = __dirname;

loadLocalEnv();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
};

function send(response, status, body, type = "application/json; charset=utf-8") {
  response.writeHead(status, { "Content-Type": type });
  response.end(body);
}

function loadLocalEnv() {
  const envPath = path.join(ROOT, ".env");

  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;

    const separator = trimmed.indexOf("=");
    if (separator === -1) return;

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !process.env[key]) process.env[key] = value;
  });
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1000000) {
        reject(new Error("Request too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function categoriseWithGemini(answers) {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key is not configured");
  }

  const prompt = `
You categorise a learner for a study website called Discere.
Return only JSON in this shape: {"profile":"reader|visual|audio|handsOn|focusedSprinter|stepByStep|challenge|balanced","reason":"short reason"}.
Use these answers:
${answers.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n")}
`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2 },
    }),
  });

  if (!response.ok) {
    throw new Error("Gemini request failed");
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  const cleanText = text.replace(/```json|```/g, "").trim();
  return JSON.parse(cleanText);
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;

  if (requestedPath === "/server.js") {
    send(response, 404, "Not found", "text/plain; charset=utf-8");
    return;
  }

  const filePath = path.normalize(path.join(ROOT, requestedPath));

  if (!filePath.startsWith(ROOT)) {
    send(response, 403, "Forbidden", "text/plain; charset=utf-8");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(response, 404, "Not found", "text/plain; charset=utf-8");
      return;
    }
    send(response, 200, data, mimeTypes[path.extname(filePath)] || "application/octet-stream");
  });
}

const server = http.createServer(async (request, response) => {
  if (request.method === "POST" && request.url === "/api/categorise") {
    try {
      const body = await readRequestBody(request);
      const { answers } = JSON.parse(body);
      const result = await categoriseWithGemini(answers || []);
      send(response, 200, JSON.stringify(result));
    } catch (error) {
      send(response, 502, JSON.stringify({ error: "Gemini unavailable" }));
    }
    return;
  }

  if (request.method === "GET") {
    serveStatic(request, response);
    return;
  }

  send(response, 405, "Method not allowed", "text/plain; charset=utf-8");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Discere is running at http://localhost:${PORT}/`);
});
