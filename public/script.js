"use strict";

// SELECTORS
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

// EVENT LISTENERS
btn.addEventListener('click', () => menu.classList.toggle('hidden'));
