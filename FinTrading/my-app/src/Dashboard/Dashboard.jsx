import React, { useState } from 'react';
import Header from './header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import { products } from './products';
import ProductCard from './ProductCard';
import SortAndFilter from '../sortAndFilter/SortAndFilter';
import { getSortedProducts } from '../sortAndFilter/SortAndFilterLogic';

function Dashboard() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [sortBy, setSortBy] = useState('default');

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
          <h1>E-commerce Product Catalog</h1>
        </div>
        <button onClick={() => setShowPortfolio(true)}>Portfolio</button>
      </div>
      <SortAndFilter sortBy={sortBy} setSortBy={setSortBy} />
      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {getSortedProducts(products, sortBy).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;