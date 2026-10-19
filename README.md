# Anusha Kelwadkar — Portfolio

A two-page personal portfolio site: a homepage that showcases selected work in
large clickable tiles, and an About & Contact page with education, experience,
and skills. Built with plain HTML/CSS/JS — no build step, no framework — so it
deploys directly on GitHub Pages for free.

## File structure

```
anusha-portfolio/
├── index.html                  ← Homepage (hero + work grid)
├── about.html                  ← About & Contact page
├── css/
│   └── style.css               ← All styling (colors, type, layout)
├── js/
│   └── main.js                 ← Project modal logic + footer year
├── assets/
│   ├── svg/
│   │   ├── hibiscus-bg-light.svg   ← Background flower art (light sections)
│   │   └── hibiscus-bg-dark.svg    ← Background flower art (dark footer)
│   └── resume/
│       └── Anusha-Kelwadkar-Resume.pdf
├── .nojekyll                   ← Tells GitHub Pages not to run Jekyll on this
└── README.md
```

## Before you deploy: things to personalize

1. **LinkedIn URL** — I used a placeholder: `https://www.linkedin.com/in/anushakelwadkar`.
   It appears in 3 places: `index.html` (hero button + footer) and `about.html`
   (footer). Find-and-replace it with your real LinkedIn URL.
2. **Résumé PDF** — Your uploaded resume is already in
   `assets/resume/Anusha-Kelwadkar-Resume.pdf`. **Heads up:** that PDF includes
   your personal phone number. Once this site is public, anyone can open that
   PDF from the "Download résumé" / "Résumé (PDF)" links. Consider swapping in
   a version of your resume without a personal phone number (or with a number
   you're comfortable being public), then replace the file at that same path.
3. **Portrait photo (optional)** — `about.html` currently shows a placeholder
   icon where a headshot would go. To add a real photo: drop an image into
   `assets/img/` (create that folder) and replace the placeholder `<svg>` in
   `about.html`'s `.about-portrait` div with:
   ```html
   <img src="assets/img/portrait.jpg" alt="Anusha Kelwadkar">
   ```
4. **Project links** — The three case-study tiles (Brandywine Bookshop,
   podcast, video essay) open a modal with details but don't currently link
   out anywhere, since I didn't have live URLs for them. If any of these live
   online (a Behance link, an audio file, a video link), open `js/main.js` and
   set the `link` field for that project, e.g.:
   ```js
   brandywine: {
     ...
     link: "https://your-link-here.com"
   }
   ```
5. **"More on my portfolio" tile** points to `anushakelwadkar.myportfolio.com`
   — update this if that URL changes.

## Deploying to GitHub Pages (step by step)

You don't need to already have a GitHub account set up with anything special —
GitHub Pages hosting is free for public repositories.

### 1. Create a GitHub account (skip if you have one)
Go to [github.com](https://github.com) and sign up.

### 2. Create a new repository
- Click the **+** icon (top right) → **New repository**.
- Name it whatever you like. If you want your site at
  `https://<your-username>.github.io` (a clean root URL), name the repo
  exactly `<your-username>.github.io`. Otherwise any name (e.g.
  `portfolio`) works — your site will live at
  `https://<your-username>.github.io/portfolio`.
- Set it to **Public**.
- Don't initialize with a README (you already have one) — leave "Add a
  README" unchecked.
- Click **Create repository**.

### 3. Upload your files
Easiest option (no command line needed):
- On your new repo's page, click **uploading an existing file**.
- Drag the entire contents of this `anusha-portfolio` folder in (all files
  and the `css`, `js`, `assets` folders — select them all at once).
- Note: some browsers hide files starting with a dot. If `.nojekyll` doesn't
  upload via drag-and-drop, you can add it later via "Add file" → "Create
  new file" → name it `.nojekyll` → leave it empty → commit.
- Scroll down, add a commit message like "Initial portfolio site", and click
  **Commit changes**.

Alternative (command line, if you're comfortable with git):
```bash
cd anusha-portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 4. Turn on GitHub Pages
- In your repo, go to **Settings** → **Pages** (left sidebar).
- Under **Build and deployment** → **Source**, choose **Deploy from a
  branch**.
- Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
- GitHub will show a message like "Your site is live at ..." — it can take
  1–2 minutes the first time.

### 5. Visit your site
Go to the URL GitHub gives you (`https://<your-username>.github.io/<repo-name>`).
Check both pages, click each work tile to confirm the modal opens, and test
the résumé/LinkedIn links.

### 6. Making future updates
Any time you want to change something (swap in a real project image, add a
new case study, update your bio):
- Edit the file(s) directly on GitHub (click the pencil icon on any file), **or**
- Edit locally and re-upload / `git push` — GitHub Pages automatically
  redeploys within a minute or two of any push to `main`.

## Adding a new project tile

To add a 4th (or 5th) real case study to the work grid:

1. In `index.html`, copy one of the existing `<button class="tile" ...>`
   blocks inside `.work-grid` and give it a new `data-project="somekey"`.
2. In `js/main.js`, add a matching entry to the `projectData` object with
   that same key (`tag`, `title`, `meta`, `body`, and optional `link`).

That's it — the modal wiring is generic and will pick up any key you add.

## Notes on the design

- **Palette:** warm cream background (`#FBF1EC`), baby pink accent
  (`#F3C7D2` / `#E4A0B3`), and a dark woodsy brown (`#3B2A1F` / `#241811`)
  for text, structure, and the footer.
- **Type:** Fraunces (a soft serif) for headlines, Work Sans for body and UI
  text — loaded from Google Fonts via CDN link in the `<head>`.
- **Shape language:** hard-edged "postcard" drop shadows and an asymmetric
  rounded corner on cards/buttons, instead of soft blurred shadows — this is
  the recurring signature detail tying the whole site together.
- Fully responsive down to mobile, with visible keyboard focus states and
  `prefers-reduced-motion` support.
