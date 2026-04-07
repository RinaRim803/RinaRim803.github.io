# Namuk Rim — IT Portfolio Site

> Personal portfolio site built with vanilla HTML/CSS/JS and deployed via GitHub Pages.

🔗 **Live Site:** [rinarin803.github.io](https://rinarim803.github.io)

---

## Scenario

A hiring manager searches for a candidate on GitHub.  
They find a profile with several automation projects — but no central place to understand the person behind them.

## Problem

Individual project READMEs exist, but there's no single page that ties together the narrative:  
*who this person is, what they've built, and why it matters* for an IT support role.

## Solution

A lightweight, single-page portfolio site that:

- Renders project cards dynamically from `data/projects.js` — no HTML edits needed to add a project
- Renders the skills section dynamically from `data/skills.js` — same pattern
- Fetches and displays each project's `README.md` inline via the **GitHub API** (no page navigation required)
- Uses **marked.js** to parse Markdown into styled HTML inside a modal
- Applies fade-in scroll animations via `IntersectionObserver`

## Result

A single URL that gives any recruiter or hiring manager full context:  
skills, projects, live README content, and contact — all without leaving the page.

---

## Tech Stack

| Layer | Detail |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 — custom properties, CSS Grid, Flexbox |
| Logic | Vanilla JavaScript (ES6+) |
| Markdown | marked.js (CDN) |
| Data | GitHub REST API v3 (`/repos/{owner}/{repo}/readme`) |
| Hosting | GitHub Pages |
| Fonts | IBM Plex Mono · Syne (Google Fonts) |

---

## Project Structure

```
RinaRim803.github.io/
├── index.html            # Single-page shell — no content hardcoded
├── css/
│   └── style.css         # All styles and CSS variables
├── js/
│   ├── main.js           # Renderers: renderSkills(), renderProjects()
│   └── readme-modal.js   # GitHub API fetch + modal open/close
└── data/
    ├── projects.js        # PROJECTS[] — add a project here, card appears automatically
    └── skills.js          # SKILLS[]   — add a skill here, grid updates automatically
```

## Adding a Project

Edit `data/projects.js` and append to the `PROJECTS` array:

```js
{
  id: "repo-name",
  title: "Display Title",
  tag: "Stack · Label",
  repo: "RinaRim803/repo-name",
  tags: ["Python", "Flask"],
  scenario: "One-line ticket scenario",
  problem:  "What the manual process cost",
  solution: "What the script does",
  result:   "Measurable outcome",
  active: true,
}
```

No changes to `index.html` or `main.js` required.
