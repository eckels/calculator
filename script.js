var number1 = '0';
var number2 = '0';
var counter = 0;
var action;

function setInteger(value) {
  console.log(value);

  if (counter === 1) {
    if (number2 != '0') {
      number2 = number2 + value;
    }
    if (number2 === '0') {
      number2 = value;
    }
  document.getElementById('display').innerHTML = number2;
  }

  if (counter === 0) {
    if (number1 != '0' && counter === 0) {
      number1 = number1 + value;
    }
    if (number1 === '0' && counter === 0) {
      number1 = value;
    }
  document.getElementById('display').innerHTML = number1;
  }

}

function numberAction(proci) {
  if (counter === 1) {
    alert('you already picked what you want to do to the numbers, you can either hit clear to reset or just continue with your current equation');
  }
  number1 = parseInt(number1);
  console.log(number1);
  counter = 1;
  action = proci;
  console.log(action);
}

function calculate() {
  number2 = parseInt(number2);
  console.log(number2);
  if (counter === 1 && number2 !== 0) {
    if (action === 'addition') {
      number1 = number1 + number2;
    }
    if (action === 'subtraction') {
      number1 = number1 - number2;
    }
    if (action === 'multiplication') {
      number1 = number1 * number2;
    }
    if (action === 'division') {
      number1 = number1 / number2;
    }
    document.getElementById('display').innerHTML = number1;
    number2 = '0';
    action = null;
    counter = 0;
  }
}

function clearAll() {
  number1 = '0';
  number2 = '0';
  counter = 0;
  action = null;
  document.getElementById('display').innerHTML = 0;
}
