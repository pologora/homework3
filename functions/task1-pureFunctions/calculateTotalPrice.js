const sum = (arr) => arr.reduce((acc, i) => acc + i, 0);

const calculateTotalPrice = (products) => sum(products);

module.exports = calculateTotalPrice;
