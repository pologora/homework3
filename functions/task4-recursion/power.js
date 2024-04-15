// eslint-disable-next-line no-use-before-define
const power = (base, exponent) => go(base, exponent);

function go(base, exponent, result = 1) {
  if (exponent === 0) return result;

  return go(base, exponent - 1, base * result);
}

module.exports = power;
