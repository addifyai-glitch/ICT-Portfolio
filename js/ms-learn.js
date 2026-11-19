/* MS Learn category filter — progressive enhancement.
   Cards are static HTML (pre-rendered by scripts/build.mjs); without JS
   every card stays visible and the chip row stays hidden. */
(() => {
  const filters = document.querySelector(".ms-learn__filters");
  const grid = document.getElementById("msLearnGrid");
  if (!filters || !grid) return;

  const chips = filters.querySelectorAll(".ms-learn__chip");
  chips.forEach(btn => {
    btn.addEventListener("click", () => {
      chips.forEach(b => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      const cat = btn.dataset.cat;
      grid.querySelectorAll(".ms-card").forEach(card => {
        card.classList.toggle("is-hidden", cat !== "all" && card.dataset.cat !== cat);
      });
    });
  });
  filters.hidden = false;
})();
