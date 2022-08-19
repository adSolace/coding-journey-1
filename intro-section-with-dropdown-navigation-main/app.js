const overlay = document.querySelector('.overlay');
const menuItems = document.querySelector('.menu-items');
const MenuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-menu');

MenuBtn.addEventListener('click', () => {
  overlay.classList.add('showMenu');
});
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('showMenu');
});
