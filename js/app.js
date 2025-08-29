// Copyright © 2024 cyue.x7. All rights reserved.

// 移除 copyIP 和 online-count 相關程式碼，因為 index.html 沒有這些元素

// Typed.js Initialization
var typed = new Typed('#typed-greeting', {
  strings: ["Hi, I'm cyue.x7"],
  typeSpeed: 70,
  backSpeed: 0,
  backDelay: 99999,
  startDelay: 500,
  showCursor: true,
  cursorChar: '|',
  loop: false,
});

// --- Theme Toggle Functionality ---
const themeToggleButton = document.getElementById('themeToggle');
const bodyElement = document.body;
const prefersDarkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  if (theme === 'dark') {
    bodyElement.classList.add('dark-theme');
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    bodyElement.classList.remove('dark-theme');
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

const currentSavedTheme = localStorage.getItem('theme');
if (currentSavedTheme) {
  setTheme(currentSavedTheme);
} else {
  setTheme(prefersDarkSchemeQuery.matches ? 'dark' : 'light');
}

themeToggleButton.addEventListener('click', () => {
  const newThemeToSet = bodyElement.classList.contains('dark-theme') ? 'light' : 'dark';
  setTheme(newThemeToSet);
  localStorage.setItem('theme', newThemeToSet);
});

prefersDarkSchemeQuery.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

// --- Menu Toggle Functionality ---
const menuToggleButton = document.getElementById('menuToggle');
const mainNavigation = document.getElementById('mainNav');

menuToggleButton.addEventListener('click', () => {
  const isMenuExpanded = menuToggleButton.getAttribute('aria-expanded') === 'true' || false;
  menuToggleButton.setAttribute('aria-expanded', !isMenuExpanded);
  mainNavigation.classList.toggle('is-open');
  menuToggleButton.classList.toggle('is-active');
  bodyElement.classList.toggle('no-scroll');
  mainNavigation.setAttribute('aria-hidden', isMenuExpanded);
});

mainNavigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (link.id === 'navAbout') {
      if (mainNavigation.classList.contains('is-open')) {
        menuToggleButton.click();
      }
      return;
    }
    if (mainNavigation.classList.contains('is-open')) {
      menuToggleButton.click();
    }
  });
});

// --- About Me Modal Functionality ---
const aboutMeModal = document.getElementById('aboutModal');
const navAboutLink = document.getElementById('navAbout');
const closeAboutModalButton = document.getElementById('closeAboutModal');

navAboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  aboutMeModal.style.display = 'flex';
  setTimeout(() => { aboutMeModal.querySelector('.modal-content').classList.add('modal-animate-in'); }, 10);
  if (!bodyElement.classList.contains('no-scroll')) {
    bodyElement.classList.add('no-scroll');
  }
});

closeAboutModalButton.addEventListener('click', () => {
  const modalContentElement = aboutMeModal.querySelector('.modal-content');
  modalContentElement.classList.remove('modal-animate-in');
  modalContentElement.classList.add('modal-animate-out');
  setTimeout(() => {
    aboutMeModal.style.display = 'none';
    modalContentElement.classList.remove('modal-animate-out');
    if (!mainNavigation.classList.contains('is-open')) {
      bodyElement.classList.remove('no-scroll');
    }
  }, 300);
});

window.addEventListener('click', (event) => {
  if (event.target === aboutMeModal) {
    closeAboutModalButton.click();
  }
});
