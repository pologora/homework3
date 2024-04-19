/* eslint-disable function-paren-newline */

function calculateDiscountedPrice(products, discount) {
  return products.map((product) => ({
    ...product,
    price: parseFloat((product.price * ((100 - discount) / 100)).toFixed(2)),
  }));
}

module.exports = calculateDiscountedPrice;
