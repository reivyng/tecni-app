import 'react';
import logo from '../assets/logo.jpg'; // Asegúrate de tener esta imagen

const Header = () => (
  <header className="text-center py-10">
    <img src={logo} alt="Logo" className="mx-auto mb-4" />
    <h1 className="text-4xl font-light text-blue-600">TECNIApp</h1>
    <p className="text-lg text-gray-600">Soluciones en Climatización y Refrigeración</p>
  </header>
);

export default Header;