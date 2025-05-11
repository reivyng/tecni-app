import 'react';
import { motion } from "framer-motion";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaTools, FaSolarPanel, FaSnowflake, FaWhatsapp } from "react-icons/fa";
import './css/styles.css';
import Nav from '../components/nav';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const gradientBackground = 'linear-gradient(to bottom, white, #A4B6CE)';
    
    return (
        <div className="min-h-screen" style={{ background: gradientBackground }}>
            <Nav />
            <div className="container mx-auto px-4 py-12">
                <motion.div 
                    className="flex items-center justify-center w-full mx-auto mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="h-0.5 bg-[#203363] flex-1"></div>
                    <h1 className="mx-6 text-4xl font-bold text-[#203363]">
                        Contáctanos
                    </h1>
                    <div className="h-0.5 bg-[#203363] flex-1"></div>
                </motion.div>
                  <motion.div 
                    className='mt-8 mb-12 text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-semibold text-[#1F3A68] mb-3">¿Tienes alguna pregunta o proyecto en mente?</h2> 
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Estamos aquí para ayudarte con todos tus proyectos de climatización, refrigeración
                        y energía solar. Nuestro equipo de expertos te brindará la mejor asesoría personalizada.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Tarjeta 1: Teléfono */}
                    <motion.div 
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-[#96B2C7] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <FiPhone className="text-2xl text-[#203363]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#203363]">Teléfonos</h3>
                        </div>
                        <p className="text-gray-700 mb-2">Atención al cliente: +57 315 485 6897</p>
                        <p className="text-gray-700">Soporte técnico: +57 314 255 2132</p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600">Respuesta inmediata en horario laboral</p>
                        </div>
                    </motion.div>                    {/* Tarjeta 2: Horarios de atención */}
                    <motion.div 
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-[#96B2C7] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <GiSandsOfTime className="text-2xl text-[#203363]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#203363]">Horarios de atención</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-sm">
                            <div>
                                <h4 className="font-semibold text-[#6380A6]">Lunes a viernes</h4>
                                <p className="text-gray-700">8:00 - 12:00</p>
                                <p className="text-gray-700">13:00 - 17:00</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#6380A6]">Sábado y domingo</h4>
                                <p className="text-gray-700">8:00 - 12:00</p>
                                <p className="text-gray-700">13:00 - 15:00</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#6380A6]">Días festivos</h4>
                                <p className="text-gray-700">8:00 - 12:00</p>
                                <p className="text-gray-700">Emergencias 24h</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tarjeta 3: Correo */}
                    <motion.div 
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-[#96B2C7] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <MdOutlineAttachEmail className="text-2xl text-[#203363]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#203363]">Correos electrónicos</h3>
                        </div>
                        <p className="text-gray-700 mb-2">Información general: <span className="font-medium">tecniapp@gmail.com</span></p>
                        <p className="text-gray-700 mb-2">Soporte técnico: <span className="font-medium">soporte@tecniapp.com</span></p>
                        <p className="text-gray-700">Presupuestos: <span className="font-medium">presupuestos@tecniapp.com</span></p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600">Respondemos en menos de 24 horas</p>
                        </div>
                    </motion.div>
                </div>                <motion.div 
                    className="mt-16 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-[#203363] mb-8 text-center">
                        Nuestros servicios principales
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col items-center text-center">
                            <div className="bg-[#96B2C7] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <FaSnowflake className="text-2xl text-[#203363]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#203363] mb-2">Climatización</h3>
                            <p className="text-gray-600">Instalación y mantenimiento de sistemas de aire acondicionado y refrigeración para hogares y negocios.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col items-center text-center">
                            <div className="bg-[#96B2C7] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <FaTools className="text-2xl text-[#203363]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#203363] mb-2">Reparación de Electrodomésticos</h3>
                            <p className="text-gray-600">Servicio técnico especializado para todo tipo de electrodomésticos de refrigeración y lavado.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col items-center text-center">
                            <div className="bg-[#96B2C7] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <FaSolarPanel className="text-2xl text-[#203363]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#203363] mb-2">Energía Solar</h3>
                            <p className="text-gray-600">Diseño e instalación de sistemas fotovoltaicos para reducir costos energéticos y contribuir al medio ambiente.</p>
                        </div>
                    </div>
                </motion.div>                 <motion.div 
                    className="flex flex-col md:flex-row items-center justify-between bg-[#1F3A68] text-white p-6 rounded-xl shadow-lg mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <div className="md:w-3/4 mb-6 md:mb-0 md:pr-6">
                        <h2 className="text-2xl font-semibold mb-2">¿Interesado en nuestros servicios?</h2>
                        <p className="text-gray-300">
                            Completa el formulario de contacto y te responderemos a la brevedad con la información 
                            que necesitas. También puedes llamarnos directamente, escribirnos por WhatsApp o 
                            visitarnos en nuestra oficina.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                            href="tel:+573154856897" 
                            className="bg-white text-[#203363] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center flex items-center justify-center"
                        >
                            <FiPhone className="mr-2" /> Llamar
                        </a>
                        <button
                            onClick={() => {
                                const whatsappURL = `https://wa.me/573154856897?text=${encodeURIComponent('Hola, estoy interesado en sus servicios. ¿Podrían brindarme más información?')}`;
                                window.open(whatsappURL, '_blank');
                            }}
                            className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors text-center flex items-center justify-center"
                        >
                            <FaWhatsapp className="mr-2" /> WhatsApp
                        </button>
                    </div>
                </motion.div>

                {/* Sección de mapa y ubicación */}
                <motion.div 
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2 className="text-2xl font-bold text-[#203363] mb-8 text-center">
                        Nuestra Ubicación
                    </h2>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#96B2C7] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                        <FiMapPin className="text-2xl text-[#203363]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#203363]">Visítanos</h3>
                                </div>
                                  <div className="mb-6">
                                    <p className="text-gray-700 mb-1 font-medium">Dirección:</p>
                                    <p className="text-gray-700 mb-4">Cra. 12 # 2E-22<br />Neiva, Huila, Colombia</p>
                                    
                                    <p className="text-gray-700 mb-1 font-medium">Referencias:</p>
                                    <p className="text-gray-700 mb-4">Sector centro de la ciudad, cerca del Parque Santander</p>
                                    
                                    <p className="text-gray-700 mb-1 font-medium">Transporte público:</p>
                                    <p className="text-gray-700">Rutas de buses urbanos: 3, 8, 15<br />A 10 minutos del Terminal de Transporte</p>
                                </div>
                                
                                <a 
                                    href="https://maps.google.com/?q=Cra.+12+%23+2E-22,+Neiva,+Huila,+Colombia" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#203363] text-white px-4 py-2 rounded-md hover:bg-[#1a2a52] transition-colors"
                                >
                                    Cómo llegar
                                </a>
                            </div>
                              <div className="md:w-2/3 h-[400px] rounded-xl overflow-hidden">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.008676825594!2d-75.28696492443758!3d2.9347178541938374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b741c5dab023f%3A0x6f512b94d0f482a3!2sCra.%2012%20%232e-22%2C%20Neiva%2C%20Huila!5e0!3m2!1ses-419!2sco!4v1715467282746!5m2!1ses-419!2sco" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de nuestra oficina en Neiva"
                                    className="rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </motion.div>                {/* Formulario de contacto */}
                <ContactForm 
                    whatsappNumber="573102944906"
                    title="Formulario de Contacto" 
                    showSidebar={true}
                />
            </div>
        </div>
    );
}

export default Contact;