import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import { useProductSearch } from '../hooks/useProductSearch';
import { useWishlist } from '../hooks/useWishlist'; 
function ProductList({ onViewDetails }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Logic from Feature 1
  const { searchTerm, setSearchTerm, filteredProducts, isSearching } = useProductSearch(products);
  
  // Feature 2: Wishlist Logic
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  useEffect(() => {
    setLoading(true);
    const url = selectedCategory === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${selectedCategory}`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  if (loading) return <div style={{ textAlign: 'center', padding: '100px' }}>Loading...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Product Store</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isSearching={isSearching}
      />

      <div style={{ display: 'flex', gap: '12px', marginBottom: '30px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={getBtnStyle(selectedCategory === 'all')}
        >
          All Products
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={getBtnStyle(selectedCategory === cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onViewDetails={onViewDetails}
            // Passing wishlist props down to individual cards
            isFavorite={isInWishlist(product.id)}
            onToggleWishlist={() => toggleWishlist(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

const getBtnStyle = (isActive) => ({
  padding: '8px 24px',
  backgroundColor: isActive ? '#0066cc' : 'white',
  color: isActive ? 'white' : '#0066cc',
  border: '1px solid #0066cc',
  borderRadius: '25px',
  cursor: 'pointer',
  textTransform: 'capitalize',
  fontWeight: isActive ? '600' : '400'
});

export default ProductList;