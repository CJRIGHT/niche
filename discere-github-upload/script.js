const questions = [
  {
    text: "When learning something new, what helps you most?",
    options: [
      ["Reading", "reader"],
      ["Watching videos", "visual"],
      ["Listening to explanations", "audio"],
      ["Trying it myself", "handsOn"],
    ],
  },
  {
    text: "When someone gives you instructions, you prefer them to be:",
    options: [
      ["Written down", "reader"],
      ["Shown with pictures", "visual"],
      ["Explained out loud", "audio"],
      ["Demonstrated step by step", "stepByStep"],
    ],
  },
  {
    text: "When studying, what do you usually do?",
    options: [
      ["Highlight or reread notes", "reader"],
      ["Draw diagrams or mind maps", "visual"],
      ["Read notes aloud or discuss them", "audio"],
      ["Practice questions or activities", "handsOn"],
    ],
  },
  {
    text: "How long can you usually concentrate before needing a break?",
    options: [
      ["Less than 10 minutes", "focusedSprinter"],
      ["10-20 minutes", "focusedSprinter"],
      ["20-40 minutes", "balanced"],
      ["More than 40 minutes", "challenge"],
    ],
  },
  {
    text: "Do you find long paragraphs difficult to read?",
    options: [
      ["Never", "reader"],
      ["Sometimes", "stepByStep"],
      ["Often", "stepByStep"],
      ["Almost always", "stepByStep"],
    ],
  },
  {
    text: "Do background noises distract you?",
    options: [
      ["Never", "challenge"],
      ["Sometimes", "balanced"],
      ["Often", "focusedSprinter"],
      ["Always", "focusedSprinter"],
    ],
  },
  {
    text: "Which type of learning do you enjoy the most?",
    options: [
      ["Reading articles or books", "reader"],
      ["Watching animations or videos", "visual"],
      ["Listening to podcasts or teachers", "audio"],
      ["Building, experimenting, or solving problems", "handsOn"],
    ],
  },
  {
    text: "When you forget something, what helps you remember it?",
    options: [
      ["Reading it again", "reader"],
      ["Seeing a picture or diagram", "visual"],
      ["Hearing someone explain it", "audio"],
      ["Doing it again", "handsOn"],
    ],
  },
  {
    text: "How do you feel about timed tasks?",
    options: [
      ["I like them", "challenge"],
      ["They're okay", "balanced"],
      ["I find them stressful", "stepByStep"],
      ["I need extra time", "stepByStep"],
    ],
  },
  {
    text: "What would make learning easier for you?",
    options: [
      ["Larger text", "stepByStep"],
      ["More pictures", "visual"],
      ["Audio support", "audio"],
      ["Shorter lessons", "focusedSprinter"],
      ["More practice activities", "handsOn"],
      ["Less distractions", "focusedSprinter"],
    ],
  },
];

const profiles = {
  reader: {
    title: "Reader",
    icon: "📖",
    color: "#0f766e",
    description: "You learn best by reading, writing notes, and turning information into clear written explanations.",
    methods: ["Cornell notes", "Summaries", "Flashcards", "Blurting", "Active recall", "Practice questions", "Spaced repetition"],
    plan: [
      "Start each topic by reading a short explanation and writing a five-line summary.",
      "Close your notes and use active recall to write everything you remember.",
      "Finish with practice questions so your knowledge becomes usable.",
    ],
  },
  visual: {
    title: "Visual Learner",
    icon: "🎥",
    color: "#4f46e5",
    description: "You understand information through images, diagrams, movement, and visual structure.",
    methods: ["Mind maps", "Colour coding", "Flowcharts", "Videos and animations", "Spaced repetition"],
    plan: [
      "Turn topics into diagrams before writing long notes.",
      "Use colour to separate causes, effects, definitions, and examples.",
      "Watch a short video, then redraw the process from memory.",
    ],
  },
  audio: {
    title: "Audio Learner",
    icon: "🎧",
    color: "#b33b58",
    description: "You remember information well when you hear it, say it, explain it, or discuss it.",
    methods: ["Text-to-speech", "Podcasts", "Recording notes", "Teach someone else", "Verbal active recall", "Spaced repetition"],
    plan: [
      "Read key points aloud and record short voice notes.",
      "Explain the topic as if you are teaching a younger student.",
      "Use text-to-speech for dense notes and repeat the main ideas out loud.",
    ],
  },
  handsOn: {
    title: "Hands-On Learner",
    icon: "🛠️",
    color: "#2f8f46",
    description: "You learn by doing, practising, building, experimenting, and applying ideas quickly.",
    methods: ["Practical activities", "Experiments", "Quizzes", "Simulations", "Exam questions", "Teach someone else"],
    plan: [
      "Begin with a worked example, then try a similar task yourself.",
      "Use quizzes and simulations to make ideas active.",
      "Correct mistakes immediately and repeat the task until it feels natural.",
    ],
  },
  focusedSprinter: {
    title: "Focused Sprinter",
    icon: "⚡",
    color: "#b86b12",
    description: "You concentrate best in short, energetic bursts with clear goals and regular breaks.",
    methods: ["15-25 minute Pomodoro sessions", "Flashcards", "Mini quizzes", "Spaced repetition", "Chunked notes"],
    plan: [
      "Set one tiny goal for each study sprint.",
      "Work for 15 to 25 minutes, then take a proper short break.",
      "Use flashcards or mini quizzes at the end of every sprint.",
    ],
  },
  stepByStep: {
    title: "Step-by-Step Learner",
    icon: "🧩",
    color: "#64748b",
    description: "You do best when information is broken into small chunks with clear order and low clutter.",
    methods: ["Chunked notes", "Flashcards", "Scaffolded questions", "Spaced repetition"],
    plan: [
      "Split the topic into small checkpoints before starting.",
      "Study one idea at a time and tick it off when you can explain it.",
      "Build up from easy questions to exam-style questions gradually.",
    ],
  },
  challenge: {
    title: "Challenge Seeker",
    icon: "🏆",
    color: "#7c3aed",
    description: "You enjoy testing yourself and learn well when revision feels active, measurable, and a little competitive.",
    methods: ["Timed exam questions", "Active recall", "Blurting", "Mock exams", "Quizzes", "Practice questions"],
    plan: [
      "Use a quick quiz before revising to find weak spots.",
      "Practise under timed conditions when you know the basics.",
      "Track your score, then repeat the hardest questions a few days later.",
    ],
  },
  balanced: {
    title: "Balanced Learner",
    icon: "🌱",
    color: "#0f766e",
    description: "You do not have one strong preference, so a varied revision mix will keep learning fresh and reliable.",
    methods: ["Flashcards", "Videos", "Active recall", "Mind maps", "Practice questions", "Spaced repetition"],
    plan: [
      "Mix one visual, one written, and one practice activity in each session.",
      "Use active recall to check that the method is working.",
      "Rotate techniques across the week so revision does not go stale.",
    ],
  },
};

const methodDetails = {
  "Active recall": "Test yourself before looking at notes.",
  Flashcards: "Use quick cards for definitions, formulae, and facts.",
  "Practice questions": "Apply knowledge in the format you will be assessed on.",
  Blurting: "Write everything you remember, then fill gaps in another colour.",
  "Mind maps": "Place the topic in the middle and branch ideas outward.",
  "Colour coding": "Use consistent colours for categories and priorities.",
  "Videos and animations": "Watch short explainers, then summarise what changed or moved.",
  "Text-to-speech": "Listen to written notes when reading feels heavy.",
  Podcasts: "Generate a podcast-style revision script and listen to it aloud.",
  "Recording notes": "Make short recordings of key explanations.",
  "Teach someone else": "Explain simply, then notice where you hesitate.",
  "Spaced repetition": "Return to material after increasing gaps.",
  "15-25 minute Pomodoro sessions": "Work in short timed blocks with clear breaks.",
  Pomodoro: "Work in short timed blocks with clear breaks.",
};

const methodAliases = {
  "Mini quizzes": "Quizzes",
  "Mock exams": "Exam questions",
  "Timed exam questions": "Exam questions",
  "Verbal active recall": "Active recall",
  "Videos": "Videos and animations",
  "Short lessons": "Chunked notes",
  "One topic at a time": "Chunked notes",
  "15-25 minute Pomodoro sessions": "Pomodoro",
};

const methodTools = {
  "Active recall": {
    title: "Active recall",
    type: "recall",
    fields: ["Topic", "Question", "Answer"],
  },
  Flashcards: {
    title: "Flashcards",
    type: "flashcards",
    fields: ["Front", "Back"],
  },
  "Practice questions": {
    title: "Practice questions",
    type: "questions",
    fields: ["Question", "Model answer"],
  },
  Blurting: {
    title: "Blurting",
    type: "blurting",
    fields: ["Topic", "Key points"],
  },
  "Mind maps": {
    title: "Mind maps",
    type: "map",
    fields: ["Visual mind map"],
  },
  "Colour coding": {
    title: "Colour coding",
    type: "colour",
    fields: ["Topic", "Green: definitions", "Blue: examples", "Red: mistakes", "Yellow: keywords"],
  },
  Flowcharts: {
    title: "Flowcharts",
    type: "map",
    fields: ["Process", "Ordered steps", "Decision points", "Common mistakes"],
  },
  "Videos and animations": {
    title: "Videos and animations",
    type: "resource",
    fields: ["Video title", "Link or notes"],
  },
  "Text-to-speech": {
    title: "Text-to-speech",
    type: "speech",
    fields: ["Title", "Text to read"],
  },
  Podcasts: {
    title: "Podcasts",
    type: "podcast",
    fields: ["Podcast title", "Podcast script"],
  },
  "Recording notes": {
    title: "Recording notes",
    type: "recording",
    fields: ["Recording title", "Spoken-note plan"],
  },
  "Teach someone else": {
    title: "Teach someone else",
    type: "teach",
    fields: ["Topic", "60-second explanation", "Analogy or example", "Questions they might ask"],
  },
  "Spaced repetition": {
    title: "Spaced repetition",
    type: "spaced",
    fields: ["Topic", "Thing to review"],
  },
  Pomodoro: {
    title: "Pomodoro",
    type: "pomodoro",
    fields: ["Session goal", "Minutes"],
  },
  "Cornell notes": {
    title: "Cornell notes",
    type: "notes",
    fields: ["Topic", "Cue questions", "Detailed notes", "Bottom summary"],
  },
  Summaries: {
    title: "Summaries",
    type: "summary",
    fields: ["Topic", "5 key points", "50-word summary", "Keywords to remember"],
  },
  "Chunked notes": {
    title: "Chunked notes",
    type: "checklist",
    fields: ["Topic", "Chunks"],
  },
  "Scaffolded questions": {
    title: "Scaffolded questions",
    type: "questions",
    fields: ["Starter question", "Support hints"],
  },
  "Practical activities": {
    title: "Practical activities",
    type: "activity",
    fields: ["Activity", "Materials or setup", "Steps to do", "What to check afterwards"],
  },
  Experiments: {
    title: "Experiments",
    type: "activity",
    fields: ["Experiment", "Hypothesis", "Method", "Result and conclusion"],
  },
  Quizzes: {
    title: "Quizzes",
    type: "questions",
    fields: ["Quiz question", "Correct answer"],
  },
  Simulations: {
    title: "Simulations",
    type: "activity",
    fields: ["Simulation", "Variables to change", "Prediction", "Result to record"],
  },
  "Exam questions": {
    title: "Exam questions",
    type: "questions",
    fields: ["Exam question", "Mark scheme"],
  },
};

const methodGuides = {
  "Active recall": {
    meaning: "Test your memory before checking notes.",
    steps: ["Read a small section", "Hide it", "Write or say everything you remember", "Check your notes and fix gaps"],
    example: "After learning photosynthesis, close the book and answer: What are the reactants and products?",
  },
  Flashcards: {
    meaning: "Small question-and-answer cards for quick self-testing.",
    steps: ["Put a question or keyword on the front", "Put the answer on the back", "Try the answer before flipping", "Repeat weak cards more often"],
    example: "Front: What is osmosis? Back: Movement of water through a partially permeable membrane.",
  },
  "Practice questions": {
    meaning: "Use questions like the ones you will get in an assessment.",
    steps: ["Try the question without notes", "Mark it with the answer or mark scheme", "Rewrite the bit you missed", "Try a similar question later"],
    example: "For maths, attempt a past-paper question, then correct every line where the method went wrong.",
  },
  Blurting: {
    meaning: "Write everything you remember about a topic as fast as you can.",
    steps: ["Pick one topic", "Set a short timer", "Write from memory", "Use notes to add missing facts in another colour"],
    example: "Topic: volcanoes. Blurt causes, plate boundaries, examples, impacts, and responses.",
  },
  "Mind maps": {
    meaning: "A visual map that connects ideas around one central topic.",
    steps: ["Put the topic in the centre", "Add main branches", "Add smaller details", "Use arrows for links or cause and effect"],
    example: "Centre: World War One. Branches: causes, trenches, weapons, home front, consequences.",
  },
  "Colour coding": {
    meaning: "Use colour to separate types of information.",
    steps: ["Choose a colour key", "Keep the same colours every time", "Use colour for meaning, not decoration", "Review one colour category at a time"],
    example: "Green for definitions, blue for examples, red for mistakes to avoid.",
  },
  "Text-to-speech": {
    meaning: "Let the computer read text aloud so you can learn by listening.",
    steps: ["Paste your notes", "Listen once without pausing", "Listen again and pause after key points", "Say the key points back aloud"],
    example: "Paste a history paragraph and turn it into three spoken bullet points.",
  },
  Podcasts: {
    meaning: "A revision podcast script that sounds like a short study episode, not just a summary.",
    steps: ["Choose a topic", "Generate a podcast script", "Listen to the episode", "Pause and repeat the recap aloud"],
    example: "A 3-minute GCSE biology episode with intro, host explanation, examples, recap, and outro.",
  },
  "Recording notes": {
    meaning: "Record yourself explaining a topic, then listen back.",
    steps: ["Plan the points", "Record a short explanation", "Listen for gaps", "Record a cleaner version"],
    example: "Record a 60-second explanation of how fractions are added.",
  },
  "Teach someone else": {
    meaning: "Explain the topic simply, as if teaching another person.",
    steps: ["Choose a topic", "Explain it in plain language", "Notice where you hesitate", "Revise that weak part"],
    example: "Teach a friend why rivers meander without using complicated words.",
  },
  "Spaced repetition": {
    meaning: "Review information after gaps so it stays in long-term memory.",
    steps: ["Learn it today", "Review tomorrow", "Review again in three days", "Review again next week"],
    example: "Revise French vocabulary on Monday, Tuesday, Friday, then the next Monday.",
  },
  Pomodoro: {
    meaning: "A focus method where you study in short timed bursts with breaks.",
    steps: ["Choose one small task", "Work for 15-25 minutes", "Take a 5-minute break", "Repeat, then take a longer break"],
    example: "25 minutes of flashcards, 5-minute break, then 25 minutes of exam questions.",
  },
  "Cornell notes": {
    meaning: "A note layout with cues, detailed notes, and a summary.",
    steps: ["Write key questions or keywords in the cue column", "Write notes beside them", "Cover the notes and answer the cues", "Summarise the page at the bottom"],
    example: "Cue: causes of earthquakes. Notes: plate movement, pressure, fault lines. Summary: earthquakes happen when stored pressure is released.",
  },
  "Scaffolded questions": {
    meaning: "Questions that start easy and gradually remove support.",
    steps: ["Begin with hints", "Try a similar question with fewer hints", "Then try one alone", "Check and repeat"],
    example: "First solve with a formula shown, then with only keywords, then with no help.",
  },
  "Exam questions": {
    meaning: "Assessment-style practice that builds timing and exam technique.",
    steps: ["Try without notes", "Use the mark scheme", "Write what each mark needed", "Redo the question later"],
    example: "Answer a 6-mark geography question, then highlight exactly where each mark came from.",
  },
};

const videoLevels = ["GCSE", "A Level"];
const videoTopics = ["Physics", "Maths", "English", "Geography", "History", "French", "Spanish", "Computing"];
const videoSearchTypes = [
  ["Revision playlist", "full revision playlist"],
  ["Topic explained", "topic explained"],
  ["Past paper walkthrough", "past paper walkthrough"],
  ["Exam questions", "exam questions explained"],
  ["Quick recap", "quick revision recap"],
  ["Animations", "animations"],
  ["Common mistakes", "common mistakes"],
  ["Grade booster", "grade 9 A star revision"],
];
const subjectSearches = {
  Physics: ["Cognito physics", "FreeScienceLessons physics", "physics online revision", "Isaac Physics"],
  Maths: ["Maths Genie", "Corbettmaths", "The GCSE Maths Tutor", "ExamSolutions maths"],
  English: ["Mr Bruff English", "Stacey Reay English", "English literature revision", "English language exam walkthrough"],
  Geography: ["Internet Geography", "Time for Geography", "geography case studies", "geography exam technique"],
  History: ["history revision", "history exam technique", "history source questions", "history knowledge organiser"],
  French: ["French listening practice", "French speaking exam", "French grammar revision", "French vocabulary GCSE A level"],
  Spanish: ["Spanish listening practice", "Spanish speaking exam", "Spanish grammar revision", "Spanish vocabulary GCSE A level"],
  Computing: ["Craig'n'Dave computing", "Computer Science Tutor", "computing paper walkthrough", "computer science revision"],
};

const pomodoroTaskBank = {
  Physics: [
    "Answer 5 calculation questions and write the formula used for each one.",
    "Make 6 flashcards for key equations, units, or definitions.",
    "Explain one process aloud, then draw a labelled diagram from memory.",
    "Do one exam-style question and mark it using a different colour.",
  ],
  Maths: [
    "Complete 8 short questions on one skill without checking notes.",
    "Redo 3 questions you previously got wrong and write the corrected method.",
    "Create 5 flashcards for formulae or rules you keep forgetting.",
    "Try one longer problem, then annotate each step of your working.",
  ],
  English: [
    "Plan one analytical paragraph using quotation, technique, effect, and context.",
    "Annotate one short extract and pick 3 useful quotations.",
    "Write a 5-minute thesis statement and 3 topic sentences for an essay.",
    "Make flashcards for 5 quotations, including what each quotation shows.",
  ],
  Geography: [
    "Create a mini case-study card with location, causes, impacts, and responses.",
    "Draw and label one process diagram from memory.",
    "Answer one 6-mark question using point, evidence, explanation, and link.",
    "Make a checklist of facts for one topic and test yourself without notes.",
  ],
  History: [
    "Build a timeline of 8 key events for one topic.",
    "Plan one essay paragraph with point, evidence, explanation, and judgement.",
    "Make 5 flashcards for dates, people, causes, or consequences.",
    "Practise one source question and write what makes the source useful or limited.",
  ],
  French: [
    "Learn 12 words, then cover them and rewrite the English and French meanings.",
    "Record yourself saying 6 sentences using today’s grammar point.",
    "Translate 5 sentences, then correct tense, agreement, and word order.",
    "Prepare 4 speaking answers and say each one aloud twice.",
  ],
  Spanish: [
    "Learn 12 words, then cover them and rewrite the English and Spanish meanings.",
    "Record yourself saying 6 sentences using today’s grammar point.",
    "Translate 5 sentences, then correct tense, agreement, and word order.",
    "Prepare 4 speaking answers and say each one aloud twice.",
  ],
  Computing: [
    "Write pseudocode for one small algorithm and trace it with sample data.",
    "Make 6 flashcards for keywords, protocols, or hardware terms.",
    "Answer 5 exam questions and highlight command words like describe or explain.",
    "Create a table comparing two concepts, such as RAM and storage.",
  ],
};

const questionsEl = document.querySelector("#questions");
const form = document.querySelector("#quizForm");
const statusMessage = document.querySelector("#statusMessage");
const results = document.querySelector("#results");
const resetButton = document.querySelector("#resetButton");
const previewProfile = document.querySelector("#previewProfile");
const studioTitle = document.querySelector("#studioTitle");
const studioBody = document.querySelector("#studioBody");
const studioCount = document.querySelector("#studioCount");
const authForm = document.querySelector("#authForm");
const authUsername = document.querySelector("#authUsername");
const authPassword = document.querySelector("#authPassword");
const authStatus = document.querySelector("#authStatus");
const loginButton = document.querySelector("#loginButton");
const signupButton = document.querySelector("#signupButton");
const logoutButton = document.querySelector("#logoutButton");
const currentUserLabel = document.querySelector("#currentUserLabel");
const exportDataButton = document.querySelector("#exportDataButton");
const importDataInput = document.querySelector("#importDataInput");
const backupStatus = document.querySelector("#backupStatus");
const usersKey = "discere:users";
const sessionKey = "discere:currentUser";
const storagePrefix = "discere:";
let activeMethod = "Flashcards";
let activeVideoLevel = "GCSE";
let activeVideoTopic = "Physics";
let activePomodoroLevel = "GCSE";
let activePomodoroTopic = "Physics";
let activePomodoroTaskIndex = 0;
let timerInterval = null;
let timerSeconds = 25 * 60;

function getToolName(method) {
  return methodAliases[method] ?? method;
}

function normaliseUsername(username) {
  return username.trim().toLowerCase().replace(/\s+/g, "-");
}

function getUsers() {
  return JSON.parse(localStorage.getItem(usersKey) || "{}");
}

function saveUsers(users) {
  localStorage.setItem(usersKey, JSON.stringify(users));
}

function getCurrentUser() {
  return localStorage.getItem(sessionKey) || "";
}

function getUserStorageKey(key) {
  const user = getCurrentUser();
  return `discere:user:${encodeURIComponent(user)}:${key}`;
}

function getStudySpaceKey() {
  return getUserStorageKey("studySpace");
}

function setBackupStatus(message) {
  if (backupStatus) {
    backupStatus.textContent = message;
  } else if (statusMessage) {
    statusMessage.textContent = message;
  }
}

function getDiscereBackup() {
  const data = {};

  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key?.startsWith(storagePrefix)) {
      data[key] = localStorage.getItem(key);
    }
  }

  return {
    app: "Discere",
    version: 1,
    exportedAt: new Date().toISOString(),
    data,
  };
}

function exportDiscereData() {
  const backup = getDiscereBackup();
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `discere-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  setBackupStatus("Backup downloaded.");
}

function importDiscereData(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const backup = JSON.parse(reader.result);
      if (backup.app !== "Discere" || !backup.data || typeof backup.data !== "object") {
        throw new Error("This is not a Discere backup.");
      }

      Object.entries(backup.data).forEach(([key, value]) => {
        if (key.startsWith(storagePrefix) && typeof value === "string") {
          localStorage.setItem(key, value);
        }
      });

      setBackupStatus("Backup imported. Log in with the restored account.");
    } catch (error) {
      setBackupStatus("That backup file could not be imported.");
    }
  });
  reader.readAsText(file);
}

function bindBackupControls() {
  exportDataButton?.addEventListener("click", exportDiscereData);
  importDataInput?.addEventListener("change", () => {
    importDiscereData(importDataInput.files?.[0]);
    importDataInput.value = "";
  });
}

function requireLoggedIn() {
  if (!getCurrentUser()) {
    window.location.href = "./login.html";
    return false;
  }

  if (currentUserLabel) {
    currentUserLabel.textContent = `Logged in: ${getCurrentUser()}`;
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem(sessionKey);
      window.location.href = "./login.html";
    });
  }

  return true;
}

function getSaved(method) {
  return JSON.parse(localStorage.getItem(getUserStorageKey(`method:${method}`)) || "[]");
}

function saveItems(method, items) {
  localStorage.setItem(getUserStorageKey(`method:${method}`), JSON.stringify(items));
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderQuestions() {
  questionsEl.innerHTML = questions.map((question, index) => {
    const options = question.options.map(([label, value], optionIndex) => `
      <label class="option">
        <input type="radio" name="q${index}" value="${value}" data-label="${label}" ${optionIndex === 0 ? "required" : ""}>
        <span>${label}</span>
      </label>
    `).join("");

    return `
      <article class="question-card">
        <fieldset>
          <legend>${index + 1}. ${question.text}</legend>
          <div class="option-grid">${options}</div>
        </fieldset>
      </article>
    `;
  }).join("");
}

function collectAnswers() {
  return questions.map((question, index) => {
    const selected = form.querySelector(`input[name="q${index}"]:checked`);
    return {
      question: question.text,
      answer: selected?.dataset.label ?? "",
      category: selected?.value ?? "balanced",
    };
  });
}

function localCategorise(answers) {
  const scores = Object.keys(profiles).reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
  answers.forEach((answer) => {
    scores[answer.category] += 1;
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  const tied = sorted.filter(([, score]) => score === topScore);

  if (topScore <= 1 || tied.length >= 4) {
    return "balanced";
  }

  return sorted[0][0];
}

async function geminiCategorise(answers) {
  const allowedProfiles = Object.keys(profiles);
  const response = await fetch("/api/categorise", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers }),
  });

  if (!response.ok) {
    throw new Error("Gemini request failed");
  }

  const parsed = await response.json();

  if (!allowedProfiles.includes(parsed.profile)) {
    throw new Error("Gemini returned an unknown profile");
  }

  return parsed.profile;
}

function getAdjustments(answers) {
  const extraAdjustments = new Set(["Spaced repetition"]);

  answers.forEach((answer) => {
    if (answer.answer === "Larger text") extraAdjustments.add("Use larger text and shorter lines");
    if (answer.answer === "More pictures") extraAdjustments.add("Add diagrams or examples beside notes");
    if (answer.answer === "Audio support") extraAdjustments.add("Use text-to-speech or voice notes");
    if (answer.answer === "Shorter lessons") extraAdjustments.add("Break lessons into short blocks");
    if (answer.answer === "Less distractions") extraAdjustments.add("Use a quiet, low-clutter study setup");
    if (answer.answer.includes("stressful") || answer.answer.includes("extra time")) extraAdjustments.add("Practise timed tasks gently before full mocks");
  });

  return [...extraAdjustments];
}

function getProfileDeepDive(profileKey, profile) {
  const deepDives = {
    reader: {
      strengths: "You usually understand best when information is written clearly and you can turn it into your own notes.",
      rhythm: "Start with short reading, then write a summary, then close the notes and test yourself.",
      watch: "Do not just reread and highlight. You need active recall, practice questions, and spaced repetition so the information sticks.",
    },
    visual: {
      strengths: "You spot patterns, structures, and links when information is shown visually.",
      rhythm: "Begin with a diagram or mind map, add colour-coded links, then redraw the idea from memory.",
      watch: "Do not spend all your time making things look neat. The goal is to remember and explain the ideas.",
    },
    audio: {
      strengths: "You remember ideas well when you hear them, say them, or explain them in your own voice.",
      rhythm: "Generate or write a script, listen to it, pause often, then explain the topic aloud without looking.",
      watch: "Listening alone can feel productive without testing memory. Add verbal active recall after each session.",
    },
    handsOn: {
      strengths: "You learn by doing, checking, correcting, and applying ideas in realistic tasks.",
      rhythm: "Start with a worked example, attempt a task, mark it, then repeat the part that went wrong.",
      watch: "Do not skip the explanation after the activity. Write what happened, why it happened, and how to improve.",
    },
    focusedSprinter: {
      strengths: "You work best when the task is small, timed, and has a clear finish line.",
      rhythm: "Use 15-25 minute sprints with one tiny goal, then take a real break and review what you produced.",
      watch: "Avoid vague goals like 'revise science'. Pick something concrete like 'make 8 flashcards on circuits'.",
    },
    stepByStep: {
      strengths: "You learn well when information is broken into smaller pieces with a clear order.",
      rhythm: "Split the topic into chunks, complete one step at a time, and only move on when you can explain it.",
      watch: "Do not overload the session with too many methods. Keep the page simple and follow the sequence.",
    },
    challenge: {
      strengths: "You improve quickly when revision feels like a test, target, score, or challenge.",
      rhythm: "Try a question first, mark it honestly, fix the weak part, then try another under slightly harder conditions.",
      watch: "Do not jump into timed tests too early. Build accuracy first, then add speed.",
    },
    balanced: {
      strengths: "You can use a mix of methods, which helps keep revision flexible and less repetitive.",
      rhythm: "Use one visual method, one active recall method, and one practice task in each study block.",
      watch: "Because you do not have one strong preference, choose methods deliberately instead of drifting between them.",
    },
  };

  const detail = deepDives[profileKey] || deepDives.balanced;
  return `
    <div class="profile-detail-grid">
      <article>
        <span>Strength</span>
        <p>${escapeHtml(detail.strengths)}</p>
      </article>
      <article>
        <span>Best rhythm</span>
        <p>${escapeHtml(detail.rhythm)}</p>
      </article>
      <article>
        <span>Watch out for</span>
        <p>${escapeHtml(detail.watch)}</p>
      </article>
      <article>
        <span>Best methods</span>
        <p>${escapeHtml(profile.methods.slice(0, 5).join(", "))}</p>
      </article>
    </div>
  `;
}

function bindSidePanelToggle() {
  const button = document.querySelector("#sideToggle");
  if (!button) return;

  function setCollapsed(collapsed) {
    document.body.classList.toggle("side-collapsed", collapsed);
    button.classList.toggle("is-open", !collapsed);
    button.setAttribute("aria-expanded", String(!collapsed));
    button.setAttribute("aria-label", collapsed ? "Expand side panel" : "Minimise side panel");
    localStorage.setItem(getUserStorageKey("sideCollapsed"), collapsed ? "yes" : "no");
  }

  setCollapsed(localStorage.getItem(getUserStorageKey("sideCollapsed")) === "yes");
  button.addEventListener("click", () => setCollapsed(!document.body.classList.contains("side-collapsed")));
}

function bindProfileInfo(profileKey, profile) {
  const open = document.querySelector("#profileInfoButton");
  const modal = document.querySelector("#profileModal");
  const close = document.querySelector("#closeProfileModal");
  const title = document.querySelector("#profileModalTitle");
  const body = document.querySelector("#profileModalBody");

  if (!open || !modal || !close || !title || !body) return;

  title.textContent = `${profile.icon} ${profile.title}`;
  body.innerHTML = getProfileDeepDive(profileKey, profile);

  function setOpen(isOpen) {
    modal.hidden = !isOpen;
    document.body.classList.toggle("modal-open", isOpen);
  }

  open.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) setOpen(false);
  });
}

function renderRevisionSpace(studySpace) {
  const { profileKey, answers = [], name = "Your", usedGemini = false } = studySpace;
  const profile = profiles[profileKey];

  if (!profile) {
    window.location.href = "./index.html";
    return;
  }

  document.querySelector("#resultName").textContent = `${name}'s ${profile.title} space`;
  document.querySelector("#resultDescription").textContent = `${profile.description} ${usedGemini ? "This result was categorised with Gemini." : "This result was categorised locally."}`;
  document.querySelector("#profileBadge").textContent = `${profile.icon} ${profile.title}`;
  document.querySelector("#profileBadge").style.background = profile.color;
  previewProfile.textContent = `${profile.icon} ${profile.title}`;

  document.querySelector("#methodsList").innerHTML = profile.methods.map((method) => `
    <button class="method-chip" type="button" data-method="${method}" title="${methodDetails[method] ?? "Useful revision technique"}">${method}</button>
  `).join("");
  document.querySelectorAll(".method-chip").forEach((button) => {
    button.addEventListener("click", () => renderStudio(button.dataset.method));
  });

  document.querySelector("#learningPlan").innerHTML = profile.plan.map((step) => `<li>${step}</li>`).join("");

  const sessionItems = [
    profileKey === "focusedSprinter" ? "15-25 min focus" : "25-40 min focus",
    "5 min review",
    "1 active recall check",
    "Repeat tomorrow",
  ];

  document.querySelector("#sessionPlan").innerHTML = sessionItems.map((item) => `<div class="session-item">${item}</div>`).join("");
  document.querySelector("#adjustments").innerHTML = getAdjustments(answers).map((item) => `<div class="adjustment-chip">${item}</div>`).join("");
  bindProfileInfo(profileKey, profile);
  renderStudio(profile.methods[0]);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatDateKey(date) {
  return startOfDay(date).toISOString().slice(0, 10);
}

function getCalendarReviews() {
  return getSaved("Spaced repetition")
    .filter((item) => item.due)
    .map((item) => ({
      title: item.fields?.[0] || "Review item",
      detail: item.fields?.[1] || "",
      due: new Date(item.due),
      rating: item.lastRating || "",
    }))
    .sort((a, b) => a.due - b.due);
}

function renderReviewCalendar() {
  const calendarGrid = document.querySelector("#calendarGrid");
  const calendarCount = document.querySelector("#calendarCount");
  if (!calendarGrid || !calendarCount) return;

  const today = startOfDay(new Date());
  const reviews = getCalendarReviews();
  const reviewsByDate = reviews.reduce((acc, review) => {
    const key = formatDateKey(review.due);
    acc[key] = acc[key] || [];
    acc[key].push(review);
    return acc;
  }, {});

  calendarCount.textContent = `${reviews.length} ${reviews.length === 1 ? "review" : "reviews"}`;
  calendarGrid.innerHTML = Array.from({ length: 14 }, (_, offset) => {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    const key = formatDateKey(date);
    const dayReviews = reviewsByDate[key] || [];
    const label = date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });

    return `
      <article class="calendar-day ${offset === 0 ? "today" : ""}">
        <span class="calendar-date">${label}</span>
        ${dayReviews.length ? dayReviews.map((review) => `
          <div class="calendar-review">
            ${escapeHtml(review.title)}
          </div>
        `).join("") : `<span class="calendar-empty">No reviews</span>`}
      </article>
    `;
  }).join("");
}

function makeYouTubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function getVideoLinkData(level, topic) {
  const generalLinks = videoSearchTypes.map(([label, query]) => ({
    label,
    query: `${level} ${topic} ${query}`,
    description: `Search YouTube for ${level} ${topic.toLowerCase()} ${label.toLowerCase()}.`,
  }));

  const subjectLinks = (subjectSearches[topic] || []).map((query) => ({
    label: query,
    query: `${level} ${query}`,
    description: `Find ${level} ${topic.toLowerCase()} videos using this focused search.`,
  }));

  return [...generalLinks, ...subjectLinks].map((item) => ({
    ...item,
    url: makeYouTubeSearchUrl(item.query),
  }));
}

function renderVideoLibrary() {
  const levelFilters = document.querySelector("#levelFilters");
  const topicFilters = document.querySelector("#topicFilters");
  const videoLinks = document.querySelector("#videoLinks");
  const videoCount = document.querySelector("#videoCount");

  if (!levelFilters || !topicFilters || !videoLinks) return;

  levelFilters.innerHTML = videoLevels.map((level) => `
    <button class="filter-button ${level === activeVideoLevel ? "active" : ""}" type="button" data-level="${level}">${level}</button>
  `).join("");

  topicFilters.innerHTML = videoTopics.map((topic) => `
    <button class="filter-button ${topic === activeVideoTopic ? "active" : ""}" type="button" data-topic="${topic}">${topic}</button>
  `).join("");

  const links = getVideoLinkData(activeVideoLevel, activeVideoTopic);
  videoCount.textContent = `${links.length} links`;
  videoLinks.innerHTML = links.map((item) => `
    <a class="video-link-card" href="${item.url}" target="_blank" rel="noreferrer">
      <strong>${escapeHtml(item.label)}</strong>
      <span>${escapeHtml(item.description)}</span>
    </a>
  `).join("");

  levelFilters.querySelectorAll("[data-level]").forEach((button) => {
    button.addEventListener("click", () => {
      activeVideoLevel = button.dataset.level;
      renderVideoLibrary();
    });
  });

  topicFilters.querySelectorAll("[data-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      activeVideoTopic = button.dataset.topic;
      renderVideoLibrary();
    });
  });
}

function getPomodoroTask(level, topic) {
  const tasks = pomodoroTaskBank[topic] || pomodoroTaskBank.Physics;
  const levelPrefix = level === "A Level" ? "A Level depth" : "GCSE core";
  return `${levelPrefix}: ${tasks[activePomodoroTaskIndex % tasks.length]}`;
}

function renderPomodoroSelectors() {
  return `
    <div class="selector-block pomodoro-task-panel">
      <div class="studio-header">
        <div>
          <p class="section-kicker">Focus task</p>
          <h3>Pick a level and topic</h3>
        </div>
        <span class="studio-count">${activePomodoroLevel}</span>
      </div>
      <div>
        <span class="selector-label">Level</span>
        <div class="segmented" id="pomodoroLevelFilters">
          ${videoLevels.map((level) => `
            <button class="filter-button ${level === activePomodoroLevel ? "active" : ""}" type="button" data-pomodoro-level="${level}">${level}</button>
          `).join("")}
        </div>
      </div>
      <div>
        <span class="selector-label">Topic</span>
        <div class="topic-grid" id="pomodoroTopicFilters">
          ${videoTopics.map((topic) => `
            <button class="filter-button ${topic === activePomodoroTopic ? "active" : ""}" type="button" data-pomodoro-topic="${topic}">${topic}</button>
          `).join("")}
        </div>
      </div>
      <div class="task-card">
        <span>Small task for this Pomodoro</span>
        <strong id="pomodoroTask">${escapeHtml(getPomodoroTask(activePomodoroLevel, activePomodoroTopic))}</strong>
      </div>
      <div class="practice-actions">
        <button class="secondary-button" type="button" id="newPomodoroTask">Give me another task</button>
      </div>
    </div>
  `;
}

function renderStudio(method) {
  activeMethod = method;
  const toolName = getToolName(method);
  const tool = methodTools[toolName] ?? methodTools["Active recall"];
  const saved = getSaved(toolName);
  const isFlashcardTool = tool.type === "flashcards";
  studioTitle.textContent = tool.title;
  studioCount.textContent = `${saved.length} saved`;

  document.querySelectorAll(".method-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.method === method);
  });

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  studioBody.innerHTML = `
    ${renderMethodGuide(toolName, tool)}
    ${renderToolForm(toolName, tool)}
    ${renderPracticeBox(toolName, tool, saved)}
    <div class="saved-items ${isFlashcardTool ? "flashcard-saved-items" : ""}">${renderSavedItems(toolName, tool, saved)}</div>
  `;

  bindStudioEvents(toolName, tool, saved);
}

function renderMethodGuide(toolName, tool) {
  const guide = methodGuides[toolName];

  if (!guide) {
    return `
      <div class="method-guide">
        <strong>How ${escapeHtml(tool.title)} works</strong>
        <p>${escapeHtml(methodDetails[toolName] ?? "Create revision material, practise it, and return to it later.")}</p>
      </div>
    `;
  }

  return `
    <div class="method-guide">
      <strong>How ${escapeHtml(tool.title)} works</strong>
      <p>${escapeHtml(guide.meaning)}</p>
      <ol>
        ${guide.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
      <p><b>Example:</b> ${escapeHtml(guide.example)}</p>
    </div>
  `;
}

function getFieldHelp(toolName, field, index) {
  const help = {
    "Mind maps": [
      "The idea in the middle of the map.",
      "One branch per line, such as causes, effects, examples, keywords.",
      "Links between branches, such as cause -> effect or keyword -> example.",
      "What you will redraw from memory during practice.",
    ],
    "Colour coding": [
      "What this colour key is for.",
      "Definitions or rules.",
      "Examples, case studies, or quotes.",
      "Common errors, traps, or things you forget.",
      "Formulae, dates, names, or key vocabulary.",
    ],
    Flowcharts: [
      "Name the process.",
      "Put each step on a new line.",
      "Where choices, conditions, or branches happen.",
      "Where people usually make mistakes.",
    ],
    "Teach someone else": [
      "The thing you are going to explain.",
      "Explain it simply, as if speaking to a younger student.",
      "A real example or comparison that makes it click.",
      "Questions a listener might ask you.",
    ],
    "Cornell notes": [
      "The page topic.",
      "Questions, keywords, or prompts for the left cue column.",
      "Main notes, examples, facts, and explanations.",
      "The short conclusion at the bottom of the page.",
    ],
    Summaries: [
      "The topic you are shrinking down.",
      "One important point per line.",
      "Force yourself to keep it short and precise.",
      "Words you must be able to define or use.",
    ],
    "Practical activities": [
      "The task you will physically do.",
      "Equipment, website, page, or setup needed.",
      "Numbered steps to complete.",
      "How you will know it worked.",
    ],
    Experiments: [
      "The investigation.",
      "What you think will happen and why.",
      "The method, variables, and controls.",
      "What happened and what it means.",
    ],
    Simulations: [
      "The simulation or model.",
      "What you will change.",
      "What you expect to happen.",
      "What actually happens.",
    ],
  };

  return help[toolName]?.[index] || `Add ${field.toLowerCase()} for this method.`;
}

function renderStructuredFormIntro(toolName, tool) {
  const intros = {
    "Cornell notes": "Build a proper Cornell page: cue questions on the left, detailed notes on the right, and a short summary at the bottom.",
    Summaries: "Compress the topic into key points, a tight summary, and keywords you can test later.",
    "Mind maps": "Turn the topic into branches and links, then practise redrawing the structure from memory.",
    Flowcharts: "Break a process into ordered steps, decisions, and common mistakes.",
    "Colour coding": "Create a colour key with a job for each colour, so colour helps memory instead of just decorating notes.",
    "Teach someone else": "Prepare a mini lesson: explanation, example, and likely questions.",
    "Practical activities": "Plan the doing part of revision: setup, steps, and how to check success.",
    Experiments: "Plan the investigation like a science write-up: hypothesis, method, result, conclusion.",
    Simulations: "Decide what to change, predict what happens, then record what the simulation shows.",
    "Chunked notes": "Break a topic into clear chunks or steps, then practise them one at a time.",
  };

  if (!intros[toolName]) return "";

  return `
    <div class="form-intro">
      <strong>${escapeHtml(tool.title)} builder</strong>
      <p>${escapeHtml(intros[toolName])}</p>
    </div>
  `;
}

function renderStandardFields(toolName, tool) {
  return tool.fields.map((field, index) => {
    const id = `toolField${index}`;
    const isPomodoroMinutes = tool.type === "pomodoro" && index === 1;
    const input = index === 0 || isPomodoroMinutes
      ? `<input id="${id}" name="${id}" type="text" placeholder="${escapeHtml(field)}">`
      : `<textarea id="${id}" name="${id}" placeholder="${escapeHtml(getFieldHelp(toolName, field, index))}"></textarea>`;
    return `
      <label class="field ${index > 0 && !isPomodoroMinutes ? "full" : ""}">
        <span>${escapeHtml(field)}</span>
        ${input}
      </label>
    `;
  }).join("");
}

function renderMindMapGenerator(toolName, tool) {
  return `
    <form class="tool-form" id="toolForm">
      <div class="ai-generator-panel">
        <div>
          <strong>Visual mind map generator</strong>
          <p>Add a title, level, exam board, and any notes. Gemini will build the full visual mind map with branches and notes.</p>
        </div>
        <div class="field-grid">
          <label class="field">
            <span>Title</span>
            <input id="mindMapTopic" type="text" placeholder="e.g. Photosynthesis">
          </label>
          <label class="field">
            <span>Level</span>
            <select id="mindMapLevel">
              <option>GCSE</option>
              <option>A Level</option>
            </select>
          </label>
          <label class="field">
            <span>Exam board</span>
            <input id="mindMapExamBoard" type="text" placeholder="e.g. AQA, Edexcel, OCR">
          </label>
          <label class="field full">
            <span>Optional notes or focus</span>
            <textarea id="mindMapInfo" placeholder="Paste notes, keywords, textbook points, weak areas, or leave this blank and let Gemini build from the title."></textarea>
          </label>
        </div>
        <div class="tool-actions">
          <button class="secondary-button" type="button" id="generateMindMap">Generate mind map</button>
          <span class="status" id="mindMapStatus"></span>
        </div>
      </div>
      <input id="mindMapVisualJson" type="hidden" value="">
      <div class="generated-mindmap-preview" id="generatedMindMapPreview" hidden></div>
      <div class="tool-actions">
        <button class="primary-button" type="submit">Save ${tool.title}</button>
        <button class="ghost-button" type="button" id="clearMethod">Clear saved</button>
      </div>
    </form>
  `;
}

function canUseGeminiHelper(toolName, tool) {
  if (toolName === "Mind maps" || toolName === "Quizzes") return false;
  if (["resource"].includes(tool.type)) return false;
  return ["recall", "questions", "blurting", "flashcards", "colour", "notes", "summary", "checklist", "speech", "podcast", "recording", "teach", "spaced", "pomodoro", "activity"].includes(tool.type);
}

function renderRevisionHelperPanel(toolName, tool) {
  if (!canUseGeminiHelper(toolName, tool)) return "";

  const examples = {
    "Active recall": "e.g. GCSE biology cells, make a question and answer I can test myself on",
    Flashcards: "e.g. AQA physics electricity key definitions",
    Blurting: "e.g. everything to remember about Macbeth Act 1",
    "Practice questions": "e.g. Edexcel maths algebra, create one exam-style question",
    "Exam questions": "e.g. AQA geography rivers, make a 6-mark question with mark scheme",
    "Scaffolded questions": "e.g. GCSE chemistry bonding, build from easy hints to a final question",
    "Colour coding": "e.g. history Cold War facts sorted into definitions, examples, mistakes, keywords",
    "Cornell notes": "e.g. AQA physics forces, cue questions and detailed notes",
    Summaries: "e.g. GCSE physics electricity, make the summary short and exam-focused",
    "Chunked notes": "e.g. split photosynthesis into 5 small steps",
    "Text-to-speech": "e.g. write a short script explaining river erosion",
    Podcasts: "e.g. make a 3-minute GCSE AQA biology podcast on cell organelles",
    "Recording notes": "e.g. plan a 60-second spoken note about Spanish tenses",
    "Teach someone else": "e.g. explain river erosion to a Year 10 student",
    "Spaced repetition": "e.g. create a review item for French food vocabulary",
    Pomodoro: "e.g. suggest a 25-minute GCSE maths task",
    "Practical activities": "e.g. a practical task to understand circuits",
    Experiments: "e.g. experiments for rates of reaction",
    Simulations: "e.g. simulation ideas for population change",
  };

  return `
    <div class="ai-generator-panel">
      <div>
        <strong>Gemini helper</strong>
        <p>Give Discere a topic and it will suggest useful content for this revision method.</p>
      </div>
      <div class="field-grid">
        <label class="field">
          <span>Topic</span>
          <input id="helperTopic" type="text" placeholder="${escapeHtml(examples[toolName] || "What are you studying?")}">
        </label>
        <label class="field">
          <span>Level</span>
          <select id="helperLevel">
            <option>GCSE</option>
            <option>A Level</option>
          </select>
        </label>
        <label class="field full">
          <span>Specifics</span>
          <textarea id="helperSpecifics" placeholder="Add exam board, topic details, weak areas, or what you want included."></textarea>
        </label>
      </div>
      <div class="tool-actions">
        <button class="secondary-button" type="button" id="generateRevisionContent">Generate suggestion</button>
        <span class="status" id="helperStatus"></span>
      </div>
    </div>
  `;
}

function renderQuizGenerator(toolName, tool) {
  return `
    <form class="tool-form" id="toolForm">
      <div class="form-intro">
        <strong>Quiz builder</strong>
        <p>Use Gemini to create a quiz from the topic, level, and specifics you give it, or add a single quiz question manually.</p>
      </div>
      <div class="ai-generator-panel">
        <div class="field-grid">
          <label class="field">
            <span>What are you studying?</span>
            <input id="quizTopic" type="text" placeholder="e.g. Macbeth, electricity, rivers">
          </label>
          <label class="field">
            <span>Level</span>
            <select id="quizLevel">
              <option>GCSE</option>
              <option>A Level</option>
            </select>
          </label>
          <label class="field">
            <span>Number of questions</span>
            <input id="quizCount" type="number" min="3" max="12" value="6">
          </label>
          <label class="field full">
            <span>Specifics</span>
            <textarea id="quizSpecifics" placeholder="Add exam board, subtopic, key words, difficulty, or what you struggle with."></textarea>
          </label>
        </div>
        <div class="tool-actions">
          <button class="secondary-button" type="button" id="generateQuiz">Generate and save quiz</button>
          <span class="status" id="quizStatus"></span>
        </div>
      </div>
      <div class="form-intro">
        <strong>Add one question manually</strong>
        <p>Write one quiz question and its correct answer yourself.</p>
      </div>
      <div class="field-grid">${renderStandardFields(toolName, tool)}</div>
      <div class="tool-actions">
        <button class="primary-button" type="submit">Save ${tool.title}</button>
        <button class="ghost-button" type="button" id="clearMethod">Clear saved</button>
      </div>
    </form>
  `;
}

function renderToolForm(toolName, tool) {
  if (toolName === "Mind maps") {
    return renderMindMapGenerator(toolName, tool);
  }

  if (toolName === "Quizzes") {
    return renderQuizGenerator(toolName, tool);
  }

  if (tool.type === "checklist") {
    return `
      <form class="tool-form" id="toolForm">
        ${renderStructuredFormIntro(toolName, tool)}
        <div class="field-grid">
          <label class="field full">
            <span>${escapeHtml(tool.fields[0])}</span>
            <input id="toolField0" name="toolField0" type="text" placeholder="${escapeHtml(tool.fields[0])}">
          </label>
        </div>
        <div class="step-builder" id="stepBuilder">
          ${[1, 2, 3, 4].map((step) => `
            <label class="field step-field">
              <span>Step ${step}</span>
              <input class="checklist-step-input" type="text" placeholder="Write step ${step}">
            </label>
          `).join("")}
        </div>
        <div class="tool-actions">
          <button class="secondary-button" type="button" id="addChecklistStep">Add another step</button>
          <button class="primary-button" type="submit">Save ${tool.title}</button>
          <button class="ghost-button" type="button" id="clearMethod">Clear saved</button>
        </div>
      </form>
    `;
  }

  return `
    <form class="tool-form" id="toolForm">
      ${renderStructuredFormIntro(toolName, tool)}
      ${renderRevisionHelperPanel(toolName, tool)}
      <div class="field-grid">${renderStandardFields(toolName, tool)}</div>
      <div class="tool-actions">
        <button class="primary-button" type="submit">Save ${tool.title}</button>
        <button class="ghost-button" type="button" id="clearMethod">Clear saved</button>
      </div>
    </form>
  `;
}

function getPracticeQuestion(tool, item) {
  if (!item) return "Create an item above to practise.";
  if (tool.type === "recall") return item.fields[1] || item.fields[0];
  return item.fields[0];
}

function getPracticeAnswer(tool, item) {
  if (!item) return "";
  if (tool.type === "recall") return item.fields[2] || item.fields[1] || "";
  return item.fields.slice(1).join("\n\n");
}

function normaliseAnswerText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .filter((word) => !["the", "and", "for", "that", "with", "this", "from", "are", "was", "were", "you", "your"].includes(word));
}

function judgeAnswer(userAnswer, modelAnswer) {
  const userWords = normaliseAnswerText(userAnswer);
  const modelWords = normaliseAnswerText(modelAnswer);

  if (!userWords.length) {
    return {
      rating: "empty",
      score: 0,
      label: "No answer yet",
      message: "Write an answer first, then check it.",
    };
  }

  if (!modelWords.length) {
    return {
      rating: "unknown",
      score: 0,
      label: "Needs self-check",
      message: "There is no saved answer to compare against.",
    };
  }

  const userSet = new Set(userWords);
  const modelSet = new Set(modelWords);
  const matched = [...modelSet].filter((word) => userSet.has(word));
  const coverage = matched.length / modelSet.size;
  const extraDetail = userWords.length / Math.max(1, modelWords.length);
  const score = Math.min(100, Math.round((coverage * 85) + (Math.min(extraDetail, 1) * 15)));

  if (coverage >= 0.72 || (coverage >= 0.58 && extraDetail >= 0.8)) {
    return {
      rating: "good",
      score,
      label: "Likely right",
      message: `Discere found ${matched.length} key matches. Use the buttons below if that judgement is off.`,
    };
  }

  if (coverage >= 0.38) {
    return {
      rating: "partial",
      score,
      label: "Partly right",
      message: `Some key ideas match, but it looks like bits are missing. Check the saved answer.`,
    };
  }

  return {
    rating: "again",
    score,
    label: "Likely wrong",
    message: "Discere could not find many of the saved key ideas. Check it, then override if needed.",
  };
}

function splitPracticeLines(value) {
  return String(value || "")
    .split(/\n|,|;/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function renderListFromText(value) {
  const lines = splitPracticeLines(value);
  if (!lines.length) return `<p>${escapeHtml(value || "Nothing added yet.")}</p>`;
  return `<ul class="structured-list">${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>`;
}

function getFieldValue(item, index) {
  return item.fields?.[index] || "";
}

function renderInteractiveMindMap(map, options = {}) {
  const branches = Array.isArray(map?.branches) ? map.branches : [];
  const editable = Boolean(options.editable);
  const itemId = options.itemId || "";
  const encodedMap = escapeHtml(JSON.stringify({ ...map, branches }));
  return `
    <div class="interactive-mindmap" data-mindmap data-editable="${editable ? "true" : "false"}" data-item-id="${escapeHtml(itemId)}" data-map="${encodedMap}">
      <div class="mindmap-node mindmap-root">${escapeHtml(map?.centralIdea || "Mind map")}</div>
      <div class="interactive-branches">
        ${branches.map((branch, index) => `
          <button class="mindmap-node mindmap-branch" type="button" data-map-branch="${index}">
            <strong>${escapeHtml(branch.title || `Branch ${index + 1}`)}</strong>
            <span>${Array.isArray(branch.details) ? branch.details.length : 0} details</span>
          </button>
        `).join("")}
      </div>
      ${editable ? `
        <div class="mindmap-edit-row">
          <input class="mindmap-new-branch" type="text" placeholder="Add a new branch">
          <button class="secondary-button" type="button" data-map-add-branch>Add branch</button>
        </div>
      ` : ""}
      <div class="mindmap-detail-panel">
        <span>Click a branch</span>
        <p>Open a branch to see or edit the detail Gemini generated for it.</p>
      </div>
      <div class="mindmap-links">
        <span>Cross-links</span>
        ${renderListFromText(Array.isArray(map?.crossLinks) ? map.crossLinks.join("\n") : map?.crossLinks || "")}
      </div>
      <div class="mindmap-links">
        <span>Memory sketch plan</span>
        <p>${escapeHtml(map?.memorySketchPlan || "Cover the map and redraw it from memory.")}</p>
      </div>
    </div>
  `;
}

function bindInteractiveMindMaps(root = document) {
  root.querySelectorAll("[data-mindmap]").forEach((mapElement) => {
    const detailPanel = mapElement.querySelector(".mindmap-detail-panel");
    const editable = mapElement.dataset.editable === "true";
    const itemId = mapElement.dataset.itemId || "";
    let mapData = JSON.parse(mapElement.dataset.map || "null");

    function persist() {
      const hidden = document.querySelector("#mindMapVisualJson");
      if (hidden) hidden.value = JSON.stringify(mapData);

      if (itemId) {
        const nextItems = getSaved("Mind maps").map((item) => item.id === itemId ? { ...item, visualMap: mapData, fields: [mapData.centralIdea || "Mind map"] } : item);
        saveItems("Mind maps", nextItems);
      }
    }

    function refresh() {
      const parent = mapElement.parentElement;
      mapElement.outerHTML = renderInteractiveMindMap(mapData, { editable, itemId });
      bindInteractiveMindMaps(parent);
      persist();
    }

    mapElement.querySelector("[data-map-add-branch]")?.addEventListener("click", () => {
      const input = mapElement.querySelector(".mindmap-new-branch");
      const title = input.value.trim();
      if (!title) return;
      mapData.branches = Array.isArray(mapData.branches) ? mapData.branches : [];
      mapData.branches.push({ title, details: [] });
      refresh();
    });

    mapElement.querySelectorAll("[data-map-branch]").forEach((button) => {
      button.addEventListener("click", () => {
        const branchIndex = Number(button.dataset.mapBranch);
        const branch = mapData?.branches?.[branchIndex];
        if (!branch || !detailPanel) return;

        mapElement.querySelectorAll("[data-map-branch]").forEach((item) => item.classList.toggle("active", item === button));
        detailPanel.innerHTML = `
          <div class="mindmap-detail-topline">
            <span>${escapeHtml(branch.title || "Branch")}</span>
            ${editable ? `<button class="ghost-button" type="button" data-map-delete-branch="${branchIndex}">Delete branch</button>` : ""}
          </div>
          <div class="mindmap-detail-list">
            ${(Array.isArray(branch.details) ? branch.details : []).map((detail, detailIndex) => `
              <div class="mindmap-detail-item">
                <p>${escapeHtml(detail)}</p>
                ${editable ? `<button class="ghost-button" type="button" data-map-delete-detail="${detailIndex}">Delete</button>` : ""}
              </div>
            `).join("") || "<p>No notes yet.</p>"}
          </div>
          ${editable ? `
            <div class="mindmap-edit-row">
              <input class="mindmap-new-detail" type="text" placeholder="Add a note to this branch">
              <button class="secondary-button" type="button" data-map-add-detail>Add note</button>
            </div>
          ` : ""}
        `;

        detailPanel.querySelector("[data-map-delete-branch]")?.addEventListener("click", () => {
          mapData.branches.splice(branchIndex, 1);
          refresh();
        });

        detailPanel.querySelector("[data-map-add-detail]")?.addEventListener("click", () => {
          const input = detailPanel.querySelector(".mindmap-new-detail");
          const detail = input.value.trim();
          if (!detail) return;
          mapData.branches[branchIndex].details = Array.isArray(mapData.branches[branchIndex].details) ? mapData.branches[branchIndex].details : [];
          mapData.branches[branchIndex].details.push(detail);
          refresh();
        });

        detailPanel.querySelectorAll("[data-map-delete-detail]").forEach((deleteButton) => {
          deleteButton.addEventListener("click", () => {
            mapData.branches[branchIndex].details.splice(Number(deleteButton.dataset.mapDeleteDetail), 1);
            refresh();
          });
        });
      });
    });
  });
}

function renderQuestionPractice(tool, saved) {
  const first = saved[0];
  return `
    <div class="practice-box question-practice" data-practice-type="${tool.type}">
      <div class="test-mode-bar">
        <span>Answer first, check your score, reveal the model answer, then override the mark if needed.</span>
        <button class="primary-button" type="button" id="startTestingMode">Start testing mode</button>
        <button class="ghost-button" type="button" id="exitTestingMode" hidden>Exit testing</button>
      </div>
      <div class="practice-prompt">
        <span id="practiceProgress">${saved.length ? `1 of ${saved.length}` : "0 saved"}</span>
        <strong id="practicePrompt">${escapeHtml(getPracticeQuestion(tool, first))}</strong>
      </div>
      <textarea id="practiceInput" placeholder="Type your answer from memory before revealing the saved answer."></textarea>
      <div class="practice-actions">
        <button class="primary-button" type="button" id="checkAnswer">Check answer</button>
        <button class="primary-button" type="button" id="revealAnswer">Reveal answer</button>
        <button class="secondary-button" type="button" id="nextPracticeItem">Next question</button>
      </div>
      <div class="auto-mark-panel" id="autoMarkPanel" hidden>
        <div class="auto-mark-topline">
          <span id="autoMarkLabel">Not checked yet</span>
          <strong id="autoMarkScore">0%</strong>
        </div>
        <p id="autoMarkMessage"></p>
      </div>
      <div class="answer-panel" id="answerPanel" hidden>
        <span>Saved answer</span>
        <p id="practiceAnswerText"></p>
        <div class="score-row">
          <button class="ghost-button" type="button" data-rate="good">I was right</button>
          <button class="ghost-button" type="button" data-rate="again">I was wrong</button>
        </div>
      </div>
    </div>
  `;
}

function renderBlurtingPractice(saved) {
  const first = saved[0];
  return `
    <div class="practice-box blurting-practice">
      <div class="test-mode-bar">
        <span>Testing mode hides saved key points while you blurt.</span>
        <button class="primary-button" type="button" id="startTestingMode">Start testing mode</button>
        <button class="ghost-button" type="button" id="exitTestingMode" hidden>Exit testing</button>
      </div>
      <div class="practice-prompt">
        <span id="practiceProgress">${saved.length ? `1 of ${saved.length}` : "0 topics"}</span>
        <strong id="practicePrompt">${escapeHtml(first?.fields?.[0] ?? "Create a blurting topic above.")}</strong>
      </div>
      <div class="timer-face mini-timer"><strong id="blurtTimer">05:00</strong></div>
      <textarea id="practiceInput" placeholder="Blurt everything you remember here. Do not look at the key points yet."></textarea>
      <div class="practice-actions">
        <button class="primary-button" type="button" id="startBlurtTimer">Start 5 min</button>
        <button class="ghost-button" type="button" id="pauseBlurtTimer">Pause</button>
        <button class="secondary-button" type="button" id="revealAnswer">Reveal key points</button>
        <button class="ghost-button" type="button" id="nextPracticeItem">Next topic</button>
      </div>
      <div class="answer-panel" id="answerPanel" hidden>
        <span>Key points to compare against</span>
        <p id="practiceAnswerText"></p>
      </div>
    </div>
  `;
}

function renderChecklistPractice(tool, saved) {
  const first = saved[0];
  const lines = splitPracticeLines(first?.fields?.[1]);
  return `
    <div class="practice-box checklist-practice">
      <div class="test-mode-bar">
        <span>Step-by-step practice: complete each step in order and tick it only when you have actually done it.</span>
      </div>
      <div class="practice-prompt">
        <span id="practiceProgress">${saved.length ? `1 of ${saved.length}` : "0 lists"}</span>
        <strong id="practicePrompt">${escapeHtml(first?.fields?.[0] ?? `Create ${tool.title.toLowerCase()} above.`)}</strong>
      </div>
      <div class="checklist-items" id="checklistItems">
        ${lines.length ? lines.map((line, index) => `
          <label class="check-item">
            <input type="checkbox" data-check-index="${index}">
            <span>${escapeHtml(line)}</span>
          </label>
        `).join("") : `<p>No tasks saved yet. Add each task on a new line.</p>`}
      </div>
      <div class="practice-actions">
        <button class="primary-button" type="button" id="resetChecks">Reset ticks</button>
        <button class="secondary-button" type="button" id="nextPracticeItem">Next list</button>
      </div>
    </div>
  `;
}

function renderSpacedPractice(saved) {
  const first = saved[0];
  return `
    <div class="practice-box spaced-practice">
      <div class="practice-prompt">
        <span id="practiceProgress">${saved.length ? `1 of ${saved.length}` : "0 reviews"}</span>
        <strong id="practicePrompt">${escapeHtml(first?.fields?.[0] ?? "Create a review item above.")}</strong>
      </div>
      <p id="practiceAnswerText">${escapeHtml(first?.fields?.[1] ?? "Nothing saved to review yet.")}</p>
      <div class="practice-actions">
        <button class="ghost-button" type="button" data-spaced="again">Again tomorrow</button>
        <button class="primary-button" type="button" data-spaced="good">Review in 3 days</button>
        <button class="secondary-button" type="button" data-spaced="easy">Review next week</button>
      </div>
      <section class="calendar-panel spaced-calendar" id="reviewCalendar">
        <div class="studio-header">
          <div>
            <p class="section-kicker">Review calendar</p>
            <h3>Upcoming spaced repetition</h3>
          </div>
          <span id="calendarCount" class="studio-count">0 reviews</span>
        </div>
        <div id="calendarGrid" class="calendar-grid"></div>
      </section>
    </div>
  `;
}

function getBuildPracticeConfig(toolName, tool) {
  const configs = {
    "Cornell notes": {
      message: "Testing mode shows only the topic and cue questions first.",
      placeholder: "Answer the cue questions from memory. Then reveal the detailed notes and bottom summary.",
      reveal: "Reveal Cornell notes",
      next: "Next Cornell page",
      answerLabel: "Full Cornell page",
    },
    Summaries: {
      message: "Testing mode gives you 8 minutes to compress the topic before checking your saved summary.",
      placeholder: "Write the 5 key points, then a short summary, then the keywords you remembered.",
      reveal: "Reveal saved summary",
      next: "Next summary",
      answerLabel: "Saved summary",
      timerSeconds: 8 * 60,
    },
    "Mind maps": {
      message: "Testing mode makes you rebuild the map structure from a blank page.",
      placeholder: "Write the central idea, main branches, and cross-links from memory.",
      reveal: "Reveal map plan",
      next: "Next map",
      answerLabel: "Saved branches and links",
    },
    Flowcharts: {
      message: "Testing mode asks you to rebuild the process in order.",
      placeholder: "Write the steps in order, then add decision points and common mistakes.",
      reveal: "Reveal flowchart",
      next: "Next flowchart",
      answerLabel: "Saved flowchart",
    },
    "Colour coding": {
      message: "Testing mode checks whether you can sort facts into the right colour categories.",
      placeholder: "Green definitions:\nBlue examples:\nRed mistakes:\nYellow keywords:",
      reveal: "Reveal colour key",
      next: "Next colour key",
      answerLabel: "Saved colour key",
    },
    "Teach someone else": {
      message: "Testing mode gives you 2 minutes to teach the idea simply before checking your saved lesson.",
      placeholder: "Teach it here in simple words. Include an example and the questions someone might ask.",
      reveal: "Reveal teaching plan",
      next: "Next lesson",
      answerLabel: "Saved teaching plan",
      timerSeconds: 2 * 60,
    },
    "Practical activities": {
      message: "Testing mode asks you to rehearse the activity steps before checking the setup.",
      placeholder: "Write the materials/setup, steps, and success check from memory.",
      reveal: "Reveal activity plan",
      next: "Next activity",
      answerLabel: "Saved activity plan",
    },
    Experiments: {
      message: "Testing mode asks you to rebuild the hypothesis, method, result, and conclusion.",
      placeholder: "Write the hypothesis, method, variables, result, and conclusion from memory.",
      reveal: "Reveal experiment plan",
      next: "Next experiment",
      answerLabel: "Saved experiment plan",
    },
    Simulations: {
      message: "Testing mode asks you to remember what to change, predict, and record.",
      placeholder: "Write the variable, prediction, and result you need to record.",
      reveal: "Reveal simulation plan",
      next: "Next simulation",
      answerLabel: "Saved simulation plan",
    },
  };

  return configs[toolName] || {
    message: `Testing mode matches ${tool.title.toLowerCase()} by hiding your saved version while you rebuild it.`,
    placeholder: `Practise ${tool.title.toLowerCase()} from memory here before revealing your saved version.`,
    reveal: "Reveal saved version",
    next: "Next item",
    answerLabel: "Saved version",
  };
}

function formatTimer(seconds) {
  return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
}

function renderBuildPractice(toolName, tool, saved) {
  const first = saved[0];
  const promptText = first?.fields?.[0] ?? `Create ${tool.title.toLowerCase()} above.`;
  const config = getBuildPracticeConfig(toolName, tool);
  const timerMarkup = config.timerSeconds ? `
    <div class="timer-row">
      <div class="timer-face mini-timer"><strong id="methodTimer">${formatTimer(config.timerSeconds)}</strong></div>
      <button class="primary-button" type="button" id="startMethodTimer">Start</button>
      <button class="secondary-button" type="button" id="pauseMethodTimer">Pause</button>
      <button class="ghost-button" type="button" id="resetMethodTimer">Reset</button>
    </div>
  ` : "";

  return `
    <div class="practice-box build-practice method-${tool.type}-practice">
      <div class="test-mode-bar">
        <span>${escapeHtml(config.message)}</span>
        <button class="primary-button" type="button" id="startTestingMode">Start testing mode</button>
        <button class="ghost-button" type="button" id="exitTestingMode" hidden>Exit testing</button>
      </div>
      <div class="practice-prompt">
        <span id="practiceProgress">${saved.length ? `1 of ${saved.length}` : "0 saved"}</span>
        <strong id="practicePrompt">${escapeHtml(promptText)}</strong>
      </div>
      ${timerMarkup}
      <textarea id="practiceInput" placeholder="${escapeHtml(config.placeholder)}"></textarea>
      <div class="practice-actions">
        <button class="primary-button" type="button" id="revealAnswer">${escapeHtml(config.reveal)}</button>
        <button class="secondary-button" type="button" id="nextPracticeItem">${escapeHtml(config.next)}</button>
      </div>
      <div class="answer-panel" id="answerPanel" hidden>
        <span>${escapeHtml(config.answerLabel)}</span>
        <p id="practiceAnswerText"></p>
      </div>
    </div>
  `;
}

function renderPracticeBox(toolName, tool, saved) {
  if (tool.type === "pomodoro") {
    const minutes = Math.max(1, Number(saved[0]?.fields?.[1]) || 25);
    timerSeconds = minutes * 60;
    const displayMinutes = minutes.toString().padStart(2, "0");
    return `
      <div class="practice-box">
        ${renderPomodoroSelectors()}
        <div class="timer-face"><strong id="timerDisplay">${displayMinutes}:00</strong></div>
        <div class="practice-actions">
          <button class="primary-button" type="button" id="startTimer">Start</button>
          <button class="secondary-button" type="button" id="pauseTimer">Pause</button>
          <button class="ghost-button" type="button" id="resetTimer">Reset</button>
        </div>
      </div>
    `;
  }

  if (tool.type === "speech" || tool.type === "podcast") {
    return `
      <div class="practice-box">
        <textarea id="speechText" placeholder="${tool.type === "podcast" ? "Generate or paste a podcast script to read aloud" : "Paste or choose text to read aloud"}">${escapeHtml(saved[0]?.fields?.[1] ?? "")}</textarea>
        <div class="practice-actions">
          <button class="primary-button" type="button" id="speakText">${tool.type === "podcast" ? "Play podcast aloud" : "Read aloud"}</button>
          <button class="secondary-button" type="button" id="stopSpeech">Stop</button>
        </div>
      </div>
    `;
  }

  if (tool.type === "recording") {
    return `
      <div class="practice-box">
        <div class="practice-actions">
          <button class="primary-button" type="button" id="startRecording">Record</button>
          <button class="secondary-button" type="button" id="stopRecording" disabled>Stop</button>
        </div>
        <div id="recordingOutput"></div>
      </div>
    `;
  }

  if (tool.type === "resource") {
    return `
      <div class="practice-box video-library" id="videoLibrary">
        <div class="studio-header">
          <div>
            <p class="section-kicker">Video library</p>
            <h3>Choose level and topic</h3>
          </div>
          <span id="videoCount" class="studio-count">0 links</span>
        </div>
        <div class="selector-block">
          <div>
            <span class="selector-label">Level</span>
            <div class="segmented" id="levelFilters"></div>
          </div>
          <div>
            <span class="selector-label">Topic</span>
            <div class="topic-grid" id="topicFilters"></div>
          </div>
        </div>
        <div id="videoLinks" class="video-links"></div>
      </div>
    `;
  }

  if (tool.type === "flashcards") {
    const first = saved[0];
    return `
      <div class="practice-box flashcard-practice-box">
        <div class="flashcard-focus-shell" id="flashcardFocusShell">
          <div class="flashcard-focus-top">
            <span class="score-pill" id="cardProgress">${saved.length ? `1 of ${saved.length}` : "0 cards"}</span>
            <button class="ghost-button" type="button" id="exitFocusMode" hidden>Exit focus</button>
          </div>
          <div class="flashcard" id="flashcardPractice"><strong>${escapeHtml(first?.fields?.[0] ?? "Create a flashcard to practise")}</strong></div>
          <div class="score-row">
            <button class="primary-button" type="button" id="startFocusMode">Start focus mode</button>
            <button class="primary-button" type="button" id="flipCard">Flip</button>
            <button class="secondary-button" type="button" id="nextCard">Next</button>
          </div>
        </div>
      </div>
    `;
  }

  if (tool.type === "recall" || tool.type === "questions") {
    return renderQuestionPractice(tool, saved);
  }

  if (tool.type === "blurting") {
    return renderBlurtingPractice(saved);
  }

  if (tool.type === "checklist") {
    return renderChecklistPractice(tool, saved);
  }

  if (tool.type === "spaced") {
    return renderSpacedPractice(saved);
  }

  if (["map", "colour", "notes", "summary", "activity", "teach"].includes(tool.type)) {
    return renderBuildPractice(toolName, tool, saved);
  }

  return `
    <div class="practice-box">
      <textarea id="practiceInput" placeholder="Practise here, then compare with your saved answer."></textarea>
      <div class="practice-actions">
        <button class="primary-button" type="button" id="showAnswer">Show saved answer</button>
        <button class="secondary-button" type="button" id="markDone">Mark practised</button>
      </div>
      <p id="practiceAnswer" hidden>${escapeHtml(saved[0]?.fields?.slice(1).join("\\n\\n") ?? "Create an item to practise.")}</p>
    </div>
  `;
}

function renderSavedItems(toolName, tool, saved) {
  if (!saved.length) {
    return `<article class="saved-item"><strong>No saved ${tool.title.toLowerCase()} yet</strong><p>Create one above and it will appear here.</p></article>`;
  }

  return saved.map((item) => `
    <article class="saved-item ${["map", "colour", "notes", "summary", "activity", "teach"].includes(tool.type) ? "structured-saved-item" : ""}">
      <div class="item-topline">
        <strong>${escapeHtml(item.fields[0])}</strong>
        <button class="ghost-button" type="button" data-delete="${item.id}">Delete</button>
      </div>
      ${renderSavedItemBody(toolName, tool, item)}
    </article>
  `).join("");
}

function renderSavedItemBody(toolName, tool, item) {
  if (toolName === "Cornell notes") {
    return `
      <div class="cornell-card">
        <div>
          <span>Cue questions</span>
          ${renderListFromText(getFieldValue(item, 1))}
        </div>
        <div>
          <span>Detailed notes</span>
          <p>${escapeHtml(getFieldValue(item, 2) || "No notes added.")}</p>
        </div>
        <div class="cornell-summary">
          <span>Bottom summary</span>
          <p>${escapeHtml(getFieldValue(item, 3) || "No summary added.")}</p>
        </div>
      </div>
    `;
  }

  if (tool.type === "summary") {
    return `
      <div class="summary-card">
        <div>
          <span>Key points</span>
          ${renderListFromText(getFieldValue(item, 1))}
        </div>
        <div>
          <span>50-word summary</span>
          <p>${escapeHtml(getFieldValue(item, 2) || "No summary added.")}</p>
        </div>
        <div>
          <span>Keywords</span>
          <div class="keyword-row">${splitPracticeLines(getFieldValue(item, 3)).map((keyword) => `<b>${escapeHtml(keyword)}</b>`).join("") || "<b>No keywords</b>"}</div>
        </div>
      </div>
    `;
  }

  if (tool.type === "colour") {
    const colours = [
      ["green", "Definitions", getFieldValue(item, 1)],
      ["blue", "Examples", getFieldValue(item, 2)],
      ["red", "Mistakes", getFieldValue(item, 3)],
      ["yellow", "Keywords", getFieldValue(item, 4)],
    ];

    return `
      <div class="colour-key-card">
        ${colours.map(([colour, label, value]) => `
          <div class="colour-row ${colour}">
            <span>${label}</span>
            <p>${escapeHtml(value || "Nothing added yet.")}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (tool.type === "map") {
    if (toolName === "Mind maps") {
      const visualMap = item.visualMap || {
        centralIdea: getFieldValue(item, 0) || "Mind map",
        branches: splitPracticeLines(getFieldValue(item, 1)).map((branch) => ({ title: branch, details: [] })),
        crossLinks: splitPracticeLines(getFieldValue(item, 2)),
        memorySketchPlan: getFieldValue(item, 3) || "Cover the map and redraw it from memory.",
      };
      return renderInteractiveMindMap(visualMap, { editable: true, itemId: item.id });
    }

    return `
      <div class="map-card">
        ${tool.fields.slice(1).map((field, index) => `
          <div>
            <span>${escapeHtml(field)}</span>
            ${renderListFromText(getFieldValue(item, index + 1))}
          </div>
        `).join("")}
      </div>
    `;
  }

  if (tool.type === "activity") {
    return `
      <div class="activity-card">
        ${tool.fields.slice(1).map((field, index) => `
          <div>
            <span>${escapeHtml(field)}</span>
            ${index === 1 ? renderListFromText(getFieldValue(item, index + 1)) : `<p>${escapeHtml(getFieldValue(item, index + 1) || "Nothing added yet.")}</p>`}
          </div>
        `).join("")}
      </div>
    `;
  }

  if (tool.type === "teach") {
    return `
      <div class="teach-card">
        <div>
          <span>Explain it simply</span>
          <p>${escapeHtml(getFieldValue(item, 1) || "No explanation added.")}</p>
        </div>
        <div>
          <span>Analogy/example</span>
          <p>${escapeHtml(getFieldValue(item, 2) || "No example added.")}</p>
        </div>
        <div>
          <span>Questions to answer</span>
          ${renderListFromText(getFieldValue(item, 3))}
        </div>
      </div>
    `;
  }

  return `<p>${escapeHtml(item.fields.slice(1).join("\n\n"))}</p>`;
}

function collectToolFields(tool) {
  if (activeMethod === "Mind maps") {
    const visualValue = document.querySelector("#mindMapVisualJson")?.value;
    if (visualValue) {
      try {
        const map = JSON.parse(visualValue);
        return [map.centralIdea || "Mind map"];
      } catch {
        return [document.querySelector("#mindMapTopic")?.value.trim() || ""];
      }
    }
    return [document.querySelector("#mindMapTopic")?.value.trim() || ""];
  }

  if (tool.type === "checklist") {
    const title = document.querySelector("#toolField0").value.trim();
    const steps = [...document.querySelectorAll(".checklist-step-input")]
      .map((input) => input.value.trim())
      .filter(Boolean);
    return [title, steps.join("\n")];
  }

  return tool.fields.map((_, index) => document.querySelector(`#toolField${index}`).value.trim());
}

function getExtraItemData(toolName) {
  if (toolName === "Mind maps") {
    const visualValue = document.querySelector("#mindMapVisualJson")?.value;
    if (visualValue) {
      try {
        return { visualMap: JSON.parse(visualValue) };
      } catch {
        return {};
      }
    }
  }

  return {};
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}

function showGeneratedMindMapPreview(map) {
  const preview = document.querySelector("#generatedMindMapPreview");
  const hidden = document.querySelector("#mindMapVisualJson");
  if (!preview || !hidden) return;

  hidden.value = JSON.stringify(map);
  preview.hidden = false;
  preview.innerHTML = `
    <div class="studio-header">
      <div>
        <p class="section-kicker">Generated visual map</p>
        <h3>Interactive preview</h3>
      </div>
      <span class="studio-count">Click branches</span>
    </div>
    ${renderInteractiveMindMap(map, { editable: true })}
  `;
  bindInteractiveMindMaps(preview);
}

function bindMindMapGenerator() {
  const button = document.querySelector("#generateMindMap");
  if (!button) return;

  const status = document.querySelector("#mindMapStatus");
  button.addEventListener("click", async () => {
    const topic = document.querySelector("#mindMapTopic").value.trim();
    const level = document.querySelector("#mindMapLevel").value;
    const examBoard = document.querySelector("#mindMapExamBoard").value.trim();
    const info = document.querySelector("#mindMapInfo").value.trim();

    if (!topic) {
      status.textContent = "Add a mind map title first.";
      return;
    }

    button.disabled = true;
    status.textContent = "Generating mind map...";

    try {
      const result = await postJson("/api/mindmap", { topic, level, examBoard, info });
      showGeneratedMindMapPreview(result);
      status.textContent = "Visual mind map generated. Add or delete branches and notes, then save it.";
    } catch (error) {
      status.textContent = "Mind map generator is unavailable.";
    } finally {
      button.disabled = false;
    }
  });
}

function bindQuizGenerator(toolName) {
  const button = document.querySelector("#generateQuiz");
  if (!button) return;

  const status = document.querySelector("#quizStatus");
  button.addEventListener("click", async () => {
    const topic = document.querySelector("#quizTopic").value.trim();
    const level = document.querySelector("#quizLevel").value;
    const specifics = document.querySelector("#quizSpecifics").value.trim();
    const count = document.querySelector("#quizCount").value;

    if (!topic && !specifics) {
      status.textContent = "Add what you are studying first.";
      return;
    }

    button.disabled = true;
    status.textContent = "Generating quiz...";

    try {
      const result = await postJson("/api/quiz", { topic, level, specifics, count });
      const questions = Array.isArray(result.questions) ? result.questions : [];

      if (!questions.length) {
        status.textContent = "No questions came back. Try adding more specifics.";
        return;
      }

      const generatedItems = questions.map((item) => ({
        id: makeId(),
        fields: [item.question || "Generated question", item.answer || "No answer supplied."],
        practised: 0,
        due: Date.now(),
        generatedBy: "Gemini",
        quizTitle: result.title || topic || "Generated quiz",
      }));

      saveItems(toolName, [...generatedItems, ...getSaved(toolName)]);
      status.textContent = `${generatedItems.length} questions saved.`;
      renderStudio(activeMethod);
    } catch (error) {
      status.textContent = "Quiz generator is unavailable.";
    } finally {
      button.disabled = false;
    }
  });
}

function bindRevisionHelper(toolName, tool) {
  const button = document.querySelector("#generateRevisionContent");
  if (!button) return;

  const status = document.querySelector("#helperStatus");
  button.addEventListener("click", async () => {
    const topic = document.querySelector("#helperTopic").value.trim();
    const level = document.querySelector("#helperLevel").value;
    const specifics = document.querySelector("#helperSpecifics").value.trim();

    if (!topic && !specifics) {
      status.textContent = "Add a topic or some specifics first.";
      return;
    }

    button.disabled = true;
    status.textContent = toolName === "Podcasts" ? "Asking Gemini to write a podcast script..." : "Generating suggestion...";

    try {
      const result = await postJson("/api/revision-helper", {
        method: toolName,
        topic,
        level,
        specifics,
        fields: tool.fields,
      });
      const values = Array.isArray(result.fields) ? result.fields : [];
      if (toolName === "Podcasts") {
        const titleField = document.querySelector("#toolField0");
        const scriptField = document.querySelector("#toolField1");
        const script = values.find((value) => String(value).length > 140) || values[1] || "";
        if (titleField) titleField.value = result.title || values[0] || topic || "Revision podcast";
        if (scriptField) scriptField.value = script;
        status.textContent = "Podcast script added. Edit it, save it, then play it aloud.";
        return;
      }

      const fieldValues = values.length === tool.fields.length
        ? values
        : [result.title || topic || tool.title, ...values];

      if (tool.type === "checklist") {
        const title = document.querySelector("#toolField0");
        const builder = document.querySelector("#stepBuilder");
        if (title) title.value = result.title || topic || tool.title;
        const stepValues = values.flatMap((value) => String(value).split(/\n|;/)).map((value) => value.trim()).filter(Boolean);

        if (builder) {
          builder.innerHTML = stepValues.slice(0, 8).map((value, index) => `
            <label class="field step-field">
              <span>Step ${index + 1}</span>
              <input class="checklist-step-input" type="text" value="${escapeHtml(value)}" placeholder="Write step ${index + 1}">
            </label>
          `).join("") || [1, 2, 3, 4].map((step) => `
            <label class="field step-field">
              <span>Step ${step}</span>
              <input class="checklist-step-input" type="text" placeholder="Write step ${step}">
            </label>
          `).join("");
        }

        status.textContent = "Chunked steps generated. Edit them, then save.";
        return;
      }

      tool.fields.forEach((_, index) => {
        const field = document.querySelector(`#toolField${index}`);
        if (field && fieldValues[index]) field.value = fieldValues[index];
      });

      status.textContent = toolName === "Podcasts" ? "Podcast script added. Edit it, save it, then play it aloud." : "Suggestion added. Edit it, then save it.";
    } catch (error) {
      status.textContent = "Gemini helper is unavailable.";
    } finally {
      button.disabled = false;
    }
  });
}

function bindStudioEvents(toolName, tool, saved) {
  document.querySelector("#toolForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = collectToolFields(tool);
    if (!fields[0] || fields.every((field) => !field)) return;
    const nextItems = [{ id: makeId(), fields, practised: 0, due: Date.now(), ...getExtraItemData(toolName) }, ...getSaved(toolName)];
    saveItems(toolName, nextItems);
    renderStudio(activeMethod);
  });

  document.querySelector("#addChecklistStep")?.addEventListener("click", () => {
    const builder = document.querySelector("#stepBuilder");
    const stepNumber = builder.querySelectorAll(".step-field").length + 1;
    const label = document.createElement("label");
    label.className = "field step-field";
    label.innerHTML = `
      <span>Step ${stepNumber}</span>
      <input class="checklist-step-input" type="text" placeholder="Write step ${stepNumber}">
    `;
    builder.append(label);
    label.querySelector("input").focus();
  });

  bindMindMapGenerator();
  bindQuizGenerator(toolName);
  bindRevisionHelper(toolName, tool);
  bindInteractiveMindMaps();

  document.querySelector("#clearMethod").addEventListener("click", () => {
    saveItems(toolName, []);
    renderStudio(activeMethod);
  });

  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      saveItems(toolName, getSaved(toolName).filter((item) => item.id !== button.dataset.delete));
      renderStudio(activeMethod);
    });
  });

  bindPracticeEvents(toolName, tool, saved);
}

function bindPracticeEvents(toolName, tool, saved) {
  if (tool.type === "pomodoro") {
    bindPomodoro();
    return;
  }

  if (tool.type === "speech" || tool.type === "podcast") {
    document.querySelector("#speakText").addEventListener("click", () => {
      const text = document.querySelector("#speechText").value.trim();
      if (!text || !("speechSynthesis" in window)) return;
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    });
    document.querySelector("#stopSpeech").addEventListener("click", () => speechSynthesis.cancel());
    return;
  }

  if (tool.type === "recording") {
    bindRecording();
    return;
  }

  if (tool.type === "resource") {
    renderVideoLibrary();
    return;
  }

  if (tool.type === "flashcards") {
    bindFlashcards(saved);
    return;
  }

  if (tool.type === "recall" || tool.type === "questions") {
    bindQuestionPractice(toolName, tool, saved);
    return;
  }

  if (tool.type === "blurting") {
    bindBlurtingPractice(saved);
    return;
  }

  if (tool.type === "checklist") {
    bindChecklistPractice(toolName, saved);
    return;
  }

  if (tool.type === "spaced") {
    bindSpacedPractice(toolName, saved);
    return;
  }

  if (["map", "colour", "notes", "summary", "activity", "teach"].includes(tool.type)) {
    bindBuildPractice(toolName, tool, saved);
    return;
  }

  const answer = document.querySelector("#practiceAnswer");
  document.querySelector("#showAnswer").addEventListener("click", () => {
    answer.hidden = !answer.hidden;
  });
  document.querySelector("#markDone").addEventListener("click", () => {
    if (!saved[0]) return;
    const nextItems = getSaved(toolName).map((item, index) => index === 0 ? { ...item, practised: (item.practised || 0) + 1 } : item);
    saveItems(toolName, nextItems);
    renderStudio(activeMethod);
  });
}

function bindQuestionPractice(toolName, tool, saved) {
  let index = 0;
  const prompt = document.querySelector("#practicePrompt");
  const progress = document.querySelector("#practiceProgress");
  const answerPanel = document.querySelector("#answerPanel");
  const answerText = document.querySelector("#practiceAnswerText");
  const input = document.querySelector("#practiceInput");
  const autoMarkPanel = document.querySelector("#autoMarkPanel");
  const autoMarkLabel = document.querySelector("#autoMarkLabel");
  const autoMarkScore = document.querySelector("#autoMarkScore");
  const autoMarkMessage = document.querySelector("#autoMarkMessage");
  bindTestingMode();

  function showJudgement(judgement) {
    autoMarkPanel.dataset.rating = judgement.rating;
    autoMarkPanel.dataset.score = String(judgement.score);
    autoMarkLabel.textContent = judgement.label;
    autoMarkScore.textContent = `${judgement.score}%`;
    autoMarkMessage.textContent = judgement.message;
    autoMarkPanel.hidden = false;
  }

  function update() {
    const item = saved[index];
    prompt.textContent = getPracticeQuestion(tool, item);
    answerText.dataset.answer = getPracticeAnswer(tool, item) || "No saved answer yet.";
    answerText.textContent = "";
    progress.textContent = saved.length ? `${index + 1} of ${saved.length}` : "0 saved";
    answerPanel.hidden = true;
    autoMarkPanel.hidden = true;
    autoMarkPanel.dataset.rating = "";
    autoMarkPanel.dataset.score = "";
    autoMarkLabel.textContent = "Not checked yet";
    autoMarkScore.textContent = "0%";
    autoMarkMessage.textContent = "";
    input.value = "";
  }

  document.querySelector("#checkAnswer").addEventListener("click", () => {
    const judgement = judgeAnswer(input.value, answerText.dataset.answer || "");
    showJudgement(judgement);
  });

  document.querySelector("#revealAnswer").addEventListener("click", () => {
    if (autoMarkPanel.hidden) {
      const judgement = judgeAnswer(input.value, answerText.dataset.answer || "");
      showJudgement(judgement);
    }
    answerText.textContent = answerText.dataset.answer || "No saved answer yet.";
    answerPanel.hidden = false;
  });

  document.querySelector("#nextPracticeItem").addEventListener("click", () => {
    if (!saved.length) return;
    index = (index + 1) % saved.length;
    update();
  });

  document.querySelectorAll("[data-rate]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!saved[index]) return;
      const autoRating = autoMarkPanel.dataset.rating || "";
      const autoScore = Number(autoMarkPanel.dataset.score || 0);
      const nextItems = getSaved(toolName).map((item) => item.id === saved[index].id
        ? { ...item, practised: (item.practised || 0) + 1, autoRating, autoScore, lastRating: button.dataset.rate }
        : item);
      saveItems(toolName, nextItems);
      index = saved.length ? (index + 1) % saved.length : 0;
      update();
    });
  });

  update();
}

function bindBlurtingPractice(saved) {
  let index = 0;
  let blurtSeconds = 5 * 60;
  let blurtInterval = null;
  const prompt = document.querySelector("#practicePrompt");
  const progress = document.querySelector("#practiceProgress");
  const answerPanel = document.querySelector("#answerPanel");
  const answerText = document.querySelector("#practiceAnswerText");
  const input = document.querySelector("#practiceInput");
  const timer = document.querySelector("#blurtTimer");
  bindTestingMode();

  function updateTimer() {
    timer.textContent = `${Math.floor(blurtSeconds / 60).toString().padStart(2, "0")}:${(blurtSeconds % 60).toString().padStart(2, "0")}`;
  }

  function update() {
    const item = saved[index];
    prompt.textContent = item?.fields?.[0] ?? "Create a blurting topic above.";
    answerText.dataset.answer = item?.fields?.[1] ?? "No key points saved yet.";
    answerText.textContent = "";
    progress.textContent = saved.length ? `${index + 1} of ${saved.length}` : "0 topics";
    answerPanel.hidden = true;
    input.value = "";
    blurtSeconds = 5 * 60;
    clearInterval(blurtInterval);
    blurtInterval = null;
    updateTimer();
  }

  document.querySelector("#startBlurtTimer").addEventListener("click", () => {
    if (blurtInterval) return;
    blurtInterval = setInterval(() => {
      blurtSeconds = Math.max(0, blurtSeconds - 1);
      updateTimer();
      if (blurtSeconds === 0) clearInterval(blurtInterval);
    }, 1000);
  });

  document.querySelector("#pauseBlurtTimer").addEventListener("click", () => {
    clearInterval(blurtInterval);
    blurtInterval = null;
  });

  document.querySelector("#revealAnswer").addEventListener("click", () => {
    answerText.textContent = answerText.dataset.answer || "No key points saved yet.";
    answerPanel.hidden = false;
  });

  document.querySelector("#nextPracticeItem").addEventListener("click", () => {
    if (!saved.length) return;
    index = (index + 1) % saved.length;
    update();
  });

  update();
}

function bindChecklistPractice(toolName, saved) {
  let index = 0;
  const prompt = document.querySelector("#practicePrompt");
  const progress = document.querySelector("#practiceProgress");
  const list = document.querySelector("#checklistItems");

  function update() {
    const item = saved[index];
    const lines = splitPracticeLines(item?.fields?.[1]);
    prompt.textContent = item?.fields?.[0] ?? "Create a checklist above.";
    progress.textContent = saved.length ? `${index + 1} of ${saved.length}` : "0 lists";
    list.innerHTML = lines.length ? lines.map((line, lineIndex) => `
      <label class="check-item">
        <input type="checkbox" data-check-index="${lineIndex}">
        <span>${escapeHtml(line)}</span>
      </label>
    `).join("") : `<p>No tasks saved yet. Add each task on a new line.</p>`;
  }

  document.querySelector("#resetChecks").addEventListener("click", () => {
    list.querySelectorAll("input").forEach((input) => {
      input.checked = false;
    });
  });

  document.querySelector("#nextPracticeItem").addEventListener("click", () => {
    if (!saved.length) return;
    const nextItems = getSaved(toolName).map((item) => item.id === saved[index].id ? { ...item, practised: (item.practised || 0) + 1 } : item);
    saveItems(toolName, nextItems);
    index = (index + 1) % saved.length;
    update();
  });

  update();
}

function bindSpacedPractice(toolName, saved) {
  let index = 0;
  const prompt = document.querySelector("#practicePrompt");
  const progress = document.querySelector("#practiceProgress");
  const answer = document.querySelector("#practiceAnswerText");
  const intervals = { again: 1, good: 3, easy: 7 };

  function update() {
    const item = saved[index];
    prompt.textContent = item?.fields?.[0] ?? "Create a review item above.";
    answer.textContent = item?.fields?.[1] ?? "Nothing saved to review yet.";
    progress.textContent = saved.length ? `${index + 1} of ${saved.length}` : "0 reviews";
  }

  document.querySelectorAll("[data-spaced]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!saved[index]) return;
      const due = Date.now() + intervals[button.dataset.spaced] * 24 * 60 * 60 * 1000;
      const nextItems = getSaved(toolName).map((item) => item.id === saved[index].id
        ? { ...item, practised: (item.practised || 0) + 1, due, lastRating: button.dataset.spaced }
        : item);
      saveItems(toolName, nextItems);
      renderReviewCalendar();
      index = saved.length ? (index + 1) % saved.length : 0;
      update();
    });
  });

  update();
  renderReviewCalendar();
}

function bindBuildPractice(toolName, tool, saved) {
  let index = 0;
  const config = getBuildPracticeConfig(toolName, tool);
  let methodSeconds = config.timerSeconds || 0;
  let methodInterval = null;
  const prompt = document.querySelector("#practicePrompt");
  const progress = document.querySelector("#practiceProgress");
  const answerPanel = document.querySelector("#answerPanel");
  const answerText = document.querySelector("#practiceAnswerText");
  const input = document.querySelector("#practiceInput");
  const timer = document.querySelector("#methodTimer");
  bindTestingMode();

  function formatSavedAnswer(item) {
    if (!item) return "Nothing saved yet.";

    if (toolName === "Cornell notes") {
      return `Cue questions:\n${getFieldValue(item, 1)}\n\nDetailed notes:\n${getFieldValue(item, 2)}\n\nBottom summary:\n${getFieldValue(item, 3)}`;
    }

    if (tool.type === "summary") {
      return `5 key points:\n${getFieldValue(item, 1)}\n\n50-word summary:\n${getFieldValue(item, 2)}\n\nKeywords:\n${getFieldValue(item, 3)}`;
    }

    if (tool.type === "colour") {
      return `Green definitions:\n${getFieldValue(item, 1)}\n\nBlue examples:\n${getFieldValue(item, 2)}\n\nRed mistakes:\n${getFieldValue(item, 3)}\n\nYellow keywords:\n${getFieldValue(item, 4)}`;
    }

    return tool.fields.slice(1)
      .map((field, fieldIndex) => `${field}:\n${getFieldValue(item, fieldIndex + 1) || "Nothing saved."}`)
      .join("\n\n");
  }

  function updateMethodTimer() {
    if (timer) timer.textContent = formatTimer(methodSeconds);
  }

  function resetMethodTimer() {
    if (!config.timerSeconds) return;
    clearInterval(methodInterval);
    methodInterval = null;
    methodSeconds = config.timerSeconds;
    updateMethodTimer();
  }

  function update() {
    const item = saved[index];
    prompt.textContent = item?.fields?.[0] ?? `Create ${tool.title.toLowerCase()} above.`;
    answerText.dataset.answer = formatSavedAnswer(item);
    answerText.textContent = "";
    progress.textContent = saved.length ? `${index + 1} of ${saved.length}` : "0 saved";
    answerPanel.hidden = true;
    input.value = "";
    resetMethodTimer();
  }

  document.querySelector("#startMethodTimer")?.addEventListener("click", () => {
    if (methodInterval || !config.timerSeconds) return;
    methodInterval = setInterval(() => {
      methodSeconds = Math.max(0, methodSeconds - 1);
      updateMethodTimer();
      if (methodSeconds === 0) {
        clearInterval(methodInterval);
        methodInterval = null;
      }
    }, 1000);
  });

  document.querySelector("#pauseMethodTimer")?.addEventListener("click", () => {
    clearInterval(methodInterval);
    methodInterval = null;
  });

  document.querySelector("#resetMethodTimer")?.addEventListener("click", resetMethodTimer);

  document.querySelector("#revealAnswer").addEventListener("click", () => {
    answerText.textContent = answerText.dataset.answer || "Nothing saved yet.";
    answerPanel.hidden = false;
  });

  document.querySelector("#nextPracticeItem").addEventListener("click", () => {
    if (!saved.length) return;
    index = (index + 1) % saved.length;
    update();
  });

  update();
}

function bindTestingMode() {
  const practiceBox = document.querySelector(".practice-box");
  const start = document.querySelector("#startTestingMode");
  const exit = document.querySelector("#exitTestingMode");
  const savedItems = document.querySelector(".saved-items");
  const guide = document.querySelector(".method-guide");
  const form = document.querySelector("#toolForm");
  const answerPanel = document.querySelector("#answerPanel");
  const input = document.querySelector("#practiceInput");

  if (!practiceBox || !start || !exit) return;

  function setTestingMode(enabled) {
    practiceBox.classList.toggle("testing-mode", enabled);
    savedItems?.toggleAttribute("hidden", enabled);
    guide?.toggleAttribute("hidden", enabled);
    form?.toggleAttribute("hidden", enabled);
    start.hidden = enabled;
    exit.hidden = !enabled;
    document.body.classList.toggle("testing-mode-active", enabled);

    if (enabled) {
      if (answerPanel) answerPanel.hidden = true;
      if (input) input.value = "";
      practiceBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  start.addEventListener("click", () => setTestingMode(true));
  exit.addEventListener("click", () => setTestingMode(false));
}

function bindFlashcards(saved) {
  let index = 0;
  let showingBack = false;
  const shell = document.querySelector("#flashcardFocusShell");
  const card = document.querySelector("#flashcardPractice");
  const progress = document.querySelector("#cardProgress");
  const startFocus = document.querySelector("#startFocusMode");
  const exitFocus = document.querySelector("#exitFocusMode");
  const savedItems = document.querySelector(".flashcard-saved-items");
  const guide = document.querySelector(".method-guide");
  const form = document.querySelector("#toolForm");

  function updateCard() {
    const item = saved[index];
    card.innerHTML = `<strong>${escapeHtml(item ? item.fields[showingBack ? 1 : 0] : "Create a flashcard to practise")}</strong>`;
    progress.textContent = saved.length ? `${index + 1} of ${saved.length}` : "0 cards";
  }

  function setFocusMode(enabled) {
    shell.classList.toggle("focus-mode", enabled);
    savedItems?.toggleAttribute("hidden", enabled);
    guide?.toggleAttribute("hidden", enabled);
    form?.toggleAttribute("hidden", enabled);
    startFocus.hidden = enabled;
    exitFocus.hidden = !enabled;
    document.body.classList.toggle("flashcard-focus-active", enabled);
    if (enabled) {
      shell.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  startFocus.addEventListener("click", () => setFocusMode(true));
  exitFocus.addEventListener("click", () => setFocusMode(false));

  document.querySelector("#flipCard").addEventListener("click", () => {
    showingBack = !showingBack;
    updateCard();
  });

  document.querySelector("#nextCard").addEventListener("click", () => {
    if (!saved.length) return;
    index = (index + 1) % saved.length;
    showingBack = false;
    updateCard();
  });

  card.addEventListener("click", () => {
    showingBack = !showingBack;
    updateCard();
  });
}

function bindPomodoro() {
  const display = document.querySelector("#timerDisplay");

  function updateDisplay() {
    const minutes = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
    const seconds = (timerSeconds % 60).toString().padStart(2, "0");
    display.textContent = `${minutes}:${seconds}`;
  }

  function refreshPomodoroTask() {
    const task = document.querySelector("#pomodoroTask");
    if (task) {
      task.textContent = getPomodoroTask(activePomodoroLevel, activePomodoroTopic);
    }
  }

  document.querySelectorAll("[data-pomodoro-level]").forEach((button) => {
    button.addEventListener("click", () => {
      activePomodoroLevel = button.dataset.pomodoroLevel;
      activePomodoroTaskIndex = 0;
      renderStudio(activeMethod);
    });
  });

  document.querySelectorAll("[data-pomodoro-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      activePomodoroTopic = button.dataset.pomodoroTopic;
      activePomodoroTaskIndex = 0;
      renderStudio(activeMethod);
    });
  });

  document.querySelector("#newPomodoroTask")?.addEventListener("click", () => {
    activePomodoroTaskIndex += 1;
    refreshPomodoroTask();
  });

  document.querySelector("#startTimer").addEventListener("click", () => {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
      timerSeconds = Math.max(0, timerSeconds - 1);
      updateDisplay();
      if (timerSeconds === 0) clearInterval(timerInterval);
    }, 1000);
  });

  document.querySelector("#pauseTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
  });

  document.querySelector("#resetTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 25 * 60;
    updateDisplay();
  });

  updateDisplay();
}

async function bindRecording() {
  const start = document.querySelector("#startRecording");
  const stop = document.querySelector("#stopRecording");
  const output = document.querySelector("#recordingOutput");
  let recorder;
  let chunks = [];

  start.addEventListener("click", async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      output.textContent = "Recording is not available in this browser.";
      return;
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorder = new MediaRecorder(stream);
    chunks = [];
    recorder.ondataavailable = (event) => chunks.push(event.data);
    recorder.onstop = () => {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = URL.createObjectURL(new Blob(chunks, { type: "audio/webm" }));
      output.innerHTML = "";
      output.append(audio);
      stream.getTracks().forEach((track) => track.stop());
    };
    recorder.start();
    start.disabled = true;
    stop.disabled = false;
  });

  stop.addEventListener("click", () => {
    recorder?.stop();
    start.disabled = false;
    stop.disabled = true;
  });
}

function initQuestionnairePage() {
  if (!requireLoggedIn()) return;
  bindBackupControls();
  renderQuestions();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const answers = collectAnswers();
    const name = getCurrentUser() || "Your";
    let profileKey = localCategorise(answers);
    let usedGemini = false;

    statusMessage.textContent = "Asking Gemini...";

    try {
      profileKey = await geminiCategorise(answers);
      usedGemini = true;
    } catch (error) {
      statusMessage.textContent = "Gemini was unavailable, so Discere used local categorisation.";
    }

    localStorage.setItem(getStudySpaceKey(), JSON.stringify({
      profileKey,
      answers,
      name,
      usedGemini,
      createdAt: new Date().toISOString(),
    }));

    statusMessage.textContent = "Taking you to your revision space...";
    window.location.href = "./revision.html";
  });

  resetButton.addEventListener("click", () => {
    form.reset();
    statusMessage.textContent = "";
    previewProfile.textContent = "Ready to discover";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initRevisionPage() {
  if (!requireLoggedIn()) return;
  bindSidePanelToggle();
  bindBackupControls();
  const savedStudySpace = localStorage.getItem(getStudySpaceKey());

  if (!savedStudySpace) {
    window.location.href = "./index.html";
    return;
  }

  renderRevisionSpace(JSON.parse(savedStudySpace));
}

function initAuthPage() {
  bindBackupControls();

  if (getCurrentUser()) {
    window.location.href = localStorage.getItem(getStudySpaceKey()) ? "./revision.html" : "./index.html";
    return;
  }

  function readCredentials() {
    return {
      username: normaliseUsername(authUsername.value),
      password: authPassword.value,
    };
  }

  function setStatus(message) {
    authStatus.textContent = message;
  }

  loginButton.addEventListener("click", () => {
    const { username, password } = readCredentials();
    const users = getUsers();

    if (!username || !password) {
      setStatus("Enter a username and password.");
      return;
    }

    if (!users[username] || users[username].password !== password) {
      setStatus("That username or password is not correct.");
      return;
    }

    localStorage.setItem(sessionKey, username);
    window.location.href = localStorage.getItem(getStudySpaceKey()) ? "./revision.html" : "./index.html";
  });

  signupButton.addEventListener("click", () => {
    const { username, password } = readCredentials();
    const users = getUsers();

    if (!username || !password) {
      setStatus("Choose a username and password.");
      return;
    }

    if (users[username]) {
      setStatus("That username already exists. Log in instead.");
      return;
    }

    users[username] = { password, createdAt: new Date().toISOString() };
    saveUsers(users);
    localStorage.setItem(sessionKey, username);
    window.location.href = "./index.html";
  });
}

if (authForm) {
  initAuthPage();
} else if (form) {
  initQuestionnairePage();
} else if (results) {
  initRevisionPage();
}
