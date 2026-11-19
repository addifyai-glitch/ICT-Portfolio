/* ============================================================
   build.mjs — pre-render js/data.js into index.html (static HTML)

   Usage:   node scripts/build.mjs           rewrite index.html
            node scripts/build.mjs --check   exit 1 if index.html is stale

   Each section lives between a pair of markers in index.html:
       <!-- build:skills --> … <!-- /build:skills -->
   Everything between the markers is replaced; everything else in
   index.html is hand-written and left untouched.
   ============================================================ */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = fileURLToPath(new URL("..", import.meta.url));
const htmlPath = root + "index.html";

const ctx = { window: {} };
vm.runInNewContext(readFileSync(root + "js/data.js", "utf8"), ctx);
const D = ctx.window;

const esc = s => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const TYPE_ICON = { badge: "🏅", module: "📘", path: "🛤️", trophy: "🏆" };

const blocks = {
  services: () => D.SERVICES.map(s => `
<article class="service-card reveal">
  <h3 class="service-card__title">${esc(s.title)}</h3>
  <p class="service-card__desc">${esc(s.desc)}</p>
</article>`).join(""),

  references: () => `
<table class="refs">
  <caption>${esc(D.REFERENCES_CAPTION)}</caption>
  <thead><tr><th scope="col">Industry</th><th scope="col">Location</th><th scope="col">Scope</th></tr></thead>
  <tbody>${D.REFERENCES.map(r => `
    <tr><td data-label="Industry">${esc(r.industry)}</td><td data-label="Location">${esc(r.location)}</td><td data-label="Scope">${esc(r.scope)}</td></tr>`).join("")}
  </tbody>
</table>
<p class="refs__coverage"><span>Coverage</span> ${esc(D.REFERENCES_COVERAGE)}</p>`,

  skills: () => D.SKILLS.map(s => `
<div class="skill-card reveal">
  <h3 class="skill-card__category">${esc(s.group)}</h3>
  <ul class="skill-card__items">${s.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
</div>`).join(""),

  experience: () => D.EXPERIENCE.map(e => `
<div class="timeline-item reveal">
  <h3 class="timeline-item__role">${esc(e.role)}</h3>
  <p class="timeline-item__company">${esc(e.meta)}</p>
  <ul class="timeline-item__list">${e.points.map(p => `
    <li>${esc(p)}</li>`).join("")}
  </ul>
</div>`).join(""),

  projects: () => D.PROJECTS.map(p => `
<article class="project-card reveal">
  <h3 class="project-card__title">${esc(p.title)}</h3>
  <p class="project-card__desc">${esc(p.desc)}</p>
  <div class="project-card__tags">${p.tags.map(t => `<span class="project-card__tag">${esc(t)}</span>`).join("")}</div>
  <a class="project-card__link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(new URL(p.link).host + new URL(p.link).pathname.replace(/\/$/, ""))} &rarr;</a>
</article>`).join(""),

  certs: () => D.CERTS.map(c => {
    const body = `
  <div class="cert-badge" aria-hidden="true">${esc(c.abbr)}</div>
  <div class="cert-card__body">
    <strong>${esc(c.name)}</strong>
    <span>${esc(c.issuer)}</span>${c.link ? `
    <span class="cert-card__verify">Verify &rarr;</span>` : ""}
  </div>`;
    return c.link
      ? `\n<a class="cert-card cert-card--link reveal" href="${esc(c.link)}" target="_blank" rel="noopener">${body}\n</a>`
      : `\n<div class="cert-card reveal">${body}\n</div>`;
  }).join(""),

  "ms-learn-stats": () => {
    const s = D.MS_LEARN_STATS;
    return [["badges", "Badges"], ["trophies", "Trophies"], ["level", "Level"]].map(([k, l]) =>
      `\n<div class="ms-stat"><span class="ms-stat__num">${esc(s[k])}</span><span class="ms-stat__lbl">${l}</span></div>`).join("");
  },

  /* only categories that actually have entries get a chip */
  "ms-learn-filters": () => {
    const cats = [...new Set(D.MS_LEARN.map(e => e.category))];
    return `\n<button type="button" class="ms-learn__chip is-active" data-cat="all" aria-pressed="true">All</button>` +
      cats.map(c => `\n<button type="button" class="ms-learn__chip" data-cat="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join("");
  },

  "ms-learn-grid": () => D.MS_LEARN.map(e => `
<div class="ms-card reveal${e.type === "trophy" ? " ms-card--trophy" : ""}" data-cat="${esc(e.category)}">
  <div class="ms-card__icon ms-card__icon--${esc(e.type)}" aria-hidden="true">${TYPE_ICON[e.type] || "📄"}</div>
  <div class="ms-card__body">
    <p class="ms-card__name">${esc(e.name)}</p>
    <div class="ms-card__meta">
      <span class="ms-card__cat">${esc(e.category)}</span>
      <span class="ms-card__status ms-card__status--${esc(e.status)}">${e.status === "completed" ? "Completed" : "In Progress"}</span>
    </div>
  </div>
</div>`).join("")
};

const indent = (html, pad) => html.replace(/\n(?!\n)/g, "\n" + pad);

let html = readFileSync(htmlPath, "utf8");
const original = html;
for (const [name, render] of Object.entries(blocks)) {
  const re = new RegExp(`([ \\t]*)<!-- build:${name} -->[\\s\\S]*?<!-- /build:${name} -->`);
  if (!re.test(html)) throw new Error(`index.html: missing <!-- build:${name} --> markers`);
  html = html.replace(re, (_, pad) =>
    `${pad}<!-- build:${name} -->${indent(render(), pad)}\n${pad}<!-- /build:${name} -->`);
}

if (process.argv.includes("--check")) {
  if (html !== original) { console.error("index.html is stale — run: node scripts/build.mjs"); process.exit(1); }
  console.log("index.html is up to date");
} else {
  writeFileSync(htmlPath, html);
  console.log(`index.html ${html === original ? "unchanged" : "updated"} (${Object.keys(blocks).length} sections)`);
}
