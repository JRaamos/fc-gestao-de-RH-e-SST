// import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from './CustomNextArrow';
import CustomPrevArrow from './CustomPrevArrow';

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    slidesToShow: 3,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider { ...settings }>
      <img src="" alt="cliente 1" className="h-28 border text-center mx-2 " />
      <img src="" alt="cliente 2" className="h-28 border text-center" />
      <img src="" alt="cliente 3" className="h-28 border text-center mx-2" />
      <img src="" alt="cliente 4" className="h-28 border text-center" />
      <img src="" alt="cliente 5" className="h-28 border text-center mx-2" />
      <img src="" alt="cliente 6" className="h-28 border text-center" />
    </Slider>
  );
}

export default Carousel;
