import React, { useState } from 'react';

const CategoryItem = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="relative group z-50" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="px-4 py-2 cursor-pointer">{category.name}</div>
      {category.subcategories && isOpen && (
        <div className="absolute left-3/4 bottom-0 m-4 bg-white border shadow-lg ">
          {category.subcategories.map((subcategory, index) => (
            <CategoryItem key={index} category={subcategory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
