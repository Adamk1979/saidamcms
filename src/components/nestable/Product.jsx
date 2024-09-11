// src/components/nestable/Product.jsx
import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';

const Product = ({ blok }) => {
  if (!blok || !blok.image) {
    return <div>No product data available</div>; // Fallback in case of missing data
  }

  const { image, name, price, size } = blok; // Destructure product data

  return (
    <div className="product" {...storyblokEditable(blok)}>
      {image?.filename && (
        <div className="product__image">
          <img src={image.filename} alt={name || "Product Image"} />
        </div>
      )}
      <div className="product__details">
        <h2>{name}</h2>
        {price && <p>Price: ${price}</p>}
        {size && <p>Size: {size}</p>}
      </div>
    </div>
  );
};

export default Product;
