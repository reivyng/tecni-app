import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Función para manejar el clic en una imagen
  const handleImageClick = (imageIndex) => {
    // Solo permite ampliar la imagen central (la que está en foco)
    if (imageIndex === index) {
      setSelectedImage(carouselImages[imageIndex]);
      setShowModal(true);
      setIsAutoPlaying(false); // Pausa el carousel cuando el modal está abierto
    }
  };

  // Manejador para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
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
      
      {[index - 1, index, (index + 1) % carouselImages.length].map((i, pos) => {
        const actualIndex = (i + carouselImages.length) % carouselImages.length;
        return (
          <motion.img
            key={i}
            src={carouselImages[actualIndex].src}
            alt={carouselImages[actualIndex].alt}
            className={`rounded-lg cursor-pointer transition-all duration-500 ${
              pos === 1 ? "w-[220px] h-[300px] shadow-xl shadow-yellow-600 hover:scale-110" : "w-25 h-22 opacity-50 hover:opacity-80 hover:scale-105"
            }`}
            animate={{
              scale: pos === 1 ? 1.1 : 0.9,
              opacity: pos === 1 ? 1 : 0.5,
              x: pos === 0 ? -60 : pos === 2 ? 60 : 0
            }}
            whileHover={{
              scale: pos === 1 ? 1.40 : 1.0,
              opacity: pos === 1 ? 1 : 0.7,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            transition={{ duration: 0.3 }}
            onClick={() => handleImageClick(actualIndex)}
          />
        );
      })}
      
      <button 
        onClick={nextImage} 
        className="absolute right-12 z-10 p-2 text-xl text-white bg-blue-900 rounded-full hover:bg-blue-700 transition-colors"
      >
        ❯
      </button>

      {/* Modal para mostrar la imagen ampliada */}
      <AnimatePresence>
        {showModal && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={() => {
              setShowModal(false);
              setIsAutoPlaying(true); // Reanuda el carousel cuando se cierra el modal
            }}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl max-h-full p-4 bg-white rounded-lg"
              onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
            >
              <button
                className="absolute top-2 right-2 p-1 text-xl font-bold text-gray-700 hover:text-black"
                onClick={() => {
                  setShowModal(false);
                  setIsAutoPlaying(true); // Reanuda el carousel cuando se cierra el modal
                }}
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh]" // Limita la altura para pantallas pequeñas
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;