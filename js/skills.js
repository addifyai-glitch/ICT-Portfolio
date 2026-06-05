(() => {
  const grid = document.getElementById('skillsGrid');
  if (!grid || !window.SKILLS) return;

  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card reveal">
      <p class="skill-card__category">${s.category}</p>
      <p class="skill-card__name">${s.name}</p>
      <div class="skill-card__level">
        <div class="skill-card__level-fill" style="width:0%" data-width="${s.level}%"></div>
      </div>
      <div class="skill-card__tags">
        ${s.tags.map(t => `<span class="skill-card__tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  /* animate bars when cards become visible */
  const bars = grid.querySelectorAll('.skill-card__level-fill');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width;
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => io.observe(b));
})();
