import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import CategoryList from './CategoryList';
import categoriesData from './categories.json';

const NavBar = () => {
  const [categories] = useState(categoriesData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterCategories = (query) => {
    if (!query) return categories;
    return categories.map(category => {
      const { subcategories, ...restCategory } = category;
      const filteredSubcategories = subcategories?.filter(subcategory => 
        subcategory.name.toLowerCase().includes(query.toLowerCase()) ||
        subcategory.subcategories?.some(subSub => subSub.name.toLowerCase().includes(query.toLowerCase()))
      );
      return {
        ...restCategory,
        subcategories: filteredSubcategories?.length > 0 ? filteredSubcategories : undefined,
      };
    }).filter(category => 
      category.name.toLowerCase().includes(query.toLowerCase()) ||
      category.subcategories
    );
  };

  const filteredCategories = filterCategories(searchQuery);

  return (
    <div className="bg-white shadow-lg z-30">
      {/* Mobile View */}
      <div className="md:hidden container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <FaBars className="h-8 w-8 mr-4" />
          <img src="https://asset.brandfetch.io/idWdImNSUt/id8QxyjDqY.svg" alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center space-x-4">
          <div className='flex items-center p-2'>
            <CgProfile className='h-7 w-6'/>
            <p className='p-2'>Login</p>
          </div>
          <div className='flex items-center p-2'>
            <BsCart className='h-7 w-6'/>
            <p className='p-2'>Cart</p>
          </div>
        </div>
      </div>
      <div className="md:hidden container mx-auto px-4 py-2">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded"
          placeholder="Search for Products, Brands and More"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:flex container mx-auto px-4 py-2 items-center justify-between">
        <div className="flex items-center">
          <img src="https://asset.brandfetch.io/idWdImNSUt/id8QxyjDqY.svg" alt="Logo" className="h-8 mr-4" />
          <input
            type="text"
            className="px-4 py-2 border rounded"
            placeholder="Search for Products, Brands and More"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className='flex items-center p-2'>
            <CgProfile className='h-7 w-6'/>
            <p className='p-2'>Login</p>
          </div>
          <div className='flex items-center p-2'>
            <BsCart className='h-7 w-6'/>
            <p className='p-2'>Cart</p>
          </div>
          <div className='flex items-center justify-center p-2'>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" className='h-7 w-6' alt='seller'/>
            <p className='p-2'>Become a Seller</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-2">
        <CategoryList categories={filteredCategories} />
      </div>
    </div>
  );
};

export default NavBar;
