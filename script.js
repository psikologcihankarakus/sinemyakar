document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = new FormData(form).get('name');
      status.textContent = `Teşekkürler ${name}. Ön görüşme talebiniz alındı; en kısa sürede size dönüş yapacağım.`;
      form.reset();
    });
  }
});
