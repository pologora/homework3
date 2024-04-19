/* eslint-disable no-undef */
const createCounter = require('../functions/task3-closure/createCounter');

const counter = createCounter();

describe('Counter count :)', () => {
  test('should return 1 if call ones', () => {
    expect(counter()).toBe(1);
  });
  test('should return 3 if call 3 times', () => {
    const counter2 = createCounter();
    counter2();
    counter2();
    const count = counter2();
    expect(count).toBe(3);
  });
});
