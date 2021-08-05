'use strict';
///////////////////////
// MOBILE MENU

// SELECTORS
const btnHamburger = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

// EVENT LISTENERS
btnHamburger.addEventListener('click', function () {
  if (menu.classList.contains('hidden')) {
    // Open Hamburger Menu
    menu.classList.remove('fade-out', 'hidden');
    menu.classList.add('fade-in');
  } else {
    // Close Hamburger Menu
    menu.classList.remove('fade-in');
    menu.classList.add('fade-out');
    setTimeout(() => {
      menu.classList.add('hidden');
    }, 500);
  }
});
