// Ponzfolio interactions
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20 ? '0 8px 30px rgba(0,0,0,.4)' : 'none';
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  hamburger.textContent = '☰';
}));

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.about-card, .info-card, .skill-card, .project-card, .section-head, .hero-left, .hero-right, .pill, .more-projects-note').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Copy email
document.getElementById('copyEmail').addEventListener('click', function() {
  const email = 'devonchristan24@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const old = this.textContent;
    this.textContent = '✓ Email Disalin!';
    setTimeout(() => this.textContent = old, 1800);
  });
});

// Typing glow on hero title
console.log('%c Ponzfolio — Devon Christan Setiawan | XI PPLG B ', 'background:#7c5cff;color:#fff;font-size:14px;padding:6px 12px;border-radius:8px');
