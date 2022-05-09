const { findRomanNumbers, getBiggerNumber } = require("../utils");

class ConvertRomanNumeralsService {
  execute({ text }) {
    const foundRomanNumerals = findRomanNumbers(text);
    const higherNumber = getBiggerNumber(foundRomanNumerals);

    return higherNumber;
  }
}

module.exports = ConvertRomanNumeralsService;
