const repeatFunction = (fn, num) => () => {
  let quantity = num >= 0 ? num : Infinity;

  while (quantity > 0) {
    fn();
    quantity--;
  }
};

module.exports = repeatFunction;
