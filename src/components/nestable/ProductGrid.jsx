// src/components/nestable/ProductGrid.jsx
import React from 'react';
import Product from './Product'; // Import the Product component
import '@/components/styles/product-grid.css'; 


const ProductGrid = ({ blok }) => {
  return (
    <div className="product-grid">
      <div className="grid-container">
        {blok.products?.map((product) => (
          <Product key={product._uid} blok={product} /> // Pass each product to the Product component
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
