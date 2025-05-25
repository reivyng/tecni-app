// Date: 2021/05/17
// Creator: Brayan stid cortes lombana
// Description: va el componente principal de la aplicacion

import  'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import Projects from './pages/projects';
import NavBar from './components/nav';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => (  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
      {/* Botón flotante de WhatsApp disponible en todas las páginas */}
      <WhatsAppButton 
        phoneNumber="+57 3135728336"
        message="¡Hola! Estoy visitando la página web de TECNIApp y me gustaría obtener más información sobre sus servicios."
      />
      
      <Footer />
    </div>
  </Router>
);

export default App;