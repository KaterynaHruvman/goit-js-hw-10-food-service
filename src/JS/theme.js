import localStorage from './localStorage';
const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.theme-switch-toggle');

btnRef.addEventListener('change', () => {
  bodyRef.className = 'theme-switch-toggle';
  bodyRef.classList = btnRef.checked ? 'dark-theme' : 'light-theme';
  localStorage.save('theme', bodyRef.className);
  const typeOfTheme = bodyRef.className;
  localStorage.save('theme', typeOfTheme);
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.load('theme') === 'dark-theme') {
    btnRef.checked = true;
  }
  bodyRef.classList.add(localStorage.load('theme'));
});