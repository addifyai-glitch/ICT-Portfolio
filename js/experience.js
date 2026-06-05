(() => {
  const list = document.getElementById('experienceList');
  if (!list || !window.EXPERIENCE) return;

  list.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item reveal">
      <div class="timeline-item__header">
        <span class="timeline-item__role">${e.role}</span>
        <span class="timeline-item__date">${e.date}</span>
      </div>
      <p class="timeline-item__company">${e.company}</p>
      <ul class="timeline-item__list">
        ${e.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');
})();
