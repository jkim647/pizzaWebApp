import React from 'react';
import pic_1 from '../img/pizza_header_3.jpg'
import pic_2 from '../img/pizza_header_2.jpg'
import './header.css';
import Carousel from 'react-bootstrap/Carousel'


const Header = () => {
    return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic_1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic_2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

    )
}

export default Header