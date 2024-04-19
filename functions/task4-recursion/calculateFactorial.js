// eslint-disable-next-line no-use-before-define
const calculateFactorial = (num) => go(num);

function go(num, a = 1) {
  if (num === 0) return 0;
  if (num === 1) return a;

  return go(num - 1, a * num);
}

module.exports = calculateFactorial;
