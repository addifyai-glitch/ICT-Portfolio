/* ============================================================
   skills-sphere.js — 3D rotating skills sphere (CSS 3D, no deps)
   Self-contained. Reads from SPHERE_SKILLS below (independent of
   your existing SKILLS array so nothing else breaks).

   Mount point in HTML:  <div id="skillsSphere"></div>
   ============================================================ */
(function () {
  const mount = document.getElementById("skillsSphere");
  if (!mount) return;

  const CATEGORY_COLORS = {
    "AI & Automation":             "var(--neon, #6384ff)",
    "Cloud & Infrastructure":      "#5b8cff",
    "Enterprise Tools":            "#c98bff",
    "Post-Production & Studio Ops":"#ffb86b",
    "Web & Hosting":               "#5be0b3"
  };

  const SPHERE_SKILLS = [
    { name: "Agentic AI",      cat: "AI & Automation",             level: "Advanced",   desc: "Designing multi-step autonomous agent workflows." },
    { name: "Power Automate",  cat: "AI & Automation",             level: "Advanced",   desc: "Business process automation across Office 365." },
    { name: "Prompt Eng.",     cat: "AI & Automation",             level: "Advanced",   desc: "Claude, Copilot, and ChatGPT workflow design." },
    { name: "AI Docs",         cat: "AI & Automation",             level: "Proficient", desc: "Auto-generated SOPs and knowledge bases." },

    { name: "Azure AD",        cat: "Cloud & Infrastructure",      level: "Proficient", desc: "Identity, access, and tenant administration." },
    { name: "Office 365",      cat: "Cloud & Infrastructure",      level: "Advanced",   desc: "Admin, Exchange Online, and SharePoint." },
    { name: "VMware ESXi",     cat: "Cloud & Infrastructure",      level: "Proficient", desc: "Virtualization and host management." },
    { name: "Hyper-V",         cat: "Cloud & Infrastructure",      level: "Proficient", desc: "Windows virtualization environments." },
    { name: "Windows Server",  cat: "Cloud & Infrastructure",      level: "Advanced",   desc: "Server 2008–2019, AD, GPOs, SCCM." },
    { name: "Linux",           cat: "Cloud & Infrastructure",      level: "Working",    desc: "Ubuntu administration." },

    { name: "ServiceNow",      cat: "Enterprise Tools",            level: "Advanced",   desc: "Ticket routing, escalation, SLA workflows." },
    { name: "Jira",            cat: "Enterprise Tools",            level: "Advanced",   desc: "Workflow and issue management." },
    { name: "Monday.com",      cat: "Enterprise Tools",            level: "Proficient", desc: "Project and task coordination." },
    { name: "Adobe CC",        cat: "Enterprise Tools",            level: "Proficient", desc: "Creative Cloud license management." },
    { name: "SharePoint",      cat: "Enterprise Tools",            level: "Advanced",   desc: "Site design, libraries, automated flows." },
    { name: "SQL Server",      cat: "Enterprise Tools",            level: "Working",    desc: "Installation, backups, maintenance." },

    { name: "Studio Ops",      cat: "Post-Production & Studio Ops", level: "Advanced",  desc: "Equipment readiness and workflow support." },
    { name: "AV/VC Rooms",     cat: "Post-Production & Studio Ops", level: "Advanced",  desc: "Hybrid meeting setups and integrations." },
    { name: "Vendor Coord.",   cat: "Post-Production & Studio Ops", level: "Advanced",  desc: "Global vendor and partner communication." },

    { name: "WordPress",       cat: "Web & Hosting",               level: "Proficient", desc: "Site design and theme work." },
    { name: "Shared Hosting",  cat: "Web & Hosting",               level: "Proficient", desc: "cPanel, DNS, and hosting management." },
    { name: "addify.ae",       cat: "Web & Hosting",               level: "Advanced",   desc: "Hard-coded + WordPress hybrid platform." }
  ];

  // ---- build DOM ----
  mount.innerHTML = `
    <div class="sph">
      <div class="sph__bar">
        <div class="sph__modes" role="tablist" aria-label="Skills view mode">
          <button class="sph__mode is-active" data-mode="sphere" role="tab" aria-selected="true">3D Sphere</button>
          <button class="sph__mode" data-mode="cloud" role="tab" aria-selected="false">Tag Cloud</button>
        </div>
        <button class="sph__collapse" aria-expanded="true" aria-controls="sphStage">Hide</button>
      </div>
      <div class="sph__stage" id="sphStage">
        <div class="sph__glow" aria-hidden="true"></div>
        <div class="sph__world" id="sphWorld"></div>
        <p class="sph__hint">Drag to spin · hover to speed up · click a tag to pin · click again to release</p>
      </div>
      <div class="sph__tip" id="sphTip" role="status" hidden></div>
    </div>`;

  const world  = mount.querySelector("#sphWorld");
  const tip    = mount.querySelector("#sphTip");
  const stage  = mount.querySelector("#sphStage");
  const collapseBtn = mount.querySelector(".sph__collapse");
  const modeBtns    = mount.querySelectorAll(".sph__mode");

  // ---- distribute tags on a sphere (Fibonacci sphere) ----
  const R = 150;
  const n = SPHERE_SKILLS.length;
  const tags = SPHERE_SKILLS.map((s, i) => {
    const phi   = Math.acos(-1 + (2 * i + 1) / n);
    const theta = Math.sqrt(n * Math.PI) * phi;
    const x = R * Math.cos(theta) * Math.sin(phi);
    const y = R * Math.sin(theta) * Math.sin(phi);
    const z = R * Math.cos(phi);
    const el = document.createElement("button");
    el.className = "sph__tag";
    el.textContent = s.name;
    el.style.setProperty("--c", CATEGORY_COLORS[s.cat] || "var(--neon)");
    el.dataset.cat   = s.cat;
    el.dataset.level = s.level;
    el.dataset.desc  = s.desc;
    el.dataset.x = x; el.dataset.y = y; el.dataset.z = z;
    world.appendChild(el);
    return { el, x, y, z, s };
  });

  // ---- rotation state ----
  let rotX = -0.3, rotY = 0;
  let velX = 0,    velY = 0.0016;
  let baseSpeed = 0.0016;
  let hovering = false, pinned = false, dragging = false;
  let lastPX = 0, lastPY = 0;
  let mode = "sphere";

  function project() {
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    for (const t of tags) {
      let x = t.x * cosY - t.z * sinY;
      let z = t.x * sinY + t.z * cosY;
      let y = t.y * cosX - z * sinX;
      z = t.y * sinX + z * cosX;
      const scale   = (z + R) / (2 * R);
      const opacity = 0.35 + scale * 0.65;
      const fontSc  = 0.8 + scale * 0.55;
      t.el.style.transform = `translate(-50%,-50%) translate3d(${x}px, ${y}px, 0) scale(${fontSc})`;
      t.el.style.opacity   = opacity.toFixed(3);
      t.el.style.zIndex    = String(Math.round(scale * 100));
    }
  }

  function tick() {
    if (mode === "sphere" && !dragging && !pinned) {
      const target = hovering ? baseSpeed * 3.2 : baseSpeed;
      velY += (target - velY) * 0.05;
      rotY += velY;
      rotX += velX;
      velX *= 0.92;
    }
    if (mode === "sphere") project();
    requestAnimationFrame(tick);
  }

  // ---- tooltip ----
  function showTip(el) {
    tip.innerHTML =
      `<strong>${el.textContent}</strong>` +
      `<span class="sph__tip-cat" style="color:${el.style.getPropertyValue("--c")}">${el.dataset.cat}</span>` +
      `<span class="sph__tip-lvl">Proficiency: ${el.dataset.level}</span>` +
      `<span class="sph__tip-desc">${el.dataset.desc}</span>`;
    tip.hidden = false;
  }
  function hideTip() { tip.hidden = true; }

  // ---- interactions ----
  tags.forEach(t => {
    t.el.addEventListener("mouseenter", () => showTip(t.el));
    t.el.addEventListener("click", e => {
      e.stopPropagation();
      pinned = !pinned;
      tags.forEach(o => o.el.classList.remove("is-pinned"));
      if (pinned) { t.el.classList.add("is-pinned"); showTip(t.el); }
      else hideTip();
    });
  });

  stage.addEventListener("mouseenter", () => { hovering = true; });
  stage.addEventListener("mouseleave", () => { hovering = false; if (!pinned) hideTip(); });

  stage.addEventListener("pointerdown", e => {
    dragging = true; pinned = false;
    tags.forEach(o => o.el.classList.remove("is-pinned"));
    lastPX = e.clientX; lastPY = e.clientY;
    stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener("pointermove", e => {
    if (!dragging) return;
    const dx = e.clientX - lastPX, dy = e.clientY - lastPY;
    rotY += dx * 0.006;
    rotX += dy * 0.006;
    velY = dx * 0.0006;
    lastPX = e.clientX; lastPY = e.clientY;
    project();
  });
  function endDrag() { dragging = false; }
  stage.addEventListener("pointerup",     endDrag);
  stage.addEventListener("pointercancel", endDrag);

  // ---- mode toggle ----
  modeBtns.forEach(btn => btn.addEventListener("click", () => {
    mode = btn.dataset.mode;
    modeBtns.forEach(b => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", String(b === btn));
    });
    world.classList.toggle("is-cloud", mode === "cloud");
    pinned = false; hideTip();
    if (mode === "cloud") {
      tags.forEach(t => { t.el.style.transform = "none"; t.el.style.opacity = "1"; t.el.style.zIndex = "1"; });
    }
  }));

  // ---- collapse ----
  collapseBtn.addEventListener("click", () => {
    const open = stage.classList.toggle("is-collapsed") === false;
    collapseBtn.textContent = open ? "Hide" : "Show";
    collapseBtn.setAttribute("aria-expanded", String(open));
  });

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) baseSpeed = 0;

  if (window.matchMedia("(max-width: 680px)").matches) {
    stage.classList.add("is-collapsed");
    collapseBtn.textContent = "Show";
    collapseBtn.setAttribute("aria-expanded", "false");
  }

  project();
  requestAnimationFrame(tick);
})();
