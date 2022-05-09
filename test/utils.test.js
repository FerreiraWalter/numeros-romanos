const { romanToNumber, findRomanNumbers, getBiggerNumber } = require("../src/utils");

describe('Roman numbers', () => {
  test('should return an integer transformed by the function romanToNumber', () => {
    const romanNumber = 'IX';
    const result = romanToNumber(romanNumber);

    expect(result).toBeDefined();
    expect(typeof result).toBe("number");
    expect(result).toBe(9);
  });

  test('should return Nan if the input was invalid value', () => {
    const romanNumber = 'invalid_number';
    const result = romanToNumber(romanNumber);

    expect(result).toBe(NaN);
  });

  test('should return a array of roman numerals found', () => {
    const text = 'AIXBIVH';
    const result = findRomanNumbers(text);

    expect(Array.isArray(result)).toBe(true)
    expect(result).toContain('IX');
    expect(result).toContain('IV');
  });

  test('should return the largest roman number in the array', () => {
    const array = ['XX', 'LX'];
    const result = getBiggerNumber(array);

    expect(typeof result).toBe("object");
    expect(result).toEqual({ number: 'LX', value: 60 });
  });
});
