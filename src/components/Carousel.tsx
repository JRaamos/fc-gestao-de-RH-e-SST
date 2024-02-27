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
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    slidesToShow: 3,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider { ...settings }>
      <h3>1</h3>
      <h3>2</h3>
      <h3>3</h3>
      <h3>4</h3>
      <h3>5</h3>
      <h3>6</h3>
    </Slider>
  );
}

export default Carousel;
