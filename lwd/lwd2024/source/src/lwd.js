// src/Carousel.js

import React, { useState, useEffect } from 'react';
import './lwd.css'; // Optional: You can style your carousel in Carousel.css

const Lwd = ({ images, interval = 15000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [progressWidth, setProgressWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to go to the next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
        setNextImageIndex((newIndex + 1) % images.length);
        setProgressWidth(0); // Reset progress bar width
        setIsTransitioning(false);
      }, 300); // 300ms should match CSS transition duration
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
        setNextImageIndex((newIndex + 1) % images.length);
        setProgressWidth(0); // Reset progress bar width
        setIsTransitioning(false);
      }, 300); // 300ms should match CSS transition duration
    }
  };

  // Automatically move to the next slide at a specified interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, interval);

    // Update progress bar width every 100ms
    const progressIntervalId = setInterval(() => {
      setProgressWidth((prevWidth) => {
        const increment = 100 / (interval / 100); // Increase by 100ms
        return Math.min(prevWidth + increment, 100); // Cap at 100% width
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
      clearInterval(progressIntervalId);
    };
  }, [currentImageIndex, interval]);

  return (
    <div className="carousel">
      <div className={`slide ${isTransitioning ? 'transitioning' : ''}`}>
        <img src={process.env.PUBLIC_URL + images[currentImageIndex]} alt="carousel slide"/>
      </div>
      <div className={`slide ${isTransitioning ? 'transitioning' : ''}`}>
        <img src={process.env.PUBLIC_URL + images[nextImageIndex]} alt="carousel slide" />
      </div>
      <div className="timer-bar-container">
        <div className="timer-bar" style={{ width: `${progressWidth}%` }} />
      </div>
      <button className="prev-button" onClick={prevSlide}>&lt;</button>
      <button className="next-button" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Lwd;
