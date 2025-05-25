import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Control del scroll para añadir sombra cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-b border-gray-300 ${scrolled ? 'shadow-md' : ''} transition-all duration-300 w-full`}>
        <div className="container mx-auto">
          {/* Versión móvil */}
          <div className="flex items-center justify-between md:hidden">            <div className="flex items-center space-x-4">
              <Link to="/contact" className="text-[#203363] text-lg" aria-label="Facebook">
                <FaFacebook />
              </Link>
              <Link to="/contact" className="text-[#203363] text-lg" aria-label="Instagram">
                <FaInstagram />
              </Link>
            </div>
            <a href="tel:3204155186" className="flex items-center text-[#203363] text-lg">
              <FaPhone className="mr-1" size={14} />
              <span className="text-sm">320 4155186</span>
            </a>
            <button 
              className="text-[#203363] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menú"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Menú desplegable para móvil */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`p-2 rounded text-center ${location.pathname === '/' ? 'bg-blue-50 text-[#203363] font-semibold' : 'text-gray-700'}`}
              >
                Inicio
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`p-2 rounded text-center ${location.pathname === '/contact' ? 'bg-blue-50 text-[#203363] font-semibold' : 'text-gray-700'}`}
              >
                Contáctanos
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className={`p-2 rounded text-center ${location.pathname === '/about' ? 'bg-blue-50 text-[#203363] font-semibold' : 'text-gray-700'}`}
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/services" 
                onClick={closeMenu}
                className={`p-2 rounded text-center ${location.pathname === '/services' ? 'bg-blue-50 text-[#203363] font-semibold' : 'text-gray-700'}`}
              >
                Servicios
              </Link>
              <Link 
                to="/projects" 
                onClick={closeMenu}
                className={`p-2 rounded text-center ${location.pathname === '/projects' ? 'bg-blue-50 text-[#203363] font-semibold' : 'text-gray-700'}`}
              >
                Proyectos
              </Link>
            </div>
          </div>

          {/* Versión escritorio */}
          <div className="hidden md:flex md:items-center md:justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-[#203363] text-lg" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#203363] text-lg" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="tel:3204155186" className="text-[#203363] text-lg">
                320 4155186
              </a>
            </div>
            <div className="flex space-x-8 text-lg">
              <Link to="/" className={`text-black border-b-2 ${location.pathname === '/' ? 'border-[#203363] text-[#203363] font-medium' : 'border-transparent'} hover:text-[#203363] hover:border-[#203363] transition-all`}>Inicio</Link>
              <Link to="/contact" className={`text-black border-b-2 ${location.pathname === '/contact' ? 'border-[#203363] text-[#203363] font-medium' : 'border-transparent'} hover:text-[#203363] hover:border-[#203363] transition-all`}>Contáctanos</Link>
              <Link to="/about" className={`text-black border-b-2 ${location.pathname === '/about' ? 'border-[#203363] text-[#203363] font-medium' : 'border-transparent'} hover:text-[#203363] hover:border-[#203363] transition-all`}>Sobre Nosotros</Link>
              <Link to="/services" className={`text-black border-b-2 ${location.pathname === '/services' ? 'border-[#203363] text-[#203363] font-medium' : 'border-transparent'} hover:text-[#203363] hover:border-[#203363] transition-all`}>Servicios</Link>
              <Link to="/projects" className={`text-black border-b-2 ${location.pathname === '/projects' ? 'border-[#203363] text-[#203363] font-medium' : 'border-transparent'} hover:text-[#203363] hover:border-[#203363] transition-all`}>Proyectos</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Espaciador que empuja el contenido hacia abajo para evitar que quede debajo del navbar */}
      <div className="pt-20 md:pt-24"></div>
    </>
  );
};

export default NavBar;
