import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const WhatsAppButton = ({ phoneNumber, message, className, position = 'fixed' }) => {
  const [showOptions, setShowOptions] = useState(false);
  const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber.substring(1) : phoneNumber;
  
  const handleDirectClick = () => {
    const encodedMessage = encodeURIComponent(message || '¡Hola! Me gustaría información sobre los servicios de TECNIApp');
    const whatsappURL = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };
  
  const handleOptionClick = (optionMessage) => {
    const encodedMessage = encodeURIComponent(optionMessage);
    const whatsappURL = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setShowOptions(false);
  };

  const defaultClassName = `flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${className || ''}`;
  
  // Diferentes estilos según la posición
  const positionStyles = {
    fixed: 'fixed bottom-6 right-6 z-50',
    static: ''
  };
  
  // Opciones predefinidas de mensajes
  const options = [
    {
      text: "Información sobre servicios",
      message: "¡Hola! Me gustaría obtener más información sobre sus servicios."
    },
    {
      text: "Solicitar presupuesto",
      message: "¡Hola! Me gustaría solicitar un presupuesto para un servicio técnico."
    },
    {
      text: "Programar visita técnica",
      message: "¡Hola! Necesito programar una visita técnica para revisar un equipo."
    },
    {
      text: "Preguntar por repuestos",
      message: "¡Hola! Quisiera consultar sobre la disponibilidad de repuestos."
    }
  ];

  return (
    <>
      <button 
        onClick={() => setShowOptions(!showOptions)} 
        className={`${defaultClassName} ${positionStyles[position]}`}
        aria-label="Contactar por WhatsApp"
      >
        {showOptions ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaWhatsapp className="text-2xl" />
        )}
      </button>
      
      <AnimatePresence>
        {showOptions && (
          <motion.div 
            className={`${position === 'fixed' ? 'fixed bottom-20 right-6' : 'absolute bottom-full right-0 mb-2'} z-50 w-64`}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-green-500 p-3 text-white font-medium flex items-center gap-2">
                <FaWhatsapp />
                <span>Chatea con nosotros</span>
              </div>
              
              <div className="p-3">
                <p className="text-sm text-gray-600 mb-2">Hola, ¿cómo podemos ayudarte?</p>
                
                <div className="space-y-2">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-3 py-2 hover:bg-green-50 text-green-800 rounded-md text-sm transition-colors flex items-center"
                      onClick={() => handleOptionClick(option.message)}
                    >
                      <FaWhatsapp className="text-green-500 mr-2" />
                      {option.text}
                    </button>
                  ))}
                  
                  <button
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors mt-3"
                    onClick={handleDirectClick}
                  >
                    Mensaje personalizado
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.oneOf(['fixed', 'static'])
};

export default WhatsAppButton;
