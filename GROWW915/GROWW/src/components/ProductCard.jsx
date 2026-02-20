// src/components/ProductCard.jsx
import React from 'react';
import WishlistButton from './WishlistButton';
import { useToggle } from '../hooks/useToggle';

function ProductCard({ product, onViewDetails, isFavorite, onToggleWishlist }) {
  const [showDesc, toggleDesc] = useToggle(false);

  return (
    <div 
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        background: 'white',
        cursor: 'pointer',
        position: 'relative',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onClick={() => onViewDetails(product.id)}
    >
      {/* ❤️ Wishlist Button */}
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}>
        <WishlistButton 
          isFavorite={isFavorite} 
          onToggle={onToggleWishlist} 
        />
      </div>

      {/* 🖼 Product Image */}
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
          marginBottom: '10px'
        }}
      />

      {/* 🏷 Title */}
        <h3 style={{
          fontSize: '14px',
          margin: '0 0 10px 0',
          wordBreak: 'break-word',
          whiteSpace: 'normal',
          minHeight: '40px',
          lineHeight: '1.2',
          // Remove fixed height and overflow
        }}>
          {product.title}
        </h3>

      {/* ⭐ Rating */}
      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: '#ff9900' }}>
          {'★'.repeat(Math.floor(product.rating.rate))}
        </span>
        <span style={{ marginLeft: '5px', fontSize: '12px', color: '#666' }}>
          ({product.rating.count})
        </span>
      </div>

      {/* 💰 Price */}
      <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#0066cc',
        margin: 0
      }}>
        ${product.price}
      </p>

      {/* 🔽 Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          toggleDesc();
        }}
        style={{
          marginTop: '10px',
          background: 'none',
          border: 'none',
          color: '#0066cc',
          cursor: 'pointer',
          padding: 0,
          fontSize: '13px'
        }}
      >
        {showDesc ? '▲ Hide Description' : '▼ Show Description'}
      </button>

      {/* 📄 Description */}
      {showDesc && (
        <div style={{
          marginTop: '10px',
          fontSize: '13px',
          color: '#333',
          wordBreak: 'break-word',
          whiteSpace: 'normal',
          lineHeight: '1.4',
        }}>
          {product.description}
        </div>
      )}
    </div>
  );
}

export default ProductCard;