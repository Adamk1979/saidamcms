import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (onSearch) {
      onSearch(newQuery);
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
