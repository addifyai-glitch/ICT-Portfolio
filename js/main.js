/* ============================================================
   main.js — theme toggle, scroll reveal, hero tilt, footer year
   ============================================================ */

/* --- year --- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* --- theme toggle --- */
const themeToggle = document.getElementById('themeToggle');
const iconEl = themeToggle?.querySelector('.theme-toggle__icon');

const applyTheme = theme => {
  document.documentElement.setAttribute('data-theme', theme);
  if (iconEl) iconEl.textContent = theme === 'dark' ? '☀' : '☾';
  localStorage.setItem('theme', theme);
};

const saved = localStorage.getItem('theme');
const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
applyTheme(saved || preferred);

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* --- scroll reveal --- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

const observeReveals = () => {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
};

/* run after renderers have injected DOM */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeReveals);
} else {
  requestAnimationFrame(observeReveals);
}

/* --- nav active link highlight --- */
const sections = document.querySelectorAll('main [id]');
const navLinks = document.querySelectorAll('.nav__links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${e.target.id}`
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

/* --- hero parallax tilt (desktop only) --- */
const hero = document.querySelector('[data-tilt]');
if (hero && window.matchMedia('(pointer:fine)').matches) {
  hero.addEventListener('mousemove', e => {
    const { left, top, width, height } = hero.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 12;
    const y = ((e.clientY - top) / height - 0.5) * -8;
    hero.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg)`;
  });
  hero.addEventListener('mouseleave', () => {
    hero.style.transform = '';
  });
}
