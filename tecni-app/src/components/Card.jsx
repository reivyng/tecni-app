const Card = ({ image, title, text, category }) => {
  // Verificar si la imagen es una URL externa o un recurso local
  const isExternalImage = typeof image === 'string' && (image.startsWith('http://') || image.startsWith('https://'));
  
  // Mapeo de categorías a etiquetas en español
  const categoryLabels = {
    'aires': 'Aire Acondicionado',
    'refrigeracion': 'Refrigeración',
    'lavadoras': 'Lavadoras',
    'paneles-solares': 'Energía Solar',
    'electrodomesticos': 'Electrodomésticos'
  };
  
  return (
    <div className="flex flex-col md:flex-row bg-[#1F3A68] text-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto gap-14">
      {/* Imagen */}
      <div className="relative">
        {isExternalImage ? (
          <img
            src={image}
            alt={title}
            className="w-full md:w-48 h-48 object-cover rounded-lg"
            loading="lazy"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full md:w-48 h-48 object-cover rounded-lg"
          />
        )}
        
        {category && (
          <span className="absolute top-2 left-2 bg-blue-900/80 text-white text-xs px-2 py-1 rounded-full">
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
  );
};

export default Card;
  