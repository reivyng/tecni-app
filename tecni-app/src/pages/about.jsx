{/*estructura base*/}
import 'react';
import { Link } from 'react-router-dom';



const About = () => {
    return (
        <div>
           
            {/* contenido principal */}
            <main>
                <h1>Bienvenido a mi sitio web</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero at neque tincidunt aliquet. Donec vel purus vel ipsum sagittis fermentum. Nullam fermentum, ipsum ac condimentum pellentesque, justo velit ultrices neque, ac consectetur neque neque vel nunc. Integer vel ex sed nunc luctus varius. Nulla facilisi. Nullam euismod, mi vel commodo convallis, velit purus consectetur neque, ac ultricies sapien mi vel justo.</p>
                <Link to="/contact">Contacto</Link>
            </main>
           
        </div>
    );
};

export default About;