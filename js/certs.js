(() => {
  const grid = document.getElementById('certsGrid');
  if (!grid || !window.CERTS) return;

  grid.innerHTML = CERTS.map(c => `
    <div class="cert-card reveal">
      <div class="cert-card__logo">${c.icon}</div>
      <div class="cert-card__body">
        <p class="cert-card__name">${c.name}</p>
        <p class="cert-card__issuer">${c.issuer}</p>
        <p class="cert-card__date">${c.date}</p>
        ${c.badge ? `<span class="cert-card__badge">${c.badge}</span>` : ''}
      </div>
    </div>
  `).join('');
})();
