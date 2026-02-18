import { useState } from 'react';
import { products } from '../Dashboard/products';

export function useCategoryFilter() {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const categories = ['all', ...new Set(products.map(p => p.category))];
	return {
		selectedCategory,
		setSelectedCategory,
		categories
	};
}
