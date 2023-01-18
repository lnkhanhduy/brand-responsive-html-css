const bntActiveNavbar = document.querySelector('.header-navbar__btn');
const navbar = document.querySelector('.header-navbar__link');

bntActiveNavbar.addEventListener('click', () => {
  navbar.classList.toggle('active-navbar');
});
