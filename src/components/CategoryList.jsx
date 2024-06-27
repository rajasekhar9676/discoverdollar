import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories }) => {
  return (
    <div className="bg-white border rounded shadow-lg overflow-x-auto z-40">
      <div className="flex justify-between">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={category.image} alt={category.name} className="h-11 w-16 m-2" />
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
