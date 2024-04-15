function fibonacciGenerator() {
  let first = 0;
  let second = 1;

  function next() {
    [first, second] = [second, first + second];
    return this;
  }

  function value() {
    return first;
  }

  return { next, value };
}

module.exports = fibonacciGenerator;
