(() => {
  const list = document.getElementById('experienceList');
  if (!list || !window.EXPERIENCE) return;

  list.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item reveal">
      <div class="timeline-item__header">
        <span class="timeline-item__role">${e.role}</span>
      </div>
      <p class="timeline-item__company">${e.meta}</p>
      <ul class="timeline-item__list">
        ${e.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `).join('');
})();
