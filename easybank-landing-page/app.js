const header = document.getElementById('header');
const navOverlay = document.getElementById('nav-overlay');
const navLinks = document.querySelectorAll('.header a');
const navBtn = document.getElementById('nav-btn');

navBtn.addEventListener('click', () => {
  header.classList.toggle('open');
});

navOverlay.addEventListener('click', () => {
  header.classList.remove('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
  });
});
