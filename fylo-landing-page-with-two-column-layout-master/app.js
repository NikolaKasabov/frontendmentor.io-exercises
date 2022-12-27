const form1 = document.querySelector('.form1');
const input1 = form1.querySelector('input');
const error1 = form1.querySelector('.error');
const submitBtn1 = form1.querySelector('button');

const form2 = document.querySelector('.form2');
const input2 = form2.querySelector('input');
const error2 = form2.querySelector('.error');
const submitBtn2 = form2.querySelector('button');

const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

form1.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const inputValue = input1.value;

  if (!emailRegex.test(inputValue)) {
    error1.classList.add('open');
    input1.classList.add('red-border');
  } else {
    error1.classList.remove('open');
    input1.classList.remove('red-border');
    input1.value = '';
  }
});

form2.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const inputValue = input2.value;

  if (!emailRegex.test(inputValue)) {
    error2.classList.add('open');
    input2.classList.add('red-border');
  } else {
    error2.classList.remove('open');
    input2.classList.remove('red-border');
    input2.value = '';
  }
});
