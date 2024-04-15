function calculateDiscountedPrice(products, discount) {
  return products.map((product) =>
    parseFloat((product * ((100 - discount) / 100)).toFixed(2))
  );
}

module.exports = calculateDiscountedPrice;
