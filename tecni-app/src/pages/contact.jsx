import 'react';
import { FiPhone } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import './css/styles.css';
import contactImage from '../assets/images'; // Importar la imagen

// Importar los componentes adicionales
import Header from '../components/ContactForm';

const Contact = () => {
    const gradientBackground = 'linear-gradient(to bottom, white, #A4B6CE)'; // Fondo degradado
    
    return (
        <div className="w-full py-6 mt-12" style={{ background: gradientBackground }}>
            {/* Agregar la imagen */}

            <div className="flex items-center justify-center w-full max-w-4x4 mx-auto px-4">
                <div className="h-0.5 bg-black flex-grow-1"></div> {/* Cambiado de bg-blue-500 a bg-black */}
                <h2 className="mx-6 text-3xl font-bold text-[rgb(11,33,74)]">
                    Contactanos
                </h2>
                <div className="h-0.5 bg-black flex-grow-4"></div> {/* Cambiado de bg-green-500 a bg-black */}
            </div>
            
            <div className='mt-12 flex flex-col items-center justify-center'> {/* Cambiado de flex a flex-col */}
                <h2>¿Tienes alguna pregunta o proyecto en mente?</h2> 
                <h2>Estaremos encantados de ayudarte.</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
                {/* Tarjeta 1: Teléfono */}
                <div className="p-6 rounded-4xl w-80 h-70 text-center flex flex-col items-center justify-center" style={{ backgroundColor: '#9EAEDE', boxShadow: '30px 18px 10px rgba(0, 0, 0, 0.99)' }}> {/* Color independiente */}
                    <div className="text-5xl mb-2 flex items-center justify-center h-12"><FiPhone /></div> {/* Altura ajustada */}
                    <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                    <p className="text-gray-700">+57 3154856897</p>
                    <p className="text-gray-700">+57 3154856897</p>
                </div>

                {/* Línea divisoria */}
                <div className="h-full w-0.5 bg-black mx-4"></div>

                {/* Tarjeta 2: Horarios de atención */}
                <div className="p-6 rounded-4xl w-80 h-80 text-center flex flex-col items-center mt-40" style={{ backgroundColor: '#9EAEDE', boxShadow: '30px 18px 10px rgba(0, 0, 0, 0.99)' }}> {/* Color independiente */}
                    <div className="text-5xl mb-2 flex items-center justify-center h-12"><GiSandsOfTime /></div> {/* Altura ajustada */}
                    <h3 className="text-lg font-semibold mb-2">Horarios de atención</h3>
                    <div className="flex justify-between items-center">
                        <div className="flex-1 text-left">
                            <h4 className="font-semibold">Lunes a viernes</h4>
                            <p className="text-gray-700">8:00 a.m. - 12:00 p.m.</p>
                            <p className="text-gray-700">01:00 p.m. - 5:00 p.m.</p>
                        </div>
                        <div className="h-full w-0.5 bg-black mx-4"></div> {/* Línea divisoria */}
                        <div className="flex-1 text-left">
                            <h4 className="font-semibold">Sábado y domingo</h4>
                            <p className="text-gray-700">8:00 a.m. - 12:00 p.m.</p>
                            <p className="text-gray-700">01:00 p.m. - 3:00 p.m.</p>
                        </div>
                        <div className="h-full w-0.5 bg-black mx-4"></div> {/* Línea divisoria */}
                        <div className="flex-1 text-left">
                            <h4 className="font-semibold">Días festivos</h4>
                            <p className="text-gray-700">8:00 a.m. - 12:00 p.m.</p>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="h-full w-0.5 bg-black mx-4"></div>

                {/* Tarjeta 3: Correo */}
                <div className="p-6 rounded-4xl w-80 h-70 text-center flex flex-col items-center justify-center" style={{ backgroundColor: '#9EAEDE', boxShadow: '30px 18px 10px rgba(0, 0, 0, 0.99)' }}> {/* Color independiente */}
                    <div className="text-5xl mb-2 flex items-center justify-center h-12"><MdOutlineAttachEmail /></div> {/* Altura ajustada */}
                    <h3 className="text-lg font-semibold mb-2">Correo</h3>
                    <p className="text-gray-700">tecniapp@gmail.com</p>
                </div>
            </div>

            <div className='mt-30 flex ml-20'> {/* Cambiado de flex a flex-col */}
                <h1 className='text-2xl'>Si se encuentra interesado en conversar sobre sus proyectos <br /> por favor envienos un mensaje.</h1>
            </div>

            <div className="flex justify-center mb-8">
                <img src={contactImage.llaveGris} alt="Contact Us" className="w-1/2 rounded-lg shadow-lg" />
            </div>

             {/* Incluir el componente Header */}
            <Header />
        </div>
    );
}

export default Contact;