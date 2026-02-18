import React, { useState } from 'react';
import Header from './header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import { products } from './products';
import ProductCard from './ProductCard';
import SortAndFilter from '../sortAndFilter/SortAndFilter';
import Filter from '../sortAndFilter/filter';
import { useCategoryFilter } from '../sortAndFilter/FilterLogic';
import { getSortedProducts } from '../sortAndFilter/SortAndFilterLogic';
import InStockOutStock from '../sortAndFilter/InStockOutStock';
import { useInStockOutStock } from '../sortAndFilter/InStockOutStockLogic';

function Dashboard() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const { selectedCategory, setSelectedCategory, categories } = useCategoryFilter();
  const { showOutOfStock, setShowOutOfStock } = useInStockOutStock(products);

  const userData = {
    profilePic: '/src/assets/profile.png',
    name: 'Aditya',
    age: 21,
    value: '₹2,50,000'
  };

  if (showPortfolio) {
    return (
      <Portfolio
        profilePic={userData.profilePic}
        name={userData.name}
        age={userData.age}
        value={userData.value}
        onBack={() => setShowPortfolio(false)}
      />
    );
  }

  // Filter products by selected category and stock status
  let filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);
  if (!showOutOfStock) {
    filteredProducts = filteredProducts.filter(product => product.inStock !== false);
  }

  return (
    <div>
      <Header />
      <div>
        <h2>Dashboard</h2>
        <img src={userData.profilePic} alt="Profile" />
        <h3>{userData.name}</h3>
        <p>Age: {userData.age}</p>
        <p>Value: {userData.value}</p>
        <div style={{ padding: '20px' }}>
          
        </div>
        <button onClick={() => setShowPortfolio(true)}>Portfolio</button>
      </div>
      <h1>E-commerce Product Catalog</h1>
      {/* Category Filter */}
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      {/* <h1>E-commerce Product Catalog</h1> */}
      <SortAndFilter sortBy={sortBy} setSortBy={setSortBy} />
      {/* In Stock / Out of Stock Filter */}
      <InStockOutStock
        showOutOfStock={showOutOfStock}
        setShowOutOfStock={setShowOutOfStock}
      />
      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {getSortedProducts(filteredProducts, sortBy).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;