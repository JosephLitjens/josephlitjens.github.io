// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ---- Projects dropdown (click-to-toggle, works for touch + mouse) ----
document.querySelectorAll('.nav-dropdown-wrap').forEach((wrap) => {
  const trigger = wrap.querySelector('.nav-dropdown-trigger');
  if (!trigger) return;
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = wrap.classList.contains('open');
    document.querySelectorAll('.nav-dropdown-wrap.open').forEach((w) => w.classList.remove('open'));
    if (!isOpen) wrap.classList.add('open');
  });
});
document.addEventListener('click', (e) => {
  document.querySelectorAll('.nav-dropdown-wrap.open').forEach((wrap) => {
    if (!wrap.contains(e.target)) wrap.classList.remove('open');
  });
});

// Close mobile menu when a link is clicked
if (navLinks) {
  navLinks.querySelectorAll('a:not(.nav-dropdown-trigger)').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ---- Scroll-reveal animation ----
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach((el) => observer.observe(el));
}

// ---- Footer year ----
document.querySelectorAll('#year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
