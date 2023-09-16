function checkNumber(num) {
  return num % 2 === 0 && num % 5 === 0;
}

const num = parseInt(prompt("Enter a number."));
alert(checkNumber(num));