// Animation for pages without widgets

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) {
    setInterval(() => {
      logo.classList.add('spin');
      setTimeout(() => logo.classList.remove('spin'), 1000);
    }, 5000);
  }
});
