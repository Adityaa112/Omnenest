// src/hooks/useWishlist.js
import { useState, useEffect } from 'react';

export function useWishlist() {
  // Initialization: Lazy initializer reads from localStorage only once on first mount
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error('Failed to load wishlist:', err);
      return [];
    }
  });

  // Persistence: Automatically saves to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (err) {
      console.error('Failed to save wishlist:', err);
    }
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    // Convert to string to ensure consistent comparison
    const id = String(productId); 
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(String(productId));

  return { wishlist, toggleWishlist, isInWishlist };
}