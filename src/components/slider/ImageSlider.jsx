import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useSwipeable } from 'react-swipeable';
import { useSwipeable } from 'react-swipeable';
import './ImageSlider.css';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=5')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div {...swipeHandlers} className="slider-container">
      {images.length > 0 && (
        <>
          <img
            src={images[currentIndex].download_url}
            alt="Slide"
            className="slider-image"
          />

          <div className="slider-caption">
            Photo by {images[currentIndex].author}
          </div>

          <button onClick={prevSlide} className="slider-button prev">
            <ChevronLeft size={24} />
          </button>

          <button onClick={nextSlide} className="slider-button next">
            <ChevronRight size={24} />
          </button>

          <div className="slider-pagination">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
