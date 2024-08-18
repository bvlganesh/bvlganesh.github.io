// src/Carousel.js

import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './lwd.css'; // Optional: You can style your carousel in Carousel.css

const Lwd = ({ images }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
  };
  
  const onSlide = (eventKey, direction) => {
    if(eventKey == 0){
      console.log("First");
    }

    if(eventKey == 28) {
      console.log("Last");
    }
  }

  return (
    <Carousel indicators={false} nextLabel={`Keep Reading`} prevLabel={`Missed Last one?`} onSlide={onSlide}
      activeIndex={index} onSelect={handleSelect} controls={index == 28 ? false : true}>
      {images.map((image, index) => (
        <Carousel.Item interval={5000}>
          <div className="box">
            <img
              className="d-block box-img"
              src={image}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Lwd;
