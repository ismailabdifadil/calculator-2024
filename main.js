const resultElm = document.querySelector('.js-result');
let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

resultElm.innerHTML = calculation;

// console.log(calculation);
function updateCalculation(value) {
  if (value === '') {
    calculation = `${value}`;
  } else if (value === '=') {
    calculation = eval(calculation);
  } else {
    calculation += `${value}`;
  }
  localStorage.setItem('calculation', JSON.stringify(calculation));

  resultElm.innerHTML = JSON.parse(localStorage.getItem('calculation'));
}
