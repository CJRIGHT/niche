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
Return only JSON in this shape:
{
  "profile":"reader|visual|audio|handsOn|focusedSprinter|stepByStep|challenge|balanced",
  "reason":"short reason",
  "overview":{
    "baselineLevel":"Foundation|Developing|Secure|Advanced",
    "confidence":0,
    "strength":"short strength",
    "watch":"short thing to watch out for",
    "focus":"short focus for revision",
    "recommendedStart":"short first action"
  }
}
Use the student's exact questionnaire responses and answer categories to judge a starting revision overview.
Do not treat the questionnaire like a knowledge test. Use it to estimate independence, focus needs, confidence with testing, and support needs.
Answers:
${answers.map((item) => `Q: ${item.question}\nA: ${item.answer}\nCategory: ${item.category}`).join("\n\n")}
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
  const focus = String(specifics || topic)
    .replace(/include\s+(a\s+)?question\s*:?\s*/gi, "")
    .replace(/create\s+(the\s+)?question\s*:?\s*/gi, "")
    .replace(/make\s+(a\s+)?question\s*:?\s*/gi, "")
    .trim() || topic;
  const lowerFocus = `${topic} ${focus}`.toLowerCase();
  if (["fetch", "decode", "execute"].every((word) => lowerFocus.includes(word))) {
    return {
      title: `${level} fetch decode execute cycle quiz`,
      questions: [
        {
          question: "Explain the fetch-decode-execute cycle.",
          answer: "In the fetch-decode-execute cycle, the CPU first fetches the next instruction from memory using the program counter. The instruction is loaded into the CPU, and the program counter is updated to point to the next instruction. The control unit then decodes the instruction to work out what operation is needed. Finally, the CPU executes the instruction, such as carrying out a calculation, loading data, storing data, or jumping to another instruction.",
        },
        {
          question: "What happens during the fetch stage of the fetch-decode-execute cycle?",
          answer: "During the fetch stage, the CPU gets the next instruction from memory. The program counter stores the address of that instruction, the instruction is copied into the CPU, and the program counter is updated so it points to the next instruction.",
        },
        {
          question: "Why does the control unit decode instructions before they are executed?",
          answer: "The control unit decodes an instruction so the CPU understands what operation needs to happen. It works out whether the CPU should do something like calculate, load data, store data, compare values, or jump to a different instruction.",
        },
      ],
    };
  }
  const terms = String(focus)
    .split(/,|\n|;|\s+/)
    .map((term) => term.trim().toLowerCase())
    .filter((term) => term.length > 3)
    .filter((term) => !["cells", "cell", "organelles", "biology", "topic", "include", "question", "explain", "create", "make"].includes(term));
  const answerBank = {
    nucleus: "The nucleus controls the activities of the cell and contains genetic material in the form of DNA.",
    mitochondria: "Mitochondria are the site of aerobic respiration, where energy is released for the cell.",
    ribosomes: "Ribosomes are the site of protein synthesis, where proteins are made for the cell.",
    chloroplasts: "Chloroplasts contain chlorophyll and absorb light energy for photosynthesis in plant cells.",
    membrane: "The cell membrane controls which substances enter and leave the cell.",
    cytoplasm: "The cytoplasm is a jelly-like substance where many chemical reactions happen.",
    vacuole: "The permanent vacuole in a plant cell contains cell sap and helps keep the cell rigid.",
  };
  const pickedTerms = terms.length ? terms.slice(0, 3) : [String(topic).toLowerCase()];
  const questions = pickedTerms.map((term) => ({
    question: `What is the role of ${term} in ${topic}?`,
    answer: answerBank[term] || `${term} is a key part of ${topic}. It has a specific function in the process, links to the main idea, and helps explain how the topic works in an exam answer.`,
  }));

  while (questions.length < 3) {
    questions.push({
      question: `Why is ${topic} important to understand at ${level} level?`,
      answer: `${topic} is important because it helps explain key processes, examples, and exam questions in this part of the course.`,
    });
  }

  return {
    title: `${level} ${topic} quiz`,
    questions,
  };
}

function hasAdviceAnswer(answer) {
  return /\b(a good answer|should|would include|needs to|must include|marks? for|credit for)\b/i.test(String(answer || ""));
}

function hasWeakFlashcard(front, back) {
  const frontText = String(front || "").trim().toLowerCase();
  const backText = String(back || "").trim().toLowerCase();
  return !frontText
    || !backText
    || frontText === backText
    || frontText === "front"
    || backText === "back"
    || frontText.length < 8
    || backText.length < 16
    || /^definition,?\s*example/i.test(backText)
    || /\b(memory cue|key term)\b/i.test(backText);
}

function hasThinPracticeAnswer(answer) {
  const text = String(answer || "").trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const sentenceCount = (text.match(/[.!?](\s|$)/g) || []).length;
  return wordCount < 55 || sentenceCount < 3;
}

function cleanQuizQuestions(result) {
  const questions = Array.isArray(result?.questions) ? result.questions : [];
  return {
    title: result?.title || "Generated quiz",
    questions: questions
      .map((item) => ({
        question: String(item.question || "").trim(),
        answer: String(item.answer || "").trim(),
      }))
      .filter((item) => item.question && item.answer),
  };
}

function fallbackRevisionHelper({ method = "Revision method", topic = "Topic", level = "GCSE", specifics = "" }) {
  const rawFocus = specifics || topic;
  const focus = String(rawFocus)
    .replace(/^create\s+(the\s+)?question\s*:?\s*/i, "")
    .replace(/^make\s+(a\s+)?question\s*:?\s*/i, "")
    .replace(/^create\s+(a\s+)?flashcard\s+(for|about|on)\s*/i, "")
    .replace(/^make\s+(a\s+)?flashcard\s+(for|about|on)\s*/i, "")
    .replace(/^flashcard\s+(for|about|on)\s*/i, "")
    .trim() || topic;
  const lowerFocus = String(focus).toLowerCase();
  const directAnswerBank = [
    {
      match: ["fetch", "decode", "execute"],
      answer: "In the fetch-decode-execute cycle, the CPU first fetches the next instruction from memory using the program counter. The instruction is loaded into the CPU, and the program counter is updated to point to the next instruction. The control unit then decodes the instruction to work out what operation is needed. Finally, the CPU executes the instruction, such as performing a calculation, loading data, storing data, or jumping to another instruction.",
    },
  ];
  const directAnswer = directAnswerBank.find((item) => item.match.every((word) => lowerFocus.includes(word)))?.answer
    || `${focus} is explained by stating the key stages in order, describing what happens at each stage, and linking the stages together clearly.`;
  const developedAnswer = `${directAnswer} A strong practice answer should also use accurate key words, keep the explanation in a clear order, and link each point back to the question. Where possible, add a short example so the answer shows understanding rather than just naming facts.`;
  const templates = {
    "Active recall": [topic, `What is the most important idea about ${focus}?`, `${focus} is important because it links a key definition to a specific example and shows how the idea works in ${topic}.`],
    Flashcards: [
      /^what\b|^define\b|^explain\b/i.test(focus) ? focus.replace(/\?*$/, "?") : `What is ${focus}?`,
      directAnswerBank.find((item) => item.match.every((word) => lowerFocus.includes(word)))?.answer || `${focus} is the key term or idea being revised. It means the specific concept named on the front of the card, with one clear example used to show how it works.`,
    ],
    Blurting: [topic, `Definition of ${focus}\nKey examples\nCommon mistakes\nOne exam-style fact\nMemory cue`],
    "Practice questions": [/^explain\b/i.test(focus) ? focus.replace(/\?*$/, ".") : `Explain ${focus}.`, developedAnswer],
    "Exam questions": [/^explain\b/i.test(focus) ? `${level} exam question: ${focus.replace(/\?*$/, ".")}` : `${level} exam question: Explain ${focus}.`, directAnswer],
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
Make the centralIdea the title in the middle of the map.
Make 4 to 7 branches as subtitles/main nodes.
Make each branch have 2 to 4 short note nodes.
Keep note nodes short enough to fit on a visual mind map.
Level: ${level || "Not specified"}
Exam board: ${examBoard || "Not specified"}
Topic: ${topic || "Not specified"}
Information to use:
${info || "No extra information provided"}
`;

  return generateJsonWithGemini(prompt);
}

function describeLearnerProfile(learnerProfile = {}) {
  const skillLevel = learnerProfile.skillLevel || "New";
  const attempts = Number(learnerProfile.attempts) || 0;
  const averageScore = Number(learnerProfile.averageScore) || 0;
  const recentAverage = Number(learnerProfile.recentAverage) || 0;
  const instruction = learnerProfile.instruction || "Start with clear, useful revision content.";
  return `Skill level: ${skillLevel}
Checked attempts: ${attempts}
Average score: ${averageScore}%
Recent score: ${recentAverage}%
Adaptation instruction: ${instruction}`;
}

async function generateQuiz({ topic, level, specifics, count, learnerProfile }) {
  const questionCount = Math.min(12, Math.max(3, Number(count) || 6));
  const prompt = `
Create a revision quiz for Discere.
Return only JSON in this shape:
{
  "title":"quiz title",
  "questions":[{"question":"question text","answer":"direct correct answer"}]
}
Make exactly ${questionCount} questions.
Use clear ${level || "GCSE"} level wording.
Every answer must directly answer the question.
Do not write advice such as "a good answer should", "students should include", "marks are awarded for", or "credit for".
Do not describe what an answer should contain.
Write the actual model answer itself, with the facts included.
If the question asks "explain", the answer must include the explanation, not marking guidance.
Adapt the difficulty to this learner overview:
${describeLearnerProfile(learnerProfile)}
If the learner is New or Foundation, use core questions, clear wording, and supportive model answers.
If the learner is Developing, include mostly core questions plus one slightly harder application question.
If the learner is Secure, use exam-style wording and include challenge questions.
If the learner is Advanced, use harder explain/evaluate questions and expect precise terminology.
Topic: ${topic || "Not specified"}
Specific focus:
${specifics || "No extra specifics"}
`;

  const result = cleanQuizQuestions(await generateJsonWithGemini(prompt));

  if (result.questions.some((item) => hasAdviceAnswer(item.answer))) {
    const repairPrompt = `
Rewrite this quiz so every answer is a direct correct model answer.
Return only JSON in this shape:
{"title":"quiz title","questions":[{"question":"question text","answer":"direct correct answer"}]}
Rules:
- Keep the questions.
- Replace all advice/mark-scheme wording with actual answers.
- Never say "a good answer should", "should include", "marks", or "credit".
Quiz:
${JSON.stringify(result)}
`;
    return cleanQuizQuestions(await generateJsonWithGemini(repairPrompt));
  }

  return result;
}

async function generateRevisionHelper({ method, topic, level, specifics, fields, learnerProfile }) {
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
  const questionInstruction = ["Practice questions", "Exam questions", "Scaffolded questions", "Active recall"].includes(method)
    ? `
This method creates questions with answers.
The answer field must be a direct model answer to the generated question.
Do not write mark-scheme advice.
Do not say "a good answer should", "students should include", "marks are awarded for", or "credit for".
If the topic is "fetch decode execute cycle" and the question is "Explain the fetch decode execute cycle", the answer must explain:
- fetch: CPU gets the next instruction from memory, using the program counter
- decode: control unit interprets the instruction
- execute: CPU carries out the instruction
- the program counter moves on to the next instruction
`
    : "";
  const practiceQuestionInstruction = method === "Practice questions"
    ? `
This is specifically for PRACTICE QUESTIONS.
The model answer must be developed enough for a student to learn from it.
Write 3 to 6 sentences, or around 70 to 120 words.
Include:
- a clear opening definition or direct answer
- 2 to 4 linked explanation points
- at least one example, consequence, or reason where it helps
- accurate key terms for the subject and level
Do not make the answer a single sentence.
Do not just define the first word in the question.
`
    : "";
  const flashcardInstruction = method === "Flashcards"
    ? `
This method creates one flashcard.
Return exactly two fields:
1. Front question/prompt
2. Back definition/answer
The front must be a short test prompt, usually a question such as "What is ...?", "Define ...", or "Explain ...".
The back must be the actual answer or definition, not advice, not a label, and not a vague phrase.
Do not put the answer on the front.
Do not write "key term", "definition, example, and memory cue", "front", or "back" as the content.
If the specifics say "make/create a flashcard for/about/on ...", do not copy that wording. Use only the actual topic after it.
Example:
Front question/prompt: What is the fetch-decode-execute cycle?
Back definition/answer: The fetch-decode-execute cycle is the process a CPU uses to repeatedly fetch an instruction from memory, decode what it means, and execute it.
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
Learner overview:
${describeLearnerProfile(learnerProfile)}
Adapt the content to the learner level. Make it easier and more scaffolded for New/Foundation, balanced for Developing, exam-style for Secure, and more challenging for Advanced.
${podcastInstruction}
${questionInstruction}
${practiceQuestionInstruction}
${flashcardInstruction}
If the specifics contain an instruction like "Create the question:", do not copy that phrase into the question. Use only the actual subject/question content.
`;

  const result = await generateJsonWithGemini(prompt);

  if (method === "Flashcards" && Array.isArray(result.fields) && hasWeakFlashcard(result.fields[0], result.fields[1])) {
    const repairPrompt = `
Rewrite this Discere flashcard so it has a proper front and back.
Return only JSON in this shape:
{"title":"short title","fields":["front question/prompt","back definition/answer"]}
Rules:
- Field 1 must be a short question or prompt for the front of the card.
- Field 2 must be the direct definition or answer for the back of the card.
- Do not use vague placeholders like "key term", "definition", "memory cue", "front", or "back".
- Do not put the answer on the front.
Topic: ${topic || "Not specified"}
Specific focus: ${specifics || "No extra specifics"}
Item:
${JSON.stringify(result)}
`;
    return generateJsonWithGemini(repairPrompt);
  }

  if (method === "Practice questions" && Array.isArray(result.fields) && (hasAdviceAnswer(result.fields[1]) || hasThinPracticeAnswer(result.fields[1]))) {
    const repairPrompt = `
Rewrite this Discere practice question answer so it is a better model answer.
Return only JSON in this shape:
{"title":"short title","fields":["practice question","developed model answer"]}
Rules:
- Keep or improve the question.
- The answer must be 3 to 6 sentences, around 70 to 120 words.
- Include a clear direct answer, linked explanation points, and a useful example or consequence.
- Use accurate ${level || "GCSE"} level terminology.
- Never say "a good answer should", "should include", "marks", or "credit".
Item:
${JSON.stringify(result)}
`;
    return generateJsonWithGemini(repairPrompt);
  }

  if (["Exam questions", "Active recall"].includes(method) && Array.isArray(result.fields) && hasAdviceAnswer(result.fields[1] || result.fields[2])) {
    const repairPrompt = `
Rewrite this Discere revision item so the answer is a direct model answer, not advice.
Return only JSON in this shape:
{"title":"short title","fields":["question/topic","direct model answer"]}
Rules:
- Keep the question.
- Replace advice with the actual factual answer.
- Never say "a good answer should", "should include", "marks", or "credit".
Item:
${JSON.stringify(result)}
`;
    return generateJsonWithGemini(repairPrompt);
  }

  return result;
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
