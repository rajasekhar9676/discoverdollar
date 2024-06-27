import React from 'react';
import NavBar from './NavBar';
import ProductShowcase from './ProductShowcase';
import BannerCarousel from './BannerCarousel';
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <BannerCarousel/>
      </div>
      <ProductShowcase />
    </div>
  );
};

export default HomePage;
