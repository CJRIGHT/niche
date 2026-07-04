# Discere

Discere is a study website that helps learners find their learning profile, then gives them a personal revision space with useful revision tools.

It includes:

- A learning-style questionnaire
- Local login and signup using browser storage
- A personal revision dashboard
- Flashcards, active recall, Cornell notes, Pomodoro, spaced repetition, practice questions, videos, and more
- Per-user saved notes and revision materials
- Local data backup download/import for accounts and revision work
- Optional Gemini API categorisation through the local server

## Use as a hosted website

You can upload these files to GitHub and enable GitHub Pages.

The website will run in the browser and save accounts, notes, flashcards, and revision work in each user's browser storage.

For GitHub Pages, upload the website files to a repository, then go to:

```text
Settings > Pages > Deploy from branch
```

Choose the branch and folder that contain the Discere files.

## Run locally from a download

The easiest local option is to open `login.html` in a browser.

For the optional local server:

1. Install [Node.js](https://nodejs.org/).
2. Download or clone this project.
3. Open a terminal in the project folder.
4. Run:

```bash
npm start
```

5. Open:

```text
http://localhost:5174/
```

## Optional Gemini setup

Discere works without Gemini because it has local categorisation built in. Gemini only works when running the local Node server, because API keys should not be put directly into a public website.

To enable Gemini:

1. Copy `.env.example` to a new file called `.env`.
2. Put your own Gemini API key in `.env`:

```text
GEMINI_API_KEY=your_key_here
```

3. Restart the local server.

Do not upload `.env` to GitHub. It is ignored by `.gitignore` because API keys should stay private.

## Local backup

Discere accounts and saved revision materials are stored locally in the browser. To move data to another browser or computer:

1. Log in or open the login page.
2. Click `Download backup`.
3. On the other browser/computer, click `Import backup`.
4. Log in with the restored account.

## Website files

The important files are:

- `index.html`
- `login.html`
- `revision.html`
- `styles.css`
- `script.js`
- `server.js`
- `package.json`
- `README.md`
- `.gitignore`
- `.env.example`

Do not upload a real `.env` file.
