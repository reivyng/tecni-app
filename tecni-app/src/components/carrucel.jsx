import { useState } from "react";
import { motion } from "framer-motion";
import images from "../assets/images";

const Carousel = () => {
  // Define las imágenes para el carrusel
  const carouselImages = [
    { 
      src: images.image, 
      alt: "TECNIApp servicio de refrigeración" 
    },
    { 
      src: images.service, 
      alt: "Instalación de aire acondicionado" 
    },
    { 
      src: images.logo, 
      alt: "Mantenimiento de equipos" 
    },
  ];

  const [index, setIndex] = useState(1);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative flex items-center justify-center mt-4 space-x-1 w-80">
      <button onClick={prevImage} className="absolute left-0 z-10 p-2 text-white bg-blue-900 rounded-full">❮</button>
      {[index - 1, index, (index + 1) % carouselImages.length].map((i, pos) => (
        <motion.img
          key={i}
          src={carouselImages[(i + carouselImages.length) % carouselImages.length].src}
          alt={carouselImages[(i + carouselImages.length) % carouselImages.length].alt}
          className={`rounded-lg cursor-pointer transition-all duration-500 ${
            pos === 1 ? "w-40 h-40 border-4 border-blue-900 shadow-xl shadow-blue-500" : "w-28 h-28 opacity-50"
          }`}
          animate={{
            scale: pos === 1 ? 1.2 : 1,
            opacity: pos === 1 ? 1 : 0.5,
            x: pos === 0 ? -40 : pos === 2 ? 40 : 0
          }}
          transition={{ duration: 0.5 }}
        />
      ))}
      <button onClick={nextImage} className="absolute right-0 z-10 p-2 text-white bg-blue-900 rounded-full">❯</button>
    </div>
  );
};

export default Carousel;