const Card = ({ image, title, text }) => {
    return (
      <div className="flex flex-col md:flex-row bg-[#1F3A68] text-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto gap-14">
        {/* Imagen */}
        <img
          src={image}
          alt={title}
          className="w-full md:w-48 h-48 object-cover rounded-lg"
        />
  
        {/* Contenido */}
        <div className="flex flex-wrap md:flex-nowrap flex-1 items-start mt-4 md:mt-0 ">
          {/* Texto */}
          <div className="max-w-full md:max-w-[70%]">
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
  