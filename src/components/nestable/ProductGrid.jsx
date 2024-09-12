import React from 'react';
import Product from './Product';
import '@/components/styles/product-grid.css'; 

const ProductGrid = ({ blok, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? blok.products.filter((product) => product.category === selectedCategory)
    : blok.products;

  console.log('Selected category:', selectedCategory);
  console.log('Filtered products:', filteredProducts);

  return (
    <div className="product-grid">
      <div className="grid-container">
        {filteredProducts.map((product) => (
          <Product key={product._uid} blok={product} />
        ))}
      </div>
    </div>
  );
};


export default ProductGrid;
