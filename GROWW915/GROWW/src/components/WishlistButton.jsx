// src/components/WishlistButton.jsx
import React from 'react';

const WishlistButton = ({ isFavorite, onToggle }) => {
  const handleClick = (e) => {
    // Event handling: Prevents the parent card's click handler from firing
    // Stops unwanted navigation to product detail page
    e.stopPropagation(); 
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      title={isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
};

export default WishlistButton;