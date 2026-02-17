
export function getSortedProducts(products, sortBy) {
  const sortedProducts = [...products];
  if (sortBy === 'price-low-high') {
    return sortedProducts.sort((a, b) => a.price - b.price);
  }
  if (sortBy === 'price-high-low') {
    return sortedProducts.sort((a, b) => b.price - a.price);
  }
  if (sortBy === 'name-az') {
    return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === 'rating') {
    return sortedProducts.sort((a, b) => b.rating - a.rating);
  }
  return sortedProducts;
}
