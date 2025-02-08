import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-carousel">
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`carousel ${currentIndex}`}
      />
    </div>
  );
};

export default ImageCarousel;
