const romanEnum = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToNumber = (romanNumber) => {
  let number = 0;
  for (let i = 0; i < romanNumber.length; i++) {
    if (romanNumber[i] === "I" && romanNumber[i + 1] === "V") {
      number += 4;
      i++;
    } else if (romanNumber[i] === "I" && romanNumber[i + 1] === "X") {
      number += 9;
      i++;
    } else if (romanNumber[i] === "X" && romanNumber[i + 1] === "L") {
      number += 40;
      i++;
    } else if (romanNumber[i] === "X" && romanNumber[i + 1] === "C") {
      number += 90;
      i++;
    } else if (romanNumber[i] === "C" && romanNumber[i + 1] === "D") {
      number += 400;
      i++;
    } else if (romanNumber[i] === "C" && romanNumber[i + 1] === "M") {
      number += 900;
      i++;
    } else {
      number += romanEnum[romanNumber[i]];
    }
  }

  return number;
}

const findRomanNumbers = (string) => {
  const romanNumbers = ["I", "V", "X", "L", "C", "D", "M"];
  const numbersFindOnString = [];
  let romanNumber = "";
  const arr = string.split("");

  arr.map((value) => {
    if (romanNumbers.includes(value)) {
      romanNumber += value;
    } else {
      romanNumber = "";
    }
    numbersFindOnString.push(romanNumber);
  });

  return numbersFindOnString;
}

const getBiggerNumber = (arr) => {
  let romanNumber = "";
  let intNumber = 0;

  arr.map(value => {
    let transformedNumber = romanToNumber(value);
    if (transformedNumber > intNumber) {
      intNumber = transformedNumber;
      romanNumber = value;
    }
  });

  return {
    number: romanNumber,
    value: intNumber,
  }
}

module.exports = {
  romanToNumber,
  findRomanNumbers,
  getBiggerNumber
}
