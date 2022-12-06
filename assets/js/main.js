const button = document.querySelector("#btn");
const buttonClear = document.querySelector("#btn-clear");
const selectorChecker = document.querySelector("#drop-down-menu");

function decimalToBinary() {
  // A method is used to get input value
  let value = document.getElementsByClassName("input-field")[0].value;
  let decimalNumber = value;

  let decimalNumberToBits = [];
  let decimalNumberToBitsStr;

  while (decimalNumber > 0) {
    let currentBit = decimalNumber % 2;
    decimalNumberToBits.push(currentBit);

    decimalNumber = Math.floor(decimalNumber / 2);
  }

  decimalNumberToBitsStr = decimalNumberToBits
    .reverse()
    .reduce((firstNumber, nextNumber) => String(firstNumber) + nextNumber);

  return (document.getElementsByClassName("output-field")[0].value =
    decimalNumberToBitsStr);
}

function binaryToDecimal() {
  let value = document.getElementsByClassName("input-field")[0].value;
  let binaryNumber = String(value);

  let binaryToDecimalArr = [];
  let binaryToDecimalStr = 0;
  let isBinary = true;

  for (let digit of binaryNumber) {
    digit = Number(digit);
    if (digit < 0 || digit > 1) {
      alert('Please provide a binary number')
      isBinary = false;
      break;
    } else {
      binaryToDecimalArr.push(digit);
    }
  }

  for (let i = 0; i < binaryToDecimalArr.length; i++) {
    let currentDigit = Number(binaryToDecimalArr[i]);
    currentDigit =
      currentDigit * Math.pow(2, binaryToDecimalArr.length - 1 - i);
    binaryToDecimalStr += currentDigit;
  }

  if (isBinary) return (document.getElementsByClassName("output-field")[0].value =
    binaryToDecimalStr);
}

button.onclick = (e) => {
  e.preventDefault();

  if (selectorChecker.value === "Decimal-Binary") {
    decimalToBinary();
  } else if (selectorChecker.value === "Binary-Decimal") {
    binaryToDecimal();
  }
};

buttonClear.onclick = (e) => {
  e.preventDefault();

  document.getElementsByClassName("input-field")[0].value = null
  document.getElementsByClassName("output-field")[0].value = null

};
