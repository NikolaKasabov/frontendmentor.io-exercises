const header = document.getElementById('header');
const navBtn = document.getElementById('nav-btn');

navBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
  header.classList.toggle('open');
  document.body.classList.toggle('disable-scroll-on-mobile');
});
