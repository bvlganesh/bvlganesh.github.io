// src/App.js

import React from 'react';
import './App.css';
import Lwd from './lwd';

import image1 from './img/pic1.pdf-image-000.jpg';
import image2 from './img/pic1.pdf-image-001.jpg';
import image3 from './img/pic1.pdf-image-002.jpg';
import image4 from './img/pic1.pdf-image-003.jpg';
import image5 from './img/pic1.pdf-image-004.jpg';
import image6 from './img/pic1.pdf-image-005.jpg';
import image7 from './img/pic1.pdf-image-006.jpg';
import image8 from './img/pic1.pdf-image-007.jpg';
import image9 from './img/pic1.pdf-image-008.jpg';
import image10 from './img/pic1.pdf-image-009.jpg';
import image11 from './img/pic1.pdf-image-010.jpg';
import image12 from './img/pic1.pdf-image-011.jpg';
import image13 from './img/pic1.pdf-image-012.jpg';
import image14 from './img/pic1.pdf-image-013.jpg';
import image15 from './img/pic1.pdf-image-014.jpg';
import image16 from './img/pic1.pdf-image-015.jpg';
import image17 from './img/pic1.pdf-image-016.jpg';
import image18 from './img/pic1.pdf-image-017.jpg';
import image19 from './img/pic1.pdf-image-018.jpg';
import image20 from './img/pic1.pdf-image-019.jpg';
import image21 from './img/pic1.pdf-image-020.jpg';
import image22 from './img/pic1.pdf-image-021.jpg';
import image23 from './img/pic1.pdf-image-022.jpg';
import image24 from './img/pic1.pdf-image-023.jpg';
import image25 from './img/pic1.pdf-image-024.jpg';
import image26 from './img/pic1.pdf-image-025.jpg';
import image27 from './img/pic1.pdf-image-026.jpg';
import image28 from './img/pic1.pdf-image-027.jpg';
import image29 from './img/pic1.pdf-image-028.jpg';



function App() {
  const images = [
    image1,image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11,image12, image13, image14, image15, image16, image17, image18, image19, image20,
    image21,image22, image23, image24, image25, image26, image27, image28, image29
  ];

  return (
    <div className="App">
      
      <Lwd images={images} />
    </div>
  );
}

export default App;
