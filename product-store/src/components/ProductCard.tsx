// src/components/ProductCard.tsx

import type { Product } from "../types/Product";

 
interface ProductCardProps {
  product: Product;
}
 
import { useState } from "react";

function ProductCard({ product }: ProductCardProps) {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <p className="product-category">{product.category}</p>
      <p className="product-title">{product.title}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-rating">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
      <button
        className="show-details-btn"
        onClick={() => setShowDescription((v) => !v)}
      >
        {showDescription ? "Hide Details" : "Show Details"}
      </button>
      {showDescription && (
        <p className="product-description">{product.description}</p>
      )}
    </div>
  );
}
 
export default ProductCard;
