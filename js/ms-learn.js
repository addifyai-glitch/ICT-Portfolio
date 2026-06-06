/* renders MS Learn stats banner + achievement cards from data.js
   filter chips show/hide existing cards — no re-render needed */
(() => {
  // ---- stats banner ----
  const statsEl = document.getElementById("msLearnStats");
  if (statsEl && window.MS_LEARN_STATS) {
    const s = window.MS_LEARN_STATS;
    statsEl.innerHTML =
      `<div class="ms-stat"><span class="ms-stat__num">${s.badges}</span><span class="ms-stat__lbl">Badges</span></div>` +
      `<div class="ms-stat"><span class="ms-stat__num">${s.trophies}</span><span class="ms-stat__lbl">Trophies</span></div>` +
      `<div class="ms-stat"><span class="ms-stat__num">${s.level}</span><span class="ms-stat__lbl">Level</span></div>`;
  }

  // ---- cards ----
  const grid = document.getElementById("msLearnGrid");
  if (!grid || !window.MS_LEARN) return;

  const TYPE_ICON = { badge: "🏅", module: "📘", path: "🛤️", trophy: "🏆" };

  grid.innerHTML = window.MS_LEARN.map(e => {
    const isTrophy = e.type === "trophy";
    return `
      <div class="ms-card reveal${isTrophy ? " ms-card--trophy" : ""}" data-cat="${e.category}">
        <div class="ms-card__icon ms-card__icon--${e.type}" aria-hidden="true">${TYPE_ICON[e.type] || "📄"}</div>
        <div class="ms-card__body">
          <p class="ms-card__name">${e.name}</p>
          <div class="ms-card__meta">
            <span class="ms-card__cat">${e.category}</span>
            <span class="ms-card__status ms-card__status--${e.status}">${e.status === "completed" ? "Completed" : "In Progress"}</span>
          </div>
        </div>
      </div>`;
  }).join("");

  // category chips filter (show/hide — preserves .visible state)
  document.querySelectorAll(".ms-learn__chip").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".ms-learn__chip").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const cat = btn.dataset.cat;
      grid.querySelectorAll(".ms-card").forEach(card => {
        card.classList.toggle("is-hidden", cat !== "all" && card.dataset.cat !== cat);
      });
    });
  });
})();
