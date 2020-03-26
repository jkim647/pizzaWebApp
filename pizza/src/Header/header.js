import React, { useState, useEffect } from "react";
import pic_1 from '../img/pizza_header_3.jpg'
import pic_2 from '../img/pizza_header_2.jpg'
import './header.css';
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic_1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {pic_2}
          alt="Second slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel