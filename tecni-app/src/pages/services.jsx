import images from "../assets/images";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

console.log('Imágenes disponibles:', images); // Agrega esto para debuggear


const ServiceCard = ({ title, description, icon, alt, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="bg-white rounded-2xl shadow-md p-6 md:p-8 max-w-4xl mx-auto cursor-pointer"
    >
      <div className="flex items-start gap-4 mb-4">
        <motion.img
          src={icon}
          alt={alt}
          className="w-12 h-12 object-contain"
          whileHover={{ rotate: 12 }}
          transition={{ duration: 0.3 }}
        />
        <h3 className="text-[#0b1f42] text-2xl md:text-3xl font-normal">
          {title}
        </h3>
      </div>
      <p className="text-black text-lg md:text-xl mb-4">
        {description}
      </p>      <div className="flex justify-end items-center">
        <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-800">
          <span className="mr-2 font-medium">Solicitar servicio</span>
          <motion.img
            src={images.flechaDerecha}
            alt="Flecha"
            className="w-8 h-8"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const ContenedorServicios = () => {  const services = [
    {
      title: "Aires acondicionados",
      description: "Servicio completo de instalación, reparación y mantenimiento preventivo de sistemas de aire acondicionado residenciales y comerciales. Trabajamos con todas las marcas y ofrecemos garantía en repuestos y mano de obra.",
      icon: images.termometro,
      alt: "Ícono de termómetro"
    },
    {
      title: "Refrigeración",
      description: "Mantenimiento especializado de neveras, freezers y equipos de refrigeración comercial. Diagnóstico completo, reparación y optimización energética. Servicio técnico para todas las marcas con garantía certificada.",
      icon: images.copoDeNieve,
      alt: "Ícono de copo de nieve"
    },
    {
      title: "Lavadoras",
      description: "Diagnóstico y reparación de lavadoras automáticas. Atendemos fallas en sistemas de carga, desagüe, electrónica y motores. Servicio técnico autorizado para las principales marcas del mercado con repuestos originales.",
      icon: images.lavadora,
      alt: "Ícono de lavadora"
    },
    {
      title: "Paneles Solares",
      description: "Instalación de sistemas fotovoltaicos residenciales y comerciales. Ofrecemos asesoría, diseño personalizado, instalación y mantenimiento de paneles solares. Soluciones que reducen costos energéticos a largo plazo y contribuyen al medio ambiente.",
      icon: images.solarPanels,
      alt: "Ícono de panel solar"
    },
    {
      title: "Electrodomésticos",
      description: "Reparación de pequeños y grandes electrodomésticos. Servicio a domicilio con diagnóstico preciso, reparación efectiva y garantía en todas nuestras intervenciones. Soporte técnico para equipos de todas las marcas.",
      icon: images.rayo,
      alt: "Ícono de rayo"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 pt-12">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-12 md:pt-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#0b1f42] text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Expertos en Reparación y Mantenimiento
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-black text-xl md:text-2xl"
            >
              Soluciones profesionales para tus equipos electrónicos con servicio garantizado
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[500px] overflow-hidden rounded-2xl"
          >
            <motion.img
              src={images.mantenimiento}
              alt="Técnico reparando equipo"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="w-full mt-16 md:mt-24 px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b1f42] text-center mb-12"
          >
            Nuestros Servicios
          </motion.h2>

          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenedorServicios;
