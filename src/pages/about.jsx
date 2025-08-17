import Nav from "../components/nav";
import { motion } from "framer-motion";
import images from "../assets/images";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold text-[#203363] mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Descubre Quiénes Somos
        </motion.h1>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 text-left">
            <h2 className="text-2xl font-semibold text-[#6380A6] mb-4">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 mb-4">
              En <span className="font-semibold">TECNIApp</span>, nuestra misión es proporcionar soluciones integrales de 
              climatización, refrigeración y energía renovable con los más altos estándares de calidad. 
              Ofrecemos servicios completos de instalación, mantenimiento y reparación de sistemas de aire 
              acondicionado, electrodomésticos de refrigeración y paneles solares.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Nuestro equipo de técnicos altamente capacitados está comprometido con brindar un servicio 
              excepcional, garantizando la eficiencia energética y el rendimiento óptimo de todos los 
              sistemas que instalamos y mantenemos.
            </p>
            <div className="flex mt-6 gap-4">
              <Link to="/services" className="bg-[#203363] text-white px-8 py-3 rounded-lg hover:bg-[#1a2a52] transition-colors duration-300 font-medium">
                Nuestros Servicios
              </Link>
              <Link
                to="/contact"
                className="border border-[#203363] text-[#203363] px-6 py-2 rounded-md hover:bg-gray-200 transition cursor-pointer"
              >
                Contáctanos
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={images.teamWorking} 
              alt="Equipo TECNIApp trabajando" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </motion.div>        <motion.h2 
          className="text-3xl font-bold text-[#203363] mt-16 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lo Que Nos Distingue
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Profesionalismo y Experiencia",
              description: "Nuestros técnicos cuentan con certificaciones y más de 10 años de experiencia en el sector, garantizando un trabajo impecable en cada proyecto.",
              icon: images.termometro
            },
            {
              title: "Tecnología de Vanguardia",
              description: "Trabajamos con equipos y herramientas de última generación, permitiéndonos ofrecer soluciones modernas y eficientes para todos nuestros clientes.",
              icon: images.rayo
            },
            {
              title: "Compromiso con la Sostenibilidad",
              description: "Promovemos activamente el uso de sistemas energéticamente eficientes y soluciones renovables como paneles solares, contribuyendo a un futuro más sostenible.",
              icon: images.copoDeNieve
            },
            {
              title: "Servicio Personalizado",
              description: "Cada proyecto es único. Analizamos las necesidades específicas de cada cliente para ofrecer la solución más adecuada y eficiente.",
              icon: images.lavadora
            },
            {
              title: "Garantía en Todos los Servicios",
              description: "Respaldamos la calidad de nuestro trabajo con garantías en todos nuestros servicios de instalación, mantenimiento y reparación.",
              icon: images.mantenimiento
            },
            {
              title: "Atención 24/7",
              description: "Ofrecemos asistencia técnica las 24 horas para emergencias, porque sabemos que los problemas técnicos no tienen horario.",
              icon: images.flechaDerecha
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#96B2C7] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <img src={item.icon} alt={item.title} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#203363]">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>        <motion.h2 
          className="text-3xl font-bold text-[#203363] mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestro Equipo de Profesionales
        </motion.h2>
        
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 text-center">
          En TECNIAPP contamos con un equipo de profesionales altamente capacitados, con experiencia técnica y compromiso total con la calidad. Ingenieros, técnicos y auxiliares trabajan en conjunto para ofrecer soluciones eficientes, seguras y personalizadas en refrigeración, climatización y automatización, siempre enfocados en superar las expectativas de nuestros clientes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              name: "Halfdam Claret Delgado Trujillo",
              position: "Ingeniero Industrial",
              image: images.technician1,
              description: 
              <div>
                <ul>
                  <li>Líder en eficiencia operativa:</li>
                  <br />
                  <li>Es el encargado de optimizar los procesos internos de TECNIAPP, garantizando que cada servicio se realice con máxima eficiencia, calidad y puntualidad. Su enfoque en mejora continua permite que nuestros proyectos sean rentables y sostenibles, cuidando siempre los recursos de nuestros clientes.</li>
                </ul>
              </div>
            },
            {
              name: "Luis Alberto Delgado Trujillo",
              position: "Ingeniero de proyectos",
              image: images.technician2,
              description: 
              <div>
                <ul>
                  <li>Diseño y supervisión técnica especializada:</li>
                  <br />
                  <li>Es el responsable de planear, diseñar y coordinar cada uno de nuestros proyectos de refrigeración, climatización y automatización. Su experiencia asegura que cada sistema funcione con precisión, cumpla con las normativas y supere las expectativas del cliente.</li>
                </ul>
              </div>
            },
            {
              name: "Camilo Andres Rivera Paredes",
              position: "Técnico en Refrigeración y climatización",
              image: images.technician,
              description: 
              <div>
                <ul>
                  <li>Manos expertas en el campo:</li>
                  <br />
                  <li>Es quien convierte los planos en realidad. Con conocimiento práctico, experiencia en instalaciones comerciales e industriales y un compromiso absoluto con la calidad, ejecuta cada servicio con profesionalismo, seguridad y precisión.</li>
                </ul>
              </div>
            },
            {
              name: "Jose Gregorio Fandiño Rivera",
              position: "Auxiliar de Refrigeración y climatización",
              image: images.technician3,
              description: 
              <div>
                <ul>
                  <li>Apoyo clave en cada instalación:</li>
                  <br />
                  <li>Acompaña al equipo técnico en tareas operativas, logísticas y de montaje. Su trabajo asegura que las instalaciones se realicen de forma ágil, organizada y eficiente, cuidando cada detalle y apoyando el cumplimiento de los estándares técnicos.</li>
                </ul>
              </div>
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#203363]">{member.name}</h3>
                <p className="text-[#6380A6] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-[#1F3A68] text-white p-8 rounded-xl text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">¿Listo para mejorar tu confort y eficiencia energética?</h2>
          <p className="mb-6 max-w-3xl mx-auto">
            En TECNIApp, estamos preparados para ayudarte con todos tus proyectos de climatización y 
            energía renovable. Desde la instalación de un simple aire acondicionado hasta un sistema 
            completo de paneles solares, nuestro equipo está a tu disposición.
          </p>
          <Link to="/contact" className="bg-[#203363] text-white px-8 py-3 rounded-lg hover:bg-[#1a2a52] transition-colors duration-300 font-medium">
            Solicitar Presupuesto
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;




