// script.js

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('bogoForm');
  const totalPriceEl = document.getElementById('totalPrice');
  const variant2 = document.querySelector('.variants-2');
  const variant3 = document.querySelector('.variants-3');
  const radioButtons = form.querySelectorAll('input[name="units"]');

  function updateUI() {
    const selected = form.querySelector('input[name="units"]:checked');
    const units = parseInt(selected.value, 10);
    const price = selected.getAttribute('data-price');
    totalPriceEl.textContent = `$${price}.00 USD`;

    // show/hide variant sections
    if (units === 2) {
      variant2.style.display = 'block';
    } else {
      variant2.style.display = 'none';
    }
    if (units === 3) {
      variant3.style.display = 'block';
    } else {
      variant3.style.display = 'none';
    }
  }

  radioButtons.forEach(r => {
    r.addEventListener('change', function() {
      updateUI();
    });
  });

  // initialize
  updateUI();
});
