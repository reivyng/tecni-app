import  'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-white border-b border-gray-300">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-4 ">
          <a href="#" className="text-black">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-black">
            <i className="fab fa-instagram"></i>
          </a>
          <span className="text-black ">320 4155186</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-black border-b-2 border-transparent hover:text-gray-700 hover:border-gray-700">Inicio</Link>
          <Link to="/contact" className="text-black border-b-2 border-transparent hover:text-gray-700 hover:border-gray-700">Contactanos</Link>
          <Link to="/about" className="text-black border-b-2 border-transparent hover:text-gray-700 hover:border-gray-700">Sobre Nosotros</Link>
          <Link to="/services" className="text-black border-b-2 border-transparent hover:text-gray-700 hover:border-gray-700">Servicios</Link>
          <Link to="/projects" className="text-black border-b-2 border-transparent hover:text-gray-700 hover:border-gray-700">Proyectos</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;