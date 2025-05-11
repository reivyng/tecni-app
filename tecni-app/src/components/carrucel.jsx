import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "../assets/images";

const Carousel = () => {
  // Define las imágenes para el carrusel
  
  const carouselImages = [
    { 
      src: images.publicidad, 
      alt: "Publicidad" 
    },
    { 
      src: images.publicidad2, 
      alt: "Publicidad" 
    },
    { 
      src: images.publicidad3,
      alt: "Publicidad" 
      
    },
    { 
      src: images.publicidad4, 
      alt: "Publicidad" 
    },
    { 
      src: images.publicidad5, 
      alt: "Publicidad" 
    },
    ];

  const [index, setIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  // Efecto para el autoplay
  useEffect(() => {
    let intervalId;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextImage();
      }, 5000); // Cambia cada 5 segundos
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying]);

  // Manejadores para pausar/reanudar en hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div 
      className="relative flex items-center justify-center mt-4 space-x w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        onClick={prevImage} 
        className="absolute z-10 p-2 text-xl text-white bg-blue-900 rounded-full left-12 hover:bg-blue-700 transition-colors"
      >
        ❮
      </button>
      
      {[index - 1, index, (index + 1) % carouselImages.length].map((i, pos) => (
        <motion.img
          key={i}
          src={carouselImages[(i + carouselImages.length) % carouselImages.length].src}
          alt={carouselImages[(i + carouselImages.length) % carouselImages.length].alt}
          className={`rounded-lg cursor-pointer transition-all duration-500 ${
            pos === 1 ? "w-[220px] h-[300px] shadow-xl shadow-yellow-600" : "w-25 h-22 opacity-50"
          }`}
          animate={{
            scale: pos === 1 ? 1.1 : 0.9,
            opacity: pos === 1 ? 1 : 0.5,
            x: pos === 0 ? -60 : pos === 2 ? 60 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
      
      <button 
        onClick={nextImage} 
        className="absolute right-12 z-10 p-2 text-xl text-white bg-blue-900 rounded-full hover:bg-blue-700 transition-colors"
      >
        ❯
      </button>

     
    </div>
  );
};

export default Carousel;