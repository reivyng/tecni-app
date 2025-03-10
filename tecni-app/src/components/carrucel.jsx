import { useState, useEffect } from 'react';
import  'react';


const SimpleImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-scroll functionality - change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Main image container */}
      <div className="relative h-64 overflow-hidden rounded-lg md:h-80">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt || `Imagen ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
        
        {/* Side navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute z-20 p-2 transform -translate-y-1/2 rounded-full shadow-md left-2 top-1/2 bg-white/70 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute z-20 p-2 transform -translate-y-1/2 rounded-full shadow-md right-2 top-1/2 bg-white/70 hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SimpleImageCarousel;