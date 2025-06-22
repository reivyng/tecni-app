import images from '../assets/images';
import Carousel from '../components/carrucel';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Testimonials from '../components/testimonials';

const Home = () => {
  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-11" 
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.img 
            src={images.logo} 
            alt="tecniapp" 
            className="w-full max-w-[400px] md:max-w-[450px] mx-auto"
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

  En TecniApp nos especializamos en el diseño, instalación y mantenimiento en sistemas de refrigeración industrial y comercial.  
  Ofrecemos soluciones en cuartos fríos, salas de procesamiento de alimentos, plantas de hielo, refrigeración <strong>“Chiller”</strong>, 
  congelación <strong>“Rack”</strong> y tableros eléctricos automatizados.  
  Garantizamos eficiencia, confiabilidad y soluciones adaptadas a las necesidades de cada cliente.
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
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center gap-2"
        >
          <span role="img" aria-label="apreton de manos">🤝</span>
          ¿Cómo trabajamos contigo?
          <span role="img" aria-label="apreton de manos">🤝</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)" }}
            className="w-full lg:w-2/3 p-6 md:p-8 bg-[#A4B6CE] rounded-2xl shadow-lg border border-gray-100"
          >
            <ol className="grid grid-cols-1 gap-4 md:gap-6 list-decimal list-inside text-gray-800 font-medium">
              <li>       
                  <strong>Nos cuentas tu necesidad</strong><br />
                  💬 Por WhatsApp, llamada o formulario web. ¡Te escuchamos!  
              </li>
              <li>
                <strong>Agendamos una visita técnica o virtual</strong><br />
                📅 Evaluamos el problema y te damos opciones claras y realistas.
              </li>
              <li>
                <strong>Realizamos un diagnóstico profesional</strong><br />
                🔍 Identificamos la causa raíz, no solo los síntomas.
              </li>
              <li>
                <strong>Cotizamos con precios justos y sin sorpresas</strong><br />
                💲 Te explicamos cada punto y adaptamos el servicio a tu presupuesto.
              </li>
              <li>
                <strong>Ejecutamos el mantenimiento o instalación</strong><br />
                🛠 Con equipos y herramientas de alta calidad, bajo normas técnicas.
              </li>
              <li>
                <strong>Te entregamos con garantía y respaldo</strong><br />
                ✅ Tu tranquilidad es nuestra prioridad. Todo queda documentado.
              </li>
              <li>
                <strong>Ofrecemos seguimiento y asesoría post-servicio</strong><br />
                📞 ¿Dudas o mantenimiento a futuro? Siempre estaremos ahí.
              </li>
            </ol>
            <div className="mt-6 text-center text-blue-900 font-bold text-lg">
              TECNI-APP es tu aliado en refrigeración y climatización.<br />
              <span role="img" aria-label="mensaje">📲</span> ¡Contáctanos y lo solucionamos ya!
            </div>
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

      {/* Sección de estadísticas */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-gray-100 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-12 text-center"
          >
            Nuestros números hablan por sí mismos
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Proyectos Completados" },
              { number: "98%", label: "Clientes Satisfechos" },
              { number: "16", label: "Años de Experiencia" },
              { number: "24/7", label: "Soporte Técnico" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blue-900">{stat.number}</h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sección de servicios destacados */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-12 text-center"
        >
          Servicios Destacados
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: images.copoDeNieve,
              title: "Refrigeración Industrial",
              description: "Soluciones integrales en frío para procesos industriales: diseño, instalación y mantenimiento de cuartos fríos, plantas de hielo y sistemas de racks."
            },
            {
              icon: images.copoDeNieve,
              title: "Refrigeración Comercial",
              description: "Refrigeración confiable para negocios: vitrinas, congeladores, cámaras y climatización para comercios y restaurantes."
            },
            {
              icon: images.copoDeNieve,
              title: "Refrigeración Doméstica",
              description: "Tecnología y eficiencia para el hogar: reparación de neveras, lavadoras y aires acondicionados, instalación y mantenimiento."
            },
            {
              icon: images.rayo,
              title: "Electricidad y Electrónica",
              description: "Instalaciones eléctricas seguras, automatización, diagnóstico y sistemas de respaldo para hogares y empresas."
            },
            {
              icon: images.mantenimiento,
              title: "Asesoría Técnica & Venta de Repuestos",
              description: "Soporte técnico profesional y venta de repuestos certificados con entrega a domicilio y capacitación básica."
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center h-full"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 flex-grow">{service.description}</p>              <Link to="/contact" className="mt-4 text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Ver más 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>      {/* Sección de testimonios */}
      <Testimonials />

      {/* Sección de preguntas frecuentes */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-12 text-center"
        >
          Preguntas Frecuentes
        </motion.h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              question: "¿Cuál es el tiempo estimado para la instalación de un sistema de aire acondicionado?",
              answer: "El tiempo de instalación varía según el tipo de sistema y las condiciones del lugar. En promedio, una instalación residencial puede tomar entre 1 y 2 días, mientras que proyectos comerciales o industriales pueden requerir más tiempo."
            },
            {
              question: "¿Con qué frecuencia debo realizar mantenimiento a mi sistema?",
              answer: "Recomendamos realizar mantenimiento preventivo al menos dos veces al año: antes del verano y antes del invierno. Esto garantiza un funcionamiento óptimo y prolonga la vida útil del equipo."
            },
            {
              question: "¿Qué tipo de sistema es más eficiente energéticamente?",
              answer: "Los sistemas inverter son actualmente los más eficientes en el mercado, ya que ajustan la potencia según las necesidades reales, reduciendo significativamente el consumo energético en comparación con los sistemas convencionales."
            },
            {
              question: "¿Ofrecen garantía en sus servicios?",
              answer: "Sí, todos nuestros servicios incluyen garantía. Para instalaciones nuevas, ofrecemos hasta 5 años de garantía en mano de obra, adicional a la garantía del fabricante. Para reparaciones, la garantía varía según el tipo de servicio."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sección de llamado a la acción */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-blue-900 py-16 text-center text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
          >
            ¿Listo para mejorar tu confort?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte con soluciones de climatización y refrigeración adaptadas a tus necesidades.
          </motion.p>          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              to="/contact"
              className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-[#FBBF24] inline-block"
            >
              Solicitar Presupuesto
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
