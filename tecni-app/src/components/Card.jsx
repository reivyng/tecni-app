import { useState, useEffect } from "react";

const Card = ({ image, image2, title, text, category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  
  // Crear un array de imágenes disponibles
  const images = [image];
  if (image2) images.push(image2);
  
  // Mapeo de categorías a etiquetas en español
  const categoryLabels = {
    'aires': 'Aire Acondicionado',
    'refrigeracion': 'Refrigeración',
    'lavadoras': 'Lavadoras',
    'paneles-solares': 'Energía Solar',
    'electrodomesticos': 'Electrodomésticos'
  };
  
  // Función para navegar a la siguiente imagen
  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  // Función para navegar a la imagen anterior
  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  // Efecto para avanzar automáticamente las imágenes
  useEffect(() => {
    // Solo crear el intervalo si hay más de una imagen y no está pausado
    if (images.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        nextImage();
      }, 3000); // Cambiar cada 3 segundos
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentImageIndex, isPaused, images.length]);
    return (
    <>
      <div className="flex flex-col md:flex-row bg-[#203363] text-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto gap-14">
        {/* Carrusel de imágenes */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="w-full md:w-48 h-70 object-cover rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setShowZoom(true)}
          />
          
          {/* Controles de carrusel - solo mostrar si hay más de una imagen */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-black bg-opacity-50 w-7 h-7 rounded-full flex items-center justify-center text-white hover:bg-opacity-70"
                aria-label="Imagen anterior"
              >
                &#10094;
              </button>
              <button 
                onClick={nextImage}
                className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-black bg-opacity-50 w-7 h-7 rounded-full flex items-center justify-center text-white hover:bg-opacity-70"
                aria-label="Siguiente imagen"
              >
                &#10095;
              </button>
              
              {/* Indicadores de imágenes */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full ${
                      idx === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"
                    }`}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          
          {category && (
            <span className="absolute top-2 left-2 bg-blue-700/80 text-white text-xs px-2 py-1 rounded-full">
              {categoryLabels[category] || category}
            </span>
          )}
        </div>

        {/* Contenido */}
        <div className="flex flex-wrap md:flex-nowrap flex-1 items-start mt-4 md:mt-0 ">
          {/* Texto */}
          <div className="max-w-full md:max-w-[90%]">
            <h2 className="text-lg font-semibold border-b border-white pb-1">
              {title}
            </h2>
            <p className="mt-3 text-sm">{text}</p>
          </div>
        </div>
      </div>
      
      {/* Modal de Zoom */}
      {showZoom && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowZoom(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto">
            <img 
              src={images[currentImageIndex]} 
              alt={title}
              className="max-w-full max-h-[85vh] object-contain"
            />
            
            {/* Botón para cerrar */}
            <button 
              className="absolute top-2 right-2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700"
              onClick={(e) => {
                e.stopPropagation();
                setShowZoom(false);
              }}
              aria-label="Cerrar zoom"
            >
              ×
            </button>
            
            {/* Controles de navegación si hay más de una imagen */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage(e);
                  }}
                  className="bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
                  aria-label="Imagen anterior"
                >
                  &#10094; Anterior
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage(e);
                  }}
                  className="bg-gray-800 bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
                  aria-label="Siguiente imagen"
                >
                  Siguiente &#10095;
                </button>
              </div>
            )}
            
            {/* Indicador de imagen actual */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 bg-gray-800 bg-opacity-70 text-white px-3 py-1 rounded-lg">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
