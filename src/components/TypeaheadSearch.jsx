import React, { useState } from 'react';

const TypeaheadSearch = ({ categories }) => {
  const [query, setQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const searchResults = categories.filter(category => 
        category.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(searchResults);
    } else {
      setFilteredCategories([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded"
        placeholder="Search categories..."
        value={query}
        onChange={handleSearch}
      />
      {filteredCategories.length > 0 && (
        <div className="absolute left-0 right-0 bg-white border rounded shadow-lg">
          {filteredCategories.map((category, index) => (
            <div key={index} className="px-4 py-2">{category.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeaheadSearch;
