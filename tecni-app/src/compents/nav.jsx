{/*se importa los estilos del componenete*/}
import './css/nav.css'
// Se importa la libreria de react
import 'react'
// Se exporta el componente Nav;
export const Nav = () => {
    return (
        <nav>
            {/* Contenido del componente Nav */}
            <div className="social-section">
                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                </div>
                <span className="phone-number">320 4155186</span>
                <div className="social-line"></div>
            </div>
            <div className="nav-section">
                <ul className="nav-links">
                    <li className="active">Inicio</li>
                    <li>Contactanos</li>
                    <li>Sobre Nosotros</li>
                    <li>Servicios</li>
                    <li>Proyectos</li>
                </ul>
                <div className="nav-line"></div>
            </div>
        </nav>
    );
};

