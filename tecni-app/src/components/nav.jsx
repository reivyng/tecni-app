import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      {/* Navbar fijo */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-white border-b border-gray-300 shadow-md w-full h-20 flex items-center">
        <div className="container flex items-center justify-between mx-auto">
          {/* Redes sociales y teléfono */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-black text-lg">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-black text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <span className="text-black text-lg">320 4155186</span>
          </div>

          {/* Menú de navegación */}
          <div className="flex space-x-12 text-lg">
            {[
              { path: "/", label: "Inicio" },
              { path: "/contact", label: "Contáctanos" },
              { path: "/about", label: "Sobre Nosotros" },
              { path: "/services", label: "Servicios" },
              { path: "/projects", label: "Proyectos" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-black border-b-4 ${
                  location.pathname === item.path
                    ? 'border-blue-500'
                    : 'border-transparent'
                } hover:text-gray-700 hover:border-blue-500`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Espaciador para evitar que el navbar cubra el contenido */}
      <div className="h-20"></div>
    </>
  );
};

export default NavBar;
