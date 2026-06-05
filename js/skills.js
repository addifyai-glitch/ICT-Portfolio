(() => {
  const grid = document.getElementById('skillsGrid');
  if (!grid || !window.SKILLS) return;

  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card reveal">
      <p class="skill-card__category">${s.group}</p>
      <ul class="skill-card__items">
        ${s.items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>
  `).join('');
})();
