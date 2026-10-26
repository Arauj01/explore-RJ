// Interações simples para o projeto Explore RJ
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}

document.querySelectorAll('.year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const feedback = document.querySelector('#form-feedback');

    if (!name) {
      feedback.textContent = 'Por favor, informe seu nome.';
      return;
    }

    feedback.textContent = `Obrigado, ${name}! Esta é uma demonstração: a mensagem não foi enviada para um servidor.`;
    contactForm.reset();
  });
}
