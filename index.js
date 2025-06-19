// Scripts specific to the homepage

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    setTimeout(() => hero.classList.add('fade-in'), 500);
  }

  const logo = document.querySelector('.logo');
  if (logo) {
    setInterval(() => {
      logo.classList.add('spin');
      setTimeout(() => logo.classList.remove('spin'), 1000);
    }, 5000);
  }
});

function solveQuadratic() {
  const a = parseFloat(document.getElementById('coefA').value);
  const b = parseFloat(document.getElementById('coefB').value);
  const c = parseFloat(document.getElementById('coefC').value);
  const resultEl = document.getElementById('quadResult');

  if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    resultEl.textContent = 'Please enter valid coefficients (a cannot be 0).';
    return;
  }

  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    resultEl.textContent = 'No real roots';
    return;
  }

  const sqrtDisc = Math.sqrt(discriminant);
  const x1 = (-b + sqrtDisc) / (2 * a);
  const x2 = (-b - sqrtDisc) / (2 * a);
  resultEl.textContent = `x = ${x1.toFixed(2)}, x = ${x2.toFixed(2)}`;
}

function calcHypotenuse() {
  const a = parseFloat(document.getElementById('sideA').value);
  const b = parseFloat(document.getElementById('sideB').value);
  const resultEl = document.getElementById('pythResult');

  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    resultEl.textContent = 'Enter positive values for a and b.';
    return;
  }

  const c = Math.sqrt(a * a + b * b);
  resultEl.textContent = `c = ${c.toFixed(2)}`;
}
