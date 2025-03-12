// Date: 2021/05/17
// Creator: Brayan stid cortes lombana
// Description: va el componente principal de la aplicacion

import  'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';
import Projects from './pages/projects';
import './index.css';
import NavBar from './components/nav';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
      <Footer />
    </div>
  </Router>
);

export default App;