const Footer = () => (
  <footer className="w-full bg-[#203363] text-white py-8 px-4">
    {/* Línea divisoria superior */}
    <div className="w-full border-t border-[#2d2d2d] mb-6"></div>

    {/* Contenedor principal */}
    <div className="flex flex-wrap items-start justify-between max-w-6xl gap-6 mx-auto">
      {/* Logo y ubicación */}
      <div className="flex flex-col space-y-4">
        <img className="w-32 h-auto" src="https://placehold.co/265x71" alt="Logo TecniApp" />
        <div className="flex items-center space-x-2">
          <i className="w-6 h-6 fas fa-map-marker-alt"></i>
          <span>Neiva, Huila</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="w-6 h-6 fas fa-phone-alt"></i>
          <span>+57 3154856987</span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="w-6 h-6 fas fa-envelope"></i>
          <span>tecniapp@gmail.com</span>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-semibold">Síguenos</h3>
        <div className="flex space-x-4">
          <i className="w-10 h-10 fab fa-facebook"></i>
          <i className="w-10 h-10 fab fa-instagram"></i>
        </div>
      </div>

      {/* Contacto */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-semibold">Contáctanos</h3>
        <p className="text-sm">¿Tienes alguna pregunta?<br />¡Escríbenos por WhatsApp!</p>
        <img className="w-16 h-16" src="https://placehold.co/100x100" alt="WhatsApp" />
      </div>
    </div>

    {/* Footer inferior */}
    <div className="mt-6 border-t border-[#2d2d2d] pt-4 text-center text-sm">
      <p>© 2025 TecniApp. Todos los derechos reservados</p>
      <p>Powered by WebFly</p>
    </div>
  </footer>
);

export default Footer;