// ── GitHub README Modal ──
// Fetches README.md from GitHub API and renders it in a modal.
// Caches fetched content per repo to avoid redundant API calls.

const readmeCache = {};

async function openReadme(repo, title) {
  const modal   = document.getElementById('readme-modal');
  const body    = document.getElementById('modal-body');
  const heading = document.getElementById('modal-title');

  heading.textContent = title + ' / README.md';
  body.innerHTML = '<div class="modal-loading">Fetching README...</div>';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Return cached version if already fetched
  if (readmeCache[repo]) {
    body.innerHTML = readmeCache[repo];
    return;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/readme`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });

    if (!res.ok) {
      body.innerHTML = '<div class="modal-loading">README not found.</div>';
      return;
    }

    const data = await res.json();
    // GitHub returns README content as base64 — decode it
    const decoded = decodeURIComponent(escape(atob(data.content)));
    const html    = marked.parse(decoded);
    const wrapped = `<div class="readme-content">${html}</div>`;

    readmeCache[repo] = wrapped;
    body.innerHTML    = wrapped;

  } catch (err) {
    body.innerHTML = '<div class="modal-loading">Failed to load README. Check your connection.</div>';
  }
}

function closeModal() {
  const modal = document.getElementById('readme-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on overlay click
document.getElementById('readme-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});