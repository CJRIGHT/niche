const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 5174);
const ROOT = __dirname;

loadLocalEnv();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_MODEL = "gemini-2.5-flash";

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

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
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

async function generateJsonWithGemini(prompt) {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key is not configured");
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.35 },
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

function fallbackMindMap({ topic = "Topic", info = "" }) {
  const points = String(info || topic)
    .split(/\n|,|;/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);

  const branches = points.length ? points : ["Key ideas", "Examples", "Definitions", "Mistakes to avoid"];

  return {
    centralIdea: topic || branches[0] || "Mind map",
    branches: branches.map((branch) => ({
      title: branch,
      details: ["Definition or explanation", "Example", "Memory cue"],
    })),
    crossLinks: ["Connect definitions to examples", "Link causes to effects", "Mark weak areas in another colour"],
    memorySketchPlan: "Cover the saved map, redraw the central idea, add the main branches, then add links from memory.",
  };
}

function fallbackQuiz({ topic = "Topic", level = "GCSE", specifics = "" }) {
  const focus = specifics || topic;
  return {
    title: `${level} ${topic} quiz`,
    questions: [
      {
        question: `Explain the main idea of ${focus}.`,
        answer: `A clear answer should define ${focus}, include a key example, and use accurate ${level} terminology.`,
      },
      {
        question: `Give one example linked to ${topic} and explain why it matters.`,
        answer: "A good answer gives a specific example and explains its importance rather than just naming it.",
      },
      {
        question: `What is a common mistake students make with ${topic}?`,
        answer: "A good answer identifies the mistake and explains how to avoid it.",
      },
    ],
  };
}

function fallbackRevisionHelper({ method = "Revision method", topic = "Topic", level = "GCSE", specifics = "" }) {
  const focus = specifics || topic;
  const templates = {
    "Active recall": [topic, `What is the most important idea about ${focus}?`, `A good answer explains ${focus}, gives one example, and uses accurate ${level} vocabulary.`],
    Flashcards: [`${focus} key term`, `Definition, example, and memory cue for ${focus}.`],
    Blurting: [topic, `Definition of ${focus}\nKey examples\nCommon mistakes\nOne exam-style fact\nMemory cue`],
    "Practice questions": [`Explain ${focus}.`, `A good answer defines ${focus}, includes a key example, and explains why it matters.`],
    "Exam questions": [`${level} exam question: Explain ${focus}.`, `Mark scheme: clear definition, accurate example, linked explanation, correct terminology.`],
    "Scaffolded questions": [`Start with: What does ${focus} mean?`, `Hint 1: define the key word.\nHint 2: give an example.\nFinal answer: explain the full idea without hints.`],
    "Colour coding": [topic, `Definition of ${focus}`, `Example linked to ${focus}`, "A mistake to avoid", "Key terms to remember"],
    "Cornell notes": [topic, `What does ${focus} mean?\nWhy does it matter?\nHow could it appear in an exam?`, `Detailed notes about ${focus}, including definitions, examples, and links.`, `${focus} is important because it links key knowledge to exam-style explanation.`],
    Summaries: [topic, `Main idea\nKey supporting point\nUseful example\nCommon mistake\nFinal takeaway`, `${focus} in short: define the key idea, add one example, and explain why it matters.`, "definition, example, explanation, mistake"],
    "Chunked notes": [`Chunk ${focus}`, "Step 1: learn the definition\nStep 2: study one example\nStep 3: test yourself\nStep 4: correct mistakes"],
    "Text-to-speech": [`${focus} listening script`, `Today I am revising ${focus}. First, I need the definition. Next, I need one example. Finally, I need to explain it from memory.`],
    Podcasts: [
      `${level} ${topic} revision podcast`,
      `INTRO MUSIC\nHOST: Welcome to this Discere revision podcast on ${focus}.\n\nSEGMENT 1: What you need to know\nHOST: Let's start with the core idea. ${focus} means...\n\nSEGMENT 2: Example\nHOST: Here is a clear example you could use in revision...\n\nQUICK CHECK\nHOST: Pause and answer this: what is the key definition?\n\nRECAP\nHOST: Today you learned the definition, one example, and one common mistake.\n\nOUTRO\nHOST: Replay this episode later for spaced revision.`
    ],
    "Recording notes": [`${focus} voice note`, `Plan: define ${focus}, give one example, explain one common mistake, end with a quick self-test question.`],
    "Teach someone else": [`Explain ${focus} in simple language.`, "Use one everyday analogy.", "Ask: why does this happen?", "Ask: what is a common mistake?"],
    "Spaced repetition": [topic, `Review ${focus}: definition, example, and one question you got wrong.`],
    Pomodoro: [`Revise ${focus}`, "25"],
    "Practical activities": ["Set up the task", "Complete the first attempt", "Check the result", "Correct one mistake"],
    Experiments: [`Investigate ${focus}.`, "Prediction: changing one variable will affect the result.", "Method: change one variable and keep controls the same.", "Conclusion: compare the result to the prediction."],
    Simulations: [`Model ${focus}.`, "Change one variable.", "Predict what will happen.", "Record the result and explain the pattern."],
  };

  return {
    title: `${level} ${method}: ${topic}`,
    fields: templates[method] || [`Revise ${focus}`, "Add examples", "Check understanding"],
  };
}

async function generateMindMap({ topic, level, examBoard, info }) {
  const prompt = `
Create a useful revision mind map for Discere.
Return only JSON in this shape:
{
  "centralIdea":"short title",
  "branches":[{"title":"branch name","details":["detail 1","detail 2","detail 3"]}],
  "crossLinks":["link between branches"],
  "memorySketchPlan":"how the student should redraw it from memory"
}
Level: ${level || "Not specified"}
Exam board: ${examBoard || "Not specified"}
Topic: ${topic || "Not specified"}
Information to use:
${info || "No extra information provided"}
`;

  return generateJsonWithGemini(prompt);
}

async function generateQuiz({ topic, level, specifics, count }) {
  const questionCount = Math.min(12, Math.max(3, Number(count) || 6));
  const prompt = `
Create a revision quiz for Discere.
Return only JSON in this shape:
{
  "title":"quiz title",
  "questions":[{"question":"question text","answer":"model answer text"}]
}
Make exactly ${questionCount} questions.
Use clear ${level || "GCSE"} level wording.
Topic: ${topic || "Not specified"}
Specific focus:
${specifics || "No extra specifics"}
`;

  return generateJsonWithGemini(prompt);
}

async function generateRevisionHelper({ method, topic, level, specifics, fields }) {
  const podcastInstruction = method === "Podcasts"
    ? `
This is for a PODCAST revision method.
Do not return a normal summary.
Write an actual podcast episode script that can be read aloud by text-to-speech.
Return exactly two fields:
1. Podcast title
2. Podcast script
Do not include method, level, topic, or notes as extra fields.
The script must include:
- podcast title
- intro
- host narration
- 2 to 4 clear segments
- examples or analogies
- at least 2 pause-and-answer moments
- recap
- outro
Make it around 3 to 5 minutes when spoken.
`
    : "";

  const prompt = `
Create useful revision content for Discere.
Return only JSON in this shape:
{
  "title":"short title",
  "fields":["value for field 1","value for field 2","value for field 3"]
}
The fields array must match these field labels exactly in order:
${(fields || []).join("\n")}
Method: ${method || "Revision method"}
Level: ${level || "GCSE"}
Topic: ${topic || "Not specified"}
Specific focus or notes:
${specifics || "No extra specifics"}
${podcastInstruction}
`;

  return generateJsonWithGemini(prompt);
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

  if (request.method === "POST" && request.url === "/api/mindmap") {
    let payload = {};
    try {
      const body = await readRequestBody(request);
      payload = JSON.parse(body);
      const result = await generateMindMap(payload);
      send(response, 200, JSON.stringify(result));
    } catch (error) {
      send(response, 200, JSON.stringify(fallbackMindMap(payload)));
    }
    return;
  }

  if (request.method === "POST" && request.url === "/api/quiz") {
    let payload = {};
    try {
      const body = await readRequestBody(request);
      payload = JSON.parse(body);
      const result = await generateQuiz(payload);
      send(response, 200, JSON.stringify(result));
    } catch (error) {
      send(response, 200, JSON.stringify(fallbackQuiz(payload)));
    }
    return;
  }

  if (request.method === "POST" && request.url === "/api/revision-helper") {
    let payload = {};
    try {
      const body = await readRequestBody(request);
      payload = JSON.parse(body);
      const result = await generateRevisionHelper(payload);
      send(response, 200, JSON.stringify(result));
    } catch (error) {
      send(response, 200, JSON.stringify(fallbackRevisionHelper(payload)));
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
