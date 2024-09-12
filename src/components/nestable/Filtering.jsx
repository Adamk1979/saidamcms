// src/components/nestable/Filtering.jsx
import React from 'react';
import '@/components/styles/filter-grid.css'; // Ensure the correct CSS path

const Filtering = ({ blok, setSelectedCategory, selectedCategory }) => {
    if (!blok.categories) {
      return <div>No categories available</div>;
    }
  
    return (
      <div className="filter-container">
        {blok.categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory(category)} // Set the selected category on click
          >
            {category}
          </button>
        ))}
        <button
          className={!selectedCategory ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory(null)} // Show all products
        >
          Show All
        </button>
      </div>
    );
  };
  
  export default Filtering;
