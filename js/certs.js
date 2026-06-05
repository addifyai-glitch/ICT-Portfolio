/* renders cert/badge cards from CERTS (data.js)
   - if a cert has a non-empty `link`, render as a clickable verified badge
   - otherwise render a clean static pill card */
(function () {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  grid.innerHTML = CERTS.map(c => {
    const verify = c.link
      ? `<span class="cert-card__verify">Verify &rarr;</span>`
      : "";
    const body = `
      <div class="cert-badge">${c.abbr}</div>
      <div class="cert-card__body">
        <strong>${c.name}</strong>
        <span>${c.issuer}</span>
        ${verify}
      </div>`;
    return c.link
      ? `<a class="cert-card cert-card--link reveal" href="${c.link}" target="_blank" rel="noopener">${body}</a>`
      : `<div class="cert-card reveal">${body}</div>`;
  }).join("");
})();
