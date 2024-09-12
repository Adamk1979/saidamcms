import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';

const Product = ({ blok }) => {
  if (!blok) {
    return <div>No product data available</div>;
  }

  const { name, image, price, size, link } = blok;

  // Extract the first productlink if available
  const productLink = link && link.length > 0 ? link[0] : null;

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
      
      {productLink && productLink.component === 'productlink' && (
        <div className="product__link">
          <a href={productLink.link.cached_url} className="product-link">
            {productLink.label}
          </a>
        </div>
      )}
    </div>
  );
};

export default Product;
