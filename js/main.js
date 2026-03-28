// ── Fade-in on scroll ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

// ── Project card renderer ──
// Reads PROJECTS from data/projects.js and builds cards dynamically.
// To add a project: edit data/projects.js only — no HTML changes needed.

function buildActiveCard(p) {
  return `
    <div class="project-card fade-in">
      <div class="card-header">
        <div>
          <div class="card-title">${p.title}</div>
        </div>
        <span class="card-os-tag">${p.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-field">
          <div class="card-field-label">Scenario</div>
          <div class="card-field-value">${p.scenario}</div>
        </div>
        <div class="card-field">
          <div class="card-field-label">Problem</div>
          <div class="card-field-value">${p.problem}</div>
        </div>
        <div class="card-field">
          <div class="card-field-label">Solution</div>
          <div class="card-field-value">${p.solution}</div>
        </div>
        <div class="card-field card-result">
          <div class="card-field-label">Result</div>
          <div class="card-field-value">${p.result}</div>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-tags">
          ${p.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}
        </div>
        <div style="display:flex; gap:0.75rem; align-items:center;">
          <button class="btn-readme" onclick="openReadme('${p.repo}', '${p.id}')">View README</button>
          <a href="https://github.com/${p.repo}" target="_blank" class="card-link">GitHub <span>→</span></a>
        </div>
      </div>
    </div>`;
}

function buildPlaceholderCard(p) {
  return `
    <div class="project-card fade-in" style="opacity:0.4; pointer-events:none;">
      <div class="card-header">
        <div>
          <div class="card-title" style="color:var(--muted);">${p.title}</div>
        </div>
        <span class="card-os-tag" style="opacity:0.4;">${p.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-field">
          <div class="card-field-label">Status</div>
          <div class="card-field-value" style="color:var(--muted); font-family:var(--mono); font-size:0.8rem;">In progress...</div>
        </div>
        <div class="card-field card-result" style="border-left-color:var(--muted);">
          <div class="card-field-label" style="color:var(--muted);">Result</div>
          <div class="card-field-value" style="color:var(--muted);">${p.result}</div>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-tags">
          ${p.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>`;
}

function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container || typeof PROJECTS === "undefined") return;

  container.innerHTML = PROJECTS.map((p) =>
    p.active ? buildActiveCard(p) : buildPlaceholderCard(p),
  ).join("");

  // Re-observe newly rendered cards for fade-in
  container.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  renderProjects();
});
