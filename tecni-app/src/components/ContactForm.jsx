// src/components/ContactForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaWhatsapp, FaTools, FaSolarPanel, FaSnowflake } from 'react-icons/fa';

const ContactForm = ({ 
  whatsappNumber = "573135728336", // Cambiado al nuevo número
  title = "Formulario de Contacto", 
  showSidebar = true, 
  customStyles = {} 
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Función para validar email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Función para validar teléfono colombiano
  const isValidPhone = (phone) => {
    // Acepta formatos: +573123456789, 3123456789, etc.
    const phoneRegex = /^(\+?57)?[3][0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(false);
    setLoading(true);
    
    // Validar formulario - campos obligatorios
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.servicio || !formData.mensaje) {
      setFormError('Por favor, completa todos los campos del formulario.');
      setLoading(false);
      return;
    }
    
    // Validar formato de email
    if (!isValidEmail(formData.email)) {
      setFormError('Por favor, ingresa una dirección de correo electrónico válida.');
      setLoading(false);
      return;
    }
    
    // Validar formato de teléfono
    if (!isValidPhone(formData.telefono)) {
      setFormError('Por favor, ingresa un número de teléfono móvil válido (10 dígitos).');
      setLoading(false);
      return;
    }
    
    // Simulamos un tiempo de procesamiento para mejorar la UX
    setTimeout(() => {
      try {
        // Formatear mensaje con los datos del formulario
        const mensaje = `*¡Nueva solicitud desde el sitio web!*%0A%0A*Nombre:* ${formData.nombre}%0A*Email:* ${formData.email}%0A*Teléfono:* ${formData.telefono}%0A*Servicio:* ${formData.servicio}%0A%0A*Mensaje:*%0A${formData.mensaje}%0A%0A*Enviado desde:* Formulario Web TECNIApp`;
        
        // URL de la API de WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
        
        // Abrir WhatsApp en nueva pestaña
        window.open(whatsappURL, '_blank');
        
        // Indicar éxito y limpiar formulario
        setFormSuccess(true);
        setLoading(false);
        
        // Limpiar formulario después de enviar
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicio: '',
          mensaje: ''
        });
        
        setFormError('');
        
        // Mostrar mensaje de éxito durante 5 segundos
        setTimeout(() => {
          setFormSuccess(false);
        }, 5000);
        
      } catch (error) {
        console.error("Error al abrir WhatsApp:", error);
        setFormError('Hubo un problema al intentar abrir WhatsApp. Por favor, inténtalo nuevamente.');
        setLoading(false);
      }
    }, 800); // Simulamos un pequeño delay para mejor experiencia de usuario
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      style={customStyles}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {showSidebar && (
          <div className="p-8 bg-[#203363] md:col-span-1 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Solicita tu presupuesto</h2>
              <p className="mb-8">Completa el formulario y nuestro equipo técnico te contactará a la brevedad para ofrecerte una solución personalizada.</p>
              
              <div className="flex items-start mb-4">
                <FaTools className="mr-3 text-yellow-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Refrigeriación Industrial</h3>
                  <p className="text-gray-300">Enfriamiento industrial eficiente y duradero</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <FaSnowflake className="mr-3 text-yellow-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Aires Acondicionados</h3>
                  <p className="text-gray-300">Instalación y mantenimiento de climatización</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaSolarPanel className="mr-3 text-yellow-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Sistema Electrico</h3>
                  <p className="text-gray-300">Instalación y reparación eléctrica segura</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-700">
              <p>TECNIApp - Tecnología a tu servicio</p>
            </div>
          </div>
        )}
        
        <div className={`p-8 ${showSidebar ? 'md:col-span-2' : 'md:col-span-3'}`}>
          <h2 className="text-2xl font-bold text-[#203363] mb-6">{title}</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <input 
                  type="text" 
                  id="nombre" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu número de teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">Servicio que necesitas</label>
                <select 
                  id="servicio" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Aire Acondicionado">Refrigeración Industrial</option>
                  <option value="Refrigeración">Refrigeración Comercial</option>
                  <option value="Lavadoras">Refrigeración Domestica</option>
                  <option value="Paneles Solares">Electricidad y Electrónica</option>
                  <option value="Otros Electrodomésticos">Asesoría Técnica y Venta de Repuestos</option>                  
                  <option value="Otros Electrodomésticos">Planes de mantenimiento.</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea 
                id="mensaje" 
                rows="4" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe brevemente tu necesidad o problema técnico..."
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className={`flex items-center justify-center bg-[#203363] text-white py-3 px-6 rounded-md hover:bg-[#152547] transition-colors w-full md:w-auto ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </>
              ) : (
                <div className="flex items-center">
                  <span>Enviar a WhatsApp</span>
                  <FaWhatsapp className="ml-2" />
                </div>
              )}
            </button>

            {formError && (
              <p className="mt-3 text-red-600 text-sm">{formError}</p>
            )}
            
            {formSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              >
                <span className="block sm:inline">¡Solicitud enviada con éxito! Se abrirá una ventana de WhatsApp para continuar la conversación.</span>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

ContactForm.propTypes = {
  whatsappNumber: PropTypes.string,
  title: PropTypes.string,
  showSidebar: PropTypes.bool,
  customStyles: PropTypes.object
};

export default ContactForm;
