const fibonacciCache = (num, hashMap = {}) => {
  if (num <= 1) return num;

  if (!hashMap[num]) {
    // eslint-disable-next-line no-param-reassign
    hashMap[num] =
      fibonacciCache(num - 1, hashMap) + fibonacciCache(num - 2, hashMap);
  }

  return hashMap[num];
};

module.exports = fibonacciCache;
