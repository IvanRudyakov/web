// Animation for pages without widgets

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) {
    setInterval(() => {
      logo.classList.add('spin');
      setTimeout(() => logo.classList.remove('spin'), 1000);
    }, 5000);
  }

  const quotes = [
    'Mathematics is the language with which God has written the universe. — Galileo Galilei',
    'Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein',
    'Physics is the poetry of nature. — Neil deGrasse Tyson',
    'Science is not only a disciple of reason but, also, one of romance and passion. — Stephen Hawking',
    'Not only is the Universe stranger than we think, it is stranger than we can think. — Werner Heisenberg',
    'In the middle of difficulty lies opportunity. — Albert Einstein'
  ];

  const display = document.getElementById('quoteDisplay');
  if (display) {
    showRandomQuote();
  }

  window.showRandomQuote = function() {
    if (!display) return;
    const idx = Math.floor(Math.random() * quotes.length);
    display.textContent = quotes[idx];
  };
});
