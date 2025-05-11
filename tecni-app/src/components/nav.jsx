import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-white border-b border-gray-300 shadow-md w-full">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-black text-lg">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-black text-lg">
            <i className="fab fa-instagram"></i>
          </a>
          <span className="text-black text-lg">320 4155186</span>
        </div>
        <div className="flex space-x-12 text-lg">
          <Link to="/" className={`text-black border-b-4 ${location.pathname === '/' ? 'border-blue-500' : 'border-transparent'} hover:text-gray-700 hover:border-blue-500`}>Inicio</Link>
          <Link to="/contact" className={`text-black border-b-4 ${location.pathname === '/contact' ? 'border-blue-500' : 'border-transparent'} hover:text-gray-700 hover:border-blue-500`}>Contáctanos</Link>
          <Link to="/about" className={`text-black border-b-4 ${location.pathname === '/about' ? 'border-blue-500' : 'border-transparent'} hover:text-gray-700 hover:border-blue-500`}>Sobre Nosotros</Link>
          <Link to="/services" className={`text-black border-b-4 ${location.pathname === '/services' ? 'border-blue-500' : 'border-transparent'} hover:text-gray-700 hover:border-blue-500`}>Servicios</Link>
          <Link to="/projects" className={`text-black border-b-4 ${location.pathname === '/projects' ? 'border-blue-500' : 'border-transparent'} hover:text-gray-700 hover:border-blue-500`}>Proyectos</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
