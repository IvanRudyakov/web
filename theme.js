// Handles dark/light theme toggling across pages

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    body.classList.add('dark-theme');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const mode = body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', mode);
    });
  }
});
