function compose(...fn) {
  return (args) => fn.reduce((acc, func) => func(acc), args);
}

module.exports = compose;
