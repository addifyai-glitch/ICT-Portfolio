(() => {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !window.PROJECTS) return;

  grid.innerHTML = PROJECTS.map(p => `
    <div class="project-card reveal">
      <p class="project-card__title">${p.title}</p>
      <p class="project-card__desc">${p.desc}</p>
      <div class="project-card__tags">
        ${p.tags.map(t => `<span class="project-card__tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
})();
