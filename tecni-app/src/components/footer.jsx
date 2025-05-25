import "react";
import images from "../assets/images";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#203363] text-white p-6 shadow-t-lg shadow-black/50">
      {/* Contenedor principal */}      <div className="flex flex-wrap items-center justify-between max-w-6xl gap-6 mx-auto mt-6">
        {/* Logo y ubicación */}
        <div className="w-full text-center md:w-auto md:text-left">
          <Link to="/">
            <img
              className="w-48 mx-auto md:mx-0 transition-transform hover:scale-105 duration-300"
              src={images.logoBlanco}
              alt="logo tecni-app"
            />
          </Link>
        </div>

        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Tecni-app</h2>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <FaMapMarkerAlt className="text-lg text-white" />
            <span>Cra. 12 # 2E-22, Neiva, Huila</span>
          </div>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <FaPhone className="text-lg text-white" />
            <span>+57 3135728336</span>
          </div>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <FaPhone className="text-lg text-white" />
            <span>+57 3168692497</span>
          </div>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <FaEnvelope className="text-lg text-white" />
            <span>tecniappneiva@gmail.com</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col space-y-4 text-center">
          <h3 className="text-2xl font-semibold">Síguenos</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/share/18886WVF2G/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaFacebook className="text-3xl text-white transition-all duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://www.instagram.com/tecniappneiva?igsh=MXNsYW54bjZzNmFpMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaInstagram className="text-3xl text-white transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Contacto y Enlaces Rápidos */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h3 className="text-xl font-semibold">Enlaces Rápidos</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-yellow-300 transition-colors">Inicio</Link>
            <Link to="/services" className="hover:text-yellow-300 transition-colors">Servicios</Link>
            <Link to="/projects" className="hover:text-yellow-300 transition-colors">Proyectos</Link>
            <Link to="/about" className="hover:text-yellow-300 transition-colors">Nosotros</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contactanos</Link>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Contáctanos</h3>
          <p className="text-sm">
            ¿Tienes alguna pregunta?
            <br />
            ¡Escríbenos por WhatsApp!
          </p>
          <button
                            onClick={() => {
                                const whatsappURL = `https://wa.me/573102944906?text=${encodeURIComponent('Hola, estoy interesado en sus servicios. ¿Podrían brindarme más información?')}`;
                                window.open(whatsappURL, '_blank');
                            }}
                            className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors text-center flex items-center justify-center"
                        >
                            <FaWhatsapp className="mr-2" /> WhatsApp
                        </button>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="mt-8 border-t border-[#2d2d2d] pt-4 text-center text-sm">
        <p>&copy; {Year} TecniApp. Todos los derechos reservados</p>
        <p>Powered by WebFly</p>
      </div>
    </footer>
  );
};
export default Footer;