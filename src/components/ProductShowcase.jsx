import React from 'react';
import airbuds from '../assets/airbuds.jpeg';
import mobile from '../assets/mobile.jpeg';
import tv from '../assets/tv.jpeg';
import laptop from '../assets/laptop.jpeg';

const ProductShowcase = () => {
  return (
    <><div className="container mx-auto px-4 py-8 bg-white shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">Best of Electronics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center border-1">
          <img src="https://i.pinimg.com/736x/35/33/2b/35332b8492779694c80cfa6d6023bb8a.jpg" alt="Airbuds" className="h-48 w-48 object-cover mb-2" />
          <p className="text-center">Noise Bluetooth</p>
          <p className="text-center font-bold">From ₹1,099</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://i.pinimg.com/564x/79/bd/db/79bddb4f254aabfd89fe094b3797ad71.jpg" alt="Mobile" className="h-48 w-48 object-cover mb-2" />
          <p className="text-center">Best Selling Iphone</p>
          <p className="text-center font-bold">From ₹40000*</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://i.pinimg.com/736x/59/a4/ca/59a4ca721b965921f46210a29f205dff.jpg" alt="TV" className="h-48 w-48 object-cover mb-2" />
          <p className="text-center">Sony TV</p>
          <p className="text-center font-bold">From ₹12,999</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://i.pinimg.com/564x/4a/bb/86/4abb8659d4d951a6fefefe401a02aeb7.jpg" alt="Laptop" className="h-48 w-48 object-cover mb-2" />
          <p className="text-center">Best Laptops</p>
          <p className="text-center font-bold">From ₹1,649</p>
        </div>
      </div>
    </div><>
        
        
        <div className="container mx-auto px-4 py-8 bg-white shadow-md w-full">
          <h2 className="text-2xl font-bold mb-4">Best of Fashion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center border-1">
              <img src="https://i.pinimg.com/564x/19/9f/f0/199ff03b1151dbabb1bf429957315eae.jpg" alt="Airbuds" className="h-48 w-48 object-cover mb-2" />
              <p className="text-center">Mens T-shirt</p>
              <p className="text-center font-bold">From ₹299</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.pinimg.com/474x/6f/13/4c/6f134c5750ae35cb2b934b2fb0958849.jpg" alt="Mobile" className="h-48 w-48 object-cover mb-2" />
              <p className="text-center">Mens T-shirts combo</p>
              <p className="text-center font-bold">From ₹199*</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.pinimg.com/474x/e9/c2/25/e9c225891bc3e1f0ce1417eb324dcc73.jpg" alt="TV" className="h-48 w-48 object-cover mb-2" />
              <p className="text-center">Women's T-shirts</p>
              <p className="text-center font-bold">From ₹199</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/ad/b5/c2/adb5c2b1952d7265a5c057e755f2fcef.jpg" alt="Laptop" className="h-48 w-48 object-cover mb-2" />
              <p className="text-center">Women's T-shirts</p>
              <p className="text-center font-bold">From ₹250</p>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 py-8 bg-white shadow-md w-full">
          <h2 className="text-2xl font-bold mb-4">Best of Gadgets & Appliances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center border-1">
              <img src="https://i.pinimg.com/736x/be/aa/96/beaa96c6853cd219e896611bfb8e7d03.jpg" alt="Airbuds" className="h-48 w-48 object-cover mb-2" />
              <p className="text-center">Titan watch</p>
              <p className="text-center font-bold">From ₹2,199</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.pinimg.com/564x/b6/dc/b2/b6dcb270eae6458889dc4f9b3d35cb56.jpg" alt="Mobile" className="h-48 w-48 object-cover mb-2" />
              <p className="text-center">Best Selling Headphones</p>
              <p className="text-center font-bold">From ₹999*</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/25/cd/a5/25cda543b6517e54ba7912a056553b4c.jpg" alt="TV" className="h-48 w-48 object-cover mb-2" />
              <p className="text-center">SMEG Electric kettle </p>
              <p className="text-center font-bold">From ₹12,999</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://i.pinimg.com/474x/7f/70/f8/7f70f85458178d67796b5e528d93802a.jpg" alt="Laptop" className="h-48 w-48 object-cover mb-2" />
              <p className="text-center">Basket Air Fryer</p>
              <p className="text-center font-bold">From ₹1,649</p>
            </div>
          </div>
        </div>
      </></>
  );
};

export default ProductShowcase;
