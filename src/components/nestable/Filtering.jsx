import React from 'react';
import '@/components/styles/filter-grid.css'; 

const Filtering = ({ blok, setSelectedCategory, selectedCategory }) => {
  console.log('Filtering rendering:', { blok, setSelectedCategory, selectedCategory });

  if (!blok.categories) {
    return <div>No categories available</div>;
  }

  return (
    <div className="filter-container">
      {blok.categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'filter-btn active' : 'filter-btn'}
          onClick={() => {
            console.log('Category clicked:', category);
            setSelectedCategory(category);
            console.log('Selected category after click:', category);
          }}
        >
          {category}
        </button>
      ))}
      <button
        className={!selectedCategory ? 'filter-btn active' : 'filter-btn'}
        onClick={() => {
          console.log('Show All clicked');
          setSelectedCategory(null);
          console.log('Selected category after Show All click:', null);
        }}
      >
        Show All
      </button>
    </div>
  );
};

export default Filtering;
