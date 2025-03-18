import "react";
import images from "../assets/images";

export const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#203363] text-white p-6 shadow-t-lg shadow-black/50">
      {/* Contenedor principal */}
      <div className="flex flex-wrap items-center justify-between max-w-6xl gap-6 mx-auto mt-6">
        {/* Logo y ubicación */}
        <div className="w-full text-center md:w-auto md:text-left">
          <img
            className="w-48 mx-auto md:mx-0"
            src={images.logoBlanco}
            alt="logo tecni-app"
          />
        </div>

        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Tecni-app</h2>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <i className="text-lg text-black fas fa-map-marker-alt"></i>
            <span>Neiva, Huila</span>
          </div>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <i className="text-lg text-black fas fa-phone-alt"></i>
            <span>+57 3154856987</span>
          </div>
          <div className="flex items-center justify-center space-x-2 md:justify-start">
            <i className="text-lg text-black fas fa-envelope"></i>
            <span>tecniapp@gmail.com</span>
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
            >
              <i className="text-3xl text-black transition-all duration-300 fab fa-facebook hover:scale-110"></i>
            </a>
            <a
              href="https://www.instagram.com/tecniappneiva?igsh=MXNsYW54bjZzNmFpMQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-3xl text-black transition-all duration-300 fab fa-instagram hover:scale-110"></i>
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h3 className="text-lg font-semibold">Contáctanos</h3>
          <p className="text-sm">
            ¿Tienes alguna pregunta?
            <br />
            ¡Escríbenos por WhatsApp!
          </p>
          <a
            href="https://qr.me-qr.com/vcjJ3F0k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 p-2 mx-auto transition bg-green-500 rounded-full md:mx-0 hover:bg-green-600"
          >
            <i className="text-3xl fab fa-whatsapp"></i>
          </a>
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