import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import type { Product } from './types/Product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>(["all"]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then((data: string[]) => {
        setCategories(["all", ...data]);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const url =
      selectedCategory === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${encodeURIComponent(selectedCategory)}`;
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  if (isLoading) {
    return (
      <div className="app-container">
        <h1 className="store-title">🛒 Product Store</h1>
        <div className="products-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-card" />
          ))}
        </div>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  // Filter products by selected category
  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="app-container">
      <h1 className="store-title">🛒 Product Store</h1>
      <div className="product-count">
        Showing {filtered.length} of {products.length} products
      </div>
      <div className="category-filter-wrapper">
        <select
          className="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="products-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;