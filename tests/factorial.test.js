/* eslint-disable no-undef */
const calculateFactorial = require('../functions/task4-recursion/calculateFactorial');

describe('Calculate factorial', () => {
  test('should return 0 for factorial 0', () => {
    expect(calculateFactorial(0)).toBe(0);
  });
  test('should return factorial', () => {
    expect(calculateFactorial(5)).toBe(120);
  });
});
