import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import  'react';
import images from '../assets/images';
import Carousel from '../components/carrucel';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-61" // 
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.img 
            src={images.logo} 
            alt="tecniapp" 
            className="w-full max-w-[200px] md:max-w-[250px] mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900"
            >
              TECNI <span className="text-gray-500">App</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900"
            >
              Soluciones en Climatización y Refrigeración
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-gray-700"
            >
              En TecniApp, nos especializamos en el diseño, instalación y mantenimiento de sistemas
              de aire acondicionado y refrigeración para entornos residenciales, comerciales e
              industriales. Aplicamos metodologías avanzadas y un enfoque llave en mano, asegurando
              soluciones eficientes y adaptadas a las necesidades de nuestros clientes.
            </motion.p>
          </div>
          <div className="w-full max-w-lg mx-auto md:max-w-none h-[500px] flex items-center justify-center"> 
            {/* aumentado altura y añadido flex */}
            <Carousel />
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 text-center"
        >
          ¿Quieres saber cómo lo hacemos?
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)" }}
            className="w-full lg:w-2/3 p-6 md:p-8 bg-[#A4B6CE] rounded-2xl shadow-lg border border-gray-100"
          >
            <ul className="grid grid-cols-1 gap-4 md:gap-6">
              {[
                "Modelamos tu proyecto",
                "Realizamos análisis energético",
                "Análisis de interferencias entre instalaciones",
                "Cómputos y presupuesto",
                "Coordinación de obra",
                "Avances de obra en tiempo real",
                "Opción de Gestión de mantenimiento"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-left"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#1E3A8A" }}
                    className="text-blue-600 flex-shrink-0"
                  >
                  ✓

                  </motion.div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 max-w-[400px] flex items-center"
          >
            <motion.img 
              src={images.service} 
              alt="Técnico trabajando en aire acondicionado" 
              className="w-full rounded-2xl shadow-lg object-cover h-[300px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.section>
              
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block pb-1 text-3xl text-blue-900 border-b-2 border-blue-900"
        >
          
          Experiencia de la empresa
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-5 text-3xl text-gray-800"
        >
          Considerada hoy en día un Consorcio que se destaca por su innovación y sigue creciendo en la industria del aire acondicionado y la refrigeración, cuenta con profesionales con más de 16 años de experiencia en el área de la climatización y refrigeración.
        </motion.p>
      </motion.div>
    </>
  );
}

export default Home;
