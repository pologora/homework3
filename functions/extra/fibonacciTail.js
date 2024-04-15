// eslint-disable-next-line no-use-before-define
const fibonacciTale = (num) => go(num);

function go(num, current = 0, next = 1) {
  if (num === 1) return next;

  return go(num - 1, next, current + next);
}

module.exports = fibonacciTale;
