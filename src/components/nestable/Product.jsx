import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';

const Product = ({ blok }) => {
  if (!blok || !blok.image) {
    return <div>No product data available</div>;
  }

  const { name, image, price, size } = blok;

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
