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
          En TECNIApp, contamos con un equipo de profesionales altamente capacitados y comprometidos 
          con ofrecer el mejor servicio. Nuestros técnicos combinan experiencia, conocimiento técnico 
          y pasión por la excelencia para garantizar resultados excepcionales en cada proyecto.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              name: "Carlos Rodríguez",
              position: "Director Técnico",
              image: images.technician1,
              description: "Ingeniero especializado con más de 15 años de experiencia en sistemas de climatización industrial y comercial."
            },
            {
              name: "Ana Martínez",
              position: "Especialista en Sistemas Solares",
              image: images.technician2,
              description: "Certificada en instalación y mantenimiento de sistemas fotovoltaicos residenciales y comerciales."
            },
            {
              name: "Javier López",
              position: "Técnico Senior HVAC",
              image: images.technician,
              description: "Experto en diagnóstico y reparación de sistemas de aire acondicionado y calefacción de alta eficiencia."
            },
            {
              name: "Laura Sánchez",
              position: "Gestión de Proyectos",
              image: images.technician3,
              description: "Coordinadora de proyectos de instalación, asegurando la satisfacción del cliente y la calidad en cada etapa."
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




