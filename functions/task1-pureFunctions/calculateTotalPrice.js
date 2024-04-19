const calculateTotalPrice = (products) =>
  products.reduce((acc, product) => acc + product.price, 0);

module.exports = calculateTotalPrice;
