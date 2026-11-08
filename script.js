// WayUp language switcher
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btns = document.querySelectorAll('.lang-btn');

  // Load saved language
  const saved = localStorage.getItem('wayup-lang') || 'ua';
  setLang(saved);

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLang(lang);
      localStorage.setItem('wayup-lang', lang);
    });
  });

  function setLang(lang) {
    body.classList.toggle('en', lang === 'en');
    btns.forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  // Simple form handler
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const isEn = body.classList.contains('en');
      alert(isEn
        ? 'Thank you! We will contact you soon.'
        : 'Дякуємо! Ми зв’яжемося з вами найближчим часом.');
      form.reset();
    });
  }
});
