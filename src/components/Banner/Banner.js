import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/carusol1.jpeg'
import img2 from '../../images/carosul2.jpeg'
import img3 from '../../images/carosol3.jpeg'

const Banner = () => {
    return (
        <div>
            <Carousel  >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="First slide"
      height='400px'
     
    />
    <Carousel.Caption>
      <h3>Sitakundo Chandranath Pahar</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      height='400px'
    />

    <Carousel.Caption>
      <h3>Shylet ,Ratarkul</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
      height='400px'
      
    />

    <Carousel.Caption>
      <h3>Mawa</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Banner;