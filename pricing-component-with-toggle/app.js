const toggle = document.getElementById('toggle');
const annualNumbers = document.querySelectorAll('.annual');

toggle.addEventListener('change', ev => {
  const isChecked = ev.target.checked;

  if (isChecked) {
    annualNumbers.forEach(el => el.classList.add('hide'));
  } else {
    annualNumbers.forEach(el => el.classList.remove('hide'));
  }
});
