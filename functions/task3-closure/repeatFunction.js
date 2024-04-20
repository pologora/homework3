const repeatFunction = (fn, num) => {
  let quantity = num >= 0 ? num : Infinity;
  let stopped = false;

  const stop = () => {
    stopped = true;
  };

  const repeat = () => {
    const intervalId = setInterval(() => {
      if (quantity > 0 && !stopped) {
        fn();
        quantity--;
      } else {
        clearInterval(intervalId);
      }
    }, 0);
  };

  return { repeat, stop };
};

module.exports = repeatFunction;
