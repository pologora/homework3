function lazyMap(arr, fn) {
  const result = [...arr];
  let index = 0;

  function next() {
    result[index] = fn(arr[index]);
    index++;
    return this;
  }

  function value() {
    return result;
  }

  return { next, value };
}

module.exports = lazyMap;
