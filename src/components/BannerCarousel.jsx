import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const BannerCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/9384b37a848c5e60.jpg?q=20" alt="Banner 1" className='w-full h-30'/>
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/48d216e35dbd226f.jpg?q=20" alt="Banner 2" className='w-full h-30'/>
      </div>
      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/78e89d02375d5222.jpg?q=20" alt="Banner 3" className='w-full h-30'/>
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
