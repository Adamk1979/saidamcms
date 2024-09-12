// src/components/nestable/ProductGrid.jsx
import React from 'react';
import Product from './Product';
import '@/components/styles/product-grid.css'; // Ensure the styles are connected

const ProductGrid = ({ blok, selectedCategory }) => {
  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? blok.products.filter((product) => product.category === selectedCategory)
    : blok.products; // Show all products if no category is selected

  return (
    <div className="product-grid">
      {/* Product grid */}
      <div className="grid-container">
        {filteredProducts.map((product) => (
          <Product key={product._uid} blok={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
