// src/components/ContactSection.jsx
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio.';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio.';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const whatsappNumber = "573142552132"; // Reemplaza con el número de WhatsApp
      const message = `Hola, mi nombre es ${formData.name}. Mi correo es ${formData.email} y mi teléfono es ${formData.phone}. Mi consulta es: ${formData.message}`;
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank"); // Abrir en una nueva pestaña
      setFormData({ name: '', email: '', phone: '', message: '' }); // Limpiar formulario
      setErrors({}); // Limpiar errores
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center p-12 mt-10 md:mt-40">
      {/* Formulario */}
      <div className="p-10 max-w-9x3 z-10 bg-white rounded-lg shadow-lg md:ml-115 w-200">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <FaUser className="mr-2 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="w-2/4 p-3 rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <div className="mb-4 flex items-center">
            <FaEnvelope className="mr-2 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo"
              className="w-2/4 p-3 rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <div className="mb-4 flex items-center">
            <FaPhone className="mr-2 text-gray-500" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              className="w-2/4 p-3 rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          <div className="mb-4 flex items-start">
            <FaComment className="mr-2 text-gray-500 mt-3" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Deja tu consulta"
              className="w-2/4 p-3 rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
            />
          </div>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          <button
            type="submit"
            className="w-1/3 p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors ml-16"
          >
            Enviar Consulta
          </button>
        </form>
      </div>

      {/* Mapa */}
      <div className="absolute top-0 right-20 md:w-1/4 bg-blue-600 p-5 rounded-lg mt-6 md:mt-0 shadow-lg z-20">
        <h3 className="text-xl font-bold mb-4 text-center text-white">
          Nos ubicamos en: Cra. 12 # 2E-22, Neiva, Huila
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6233545385444!2d-75.28381328959279!3d2.924149354482542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b7470c8844337%3A0x9034b98db963df4a!2sCra.%2012%20%23%202E-22%2C%20Neiva%2C%20Huila!5e0!3m2!1ses-419!2sco!4v1742307239440!5m2!1ses-419!2sco"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación en Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;