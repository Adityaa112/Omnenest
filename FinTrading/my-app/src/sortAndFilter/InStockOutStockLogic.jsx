import { useState } from 'react';

export function useInStockOutStock(products) {
	const [showOutOfStock, setShowOutOfStock] = useState(false);
	const filteredProducts = showOutOfStock
		? products
		: products.filter(product => product.inStock !== false);
	return {
		showOutOfStock,
		setShowOutOfStock,
		filteredProducts
	};
}
