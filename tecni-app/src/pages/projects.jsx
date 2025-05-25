import "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import ProjectFilters from "../components/ProjectFilters";

const data = [
  // Refrigeración (categoría: "refrigeracion") - 4 proyectos
  {
    image: images.refrigerator_1_1,
    image2: images.refrigerator_1_2,
    image3: images.refrigerator_1_3,
    title: "Diseño e instalación de sistemas de refrigeración",
    text: <div> 
      <p>En TECNIAPP diseñamos e instalamos sistemas de refrigeración de alto rendimiento, ideales para cámaras frigoríficas comerciales e industriales.</p>
      <p>Beneficios clave del sistema:</p>
      <ul className="list-disc pl-5 my-2">
        <li>Alta capacidad de refrigeración para procesos exigentes.</li>
        <li>Componentes accesibles para inspección y reparación.</li>
        <li>Operación confiable en condiciones de trabajo intensivas.</li>
        <li>Compatibilidad con refrigerantes ecológicos.</li>
      </ul>
      <p>
        Confía en nuestra experiencia técnica para optimizar la conservación de tus productos y reducir tus costos operativos.
        Ofrecemos soluciones a la medida, con equipos certificados y soporte técnico especializado.
      </p>
    </div>,
    category: "refrigeracion"
  }, 
  {
    image: images.refrigerator_2_1,
    image2: images.refrigerator_2_2,
    image3: images.refrigerator_2_3,
    title: "Diseño e instalación cámaras frigoríficas",
    text: <div>
      <p>En TECNIAPP diseñamos e instalamos cámaras frigoríficas a la medida de tu negocio.</p>
      <p>Ya sea para alimentos, medicamentos o productos industriales, te garantizamos:</p>
      <ul className="list-disc pl-5 my-2">
        <li>Diseño personalizado según tus necesidades.</li>
        <li>Aislamiento térmico de alta eficiencia.</li>
        <li>Equipos de refrigeración de bajo consumo y alto rendimiento.</li>
        <li>Instalación profesional y soporte técnico.</li>
      </ul>
      <p>Evita pérdidas por mala conservación y mejora la eficiencia de tu cadena de frío con un sistema confiable y duradero.</p>
      <p>¡Cotiza ya tu cámara frigorífica con nosotros! Atendemos en Neiva y todo el Huila.</p>
    </div>,
    category: "refrigeracion"
  },
  // Aires acondicionados (categoría: "aires") - 4 proyectos
  {
    image: images.AireAcondicionado_1_1,
    image2: images.AireAcondicionado_1_2,
    image3: images.AireAcondicionado_1_3,
    image4: images.AireAcondicionado_1_4,
    image5: images.AireAcondicionado_1_5,
    title: "Suministro e Instalación De Aire Acondicionado",
    text: <div>
        <p>
          En TECNIAPP ofrecemos soluciones completas en climatización, adaptadas a las necesidades de hogares, comercios e industrias.
        </p>
        <p className="mt-2 font-semibold">Nuestros servicios incluyen:</p>
        <ul className="list-disc pl-5 my-2">
          <li>Suministro de equipos de aire acondicionado con tecnología de alta eficiencia energética.</li>
          <li>Instalación profesional, cumpliendo con los más altos estándares de calidad y seguridad.</li>
          <li>Mantenimiento preventivo y correctivo, garantizando el rendimiento óptimo y la durabilidad de los sistemas.</li>
        </ul>
        <p className="mt-2 font-semibold">Comprometidos con:</p>
        <ul className="list-disc pl-5 my-2">
          <li>La eficiencia energética</li>
          <li>El confort ambiental</li>
          <li>Un respaldo técnico especializado</li>
        </ul>
        <p>
          Confía en nuestro equipo técnico certificado y experimentado para asegurar el mejor desempeño de tus sistemas de climatización.
        </p>
      </div>
    
    ,
    category: "aires"
  },

  // Sistema Eléctrico/Paneles solares (categoría: "paneles-solares") - 3 proyectos

  {
    image: images.solarPanels,
    title: "Diseño y Fabricación de Tableros Eléctricos y Electrónicos Automatizados",
    text: <div>
        <p>
          En TECNIAPP diseñamos, fabricamos e instalamos tableros eléctricos y electrónicos personalizados para automatización industrial y comercial, adaptados a las necesidades específicas de cada proyecto.
        </p>
        <p className="mt-2 font-semibold">Nuestros servicios incluyen:</p>
        <ul className="list-disc pl-5 my-2">
          <li>Diseño de tableros con componentes de alta calidad, cumpliendo normativas y estándares eléctricos nacionales e internacionales.</li>
          <li>Programación y configuración de sistemas de control automatizado para optimizar procesos y mejorar la eficiencia operativa.</li>
          <li>Integración de sensores, PLCs, variadores de frecuencia y otros dispositivos para soluciones inteligentes.</li>
          <li>Pruebas y puesta en marcha garantizando seguridad, funcionalidad y rendimiento.</li>
          <li>Mantenimiento preventivo y correctivo de tableros para prolongar su vida útil y evitar fallas.</li>
        </ul>
        <p>
          Confía en nuestro equipo técnico certificado y experimentado para asegurar el mejor desempeño de tus sistemas eléctricos y de automatización.
        </p>
      </div>
    ,
    category: "paneles-solares"
  },

  // Electrodomésticos (categoría: "electrodomesticos") - 4 proyectos
  {
    image: images.washingMachine,
    title: "Mantenimiento lavadora",
    text: "Realizamos un mantenimiento preventivo y correctivo completo en lavadoras. Incluye limpieza de filtros, revisión del sistema de drenaje, calibración del tambor y verificación del sistema electrónico. El cliente reportaba vibraciones excesivas durante el ciclo de centrifugado que fueron completamente corregidas.",
    category: "electrodomesticos"
  },
  {
    image: images.kitchenAppliances,
    title: "Reparación de sistema de calefacción industrial para restaurante",
    text: "Diagnóstico y reparación de sistema de calefacción para cocina industrial que presentaba fallos intermitentes. Se identificó un problema en el controlador central, se reemplazaron componentes dañados y se implementó un sistema de monitoreo para prevenir futuras averías. El cliente recuperó la operatividad completa de su cocina.",
    category: "electrodomesticos"
  },

  
  
];


const Projects = () => {
  const cardRefs = useRef([]);
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredData = activeFilter === 'todos'
    ? data
    : data.filter(item => item.category === activeFilter);

  const startAutoScroll = () => {
    cardRefs.current.forEach((card, index) => {
      setTimeout(() => {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }, index * 1000);
    });
  };


  return (
    <div className="w-full px-6 mx-auto max-w-7xl">
      {/* Sección de estadísticas */}      <motion.div
        className="p-8 m-10 border shadow-md border-neutral-700 rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-wrap justify-center gap-20">
          {[
            { label: "Servicios completados", value: "+1500" },
            { label: "Años de experiencia", value: "+10" },
            { label: "Clientes satisfechos", value: "+95%" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-[#96B2C7] rounded-full w-20 h-20"></div>
              <div className="text-center md:text-left">
                <h1 className="text-[#6380A6] text-2xl font-bold">
                  {item.value}
                </h1>
                <p>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="w-full px-6 mx-auto max-w-7xl">
        {/* Botón Recorrido Automático */}
        <div className="flex justify-center my-6">
          <button
            onClick={startAutoScroll}
            className="bg-blue-900 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800 transition cursor-pointer"
          >
            Recorrido Automático
          </button>
        </div>      {/* Título con línea decorativa */}
        <div>
          <h2 className="relative flex items-center text-3xl font-bold text-center before:content-[''] before:flex-1 before:border-t before:border-gray-400 before:mr-4 after:content-[''] after:flex-1 after:border-t after:border-gray-400 after:ml-4 text-[#203363]">
            Nuestros proyectos
          </h2>
        </div>

        {/* Filtros de proyectos */}
        <ProjectFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {/* Tarjetas animadas */}
        <div className="space-y-6 p-6">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card 
                image={item.image} 
                image2={item.image2}
                image3={item.image3} 
                image4={item.image4}
                image5={item.image5}
                title={item.title} 
                text={item.text} 
                category={item.category} 
              />
            </motion.div>
          ))}
        </div>
      </div>      {/* Sección de servicios adicionales */}
      <motion.div
        className="p-8 m-10 border shadow-md border-neutral-700 rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-[#203363] text-center mb-6">
          Servicios Especializados
        </h2>
        <div className="flex flex-wrap justify-center mt-6 gap-28">          {[
          "Instalación de Sistemas de Refrigeración",
          "Diagnóstico Electrónico Avanzado",
          "Mantenimiento Preventivo Programado",
          "Instalación de Sistemas Solares",
          "Optimización de Eficiencia Energética",
          "Asistencia Técnica 24/7",
        ].map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-[#96B2C7] w-20 h-20 rounded-full flex items-center justify-center">
              <img
                src={index === 0 ? images.copoDeNieve :
                  index === 1 ? images.rayo :
                    index === 2 ? images.mantenimiento :
                      index === 3 ? images.termometro :
                        index === 4 ? images.lavadora :
                          images.flechaDerecha}
                alt={service}
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-center font-medium">{service}</p>
          </motion.div>
        ))}
        </div>        <p className="mt-8 text-center text-gray-700">
          Nuestra empresa ofrece servicios técnicos especializados para todo tipo de electrodomésticos domésticos y comerciales, así como soluciones de energía renovable con paneles solares.
          Contamos con técnicos certificados y utilizamos componentes de alta calidad para garantizar la eficiencia y durabilidad de nuestras instalaciones.
          Si tiene dudas sobre algún servicio específico, contáctenos para recibir una asesoría personalizada y un presupuesto sin compromiso.
        </p>        <div className="flex justify-center mt-6">
          <Link to="/contact" className="bg-[#203363] text-white px-8 py-3 rounded-lg hover:bg-[#1a2a52] transition-colors duration-300 font-medium">
            Solicitar Presupuesto
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
