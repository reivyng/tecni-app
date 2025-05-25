import "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import ProjectFilters from "../components/ProjectFilters";

const data = [
  {
    image: images.washingMachine,
    title: "Mantenimiento lavadora LG Pro Plus 3200",
    text: "Realizamos un mantenimiento preventivo y correctivo completo en esta lavadora de alta capacidad. Incluye limpieza de filtros, revisión del sistema de drenaje, calibración del tambor y verificación del sistema electrónico. El cliente reportaba vibraciones excesivas durante el ciclo de centrifugado que fueron completamente corregidas.",
    category: "lavadoras"
  },
  {
    image: images.refrigerator,
    title: "Reparación de nevera Samsung No-Frost de 500L",
    text: "Servicio técnico especializado en la reparación del sistema de refrigeración y cambio del compresor. La nevera presentaba acumulación de hielo en el congelador y temperaturas irregulares en el compartimento de alimentos. Después de la intervención, todos los sistemas funcionan correctamente y con mayor eficiencia energética.",
    category: "refrigeracion"
  },
  {
    image: images.airConditioner,
    title: "Instalación de aire acondicionado Split Inverter 12000 BTU",
    text: "Instalación completa de sistema de climatización en residencia familiar, incluyendo montaje de unidades interior y exterior, conexión de tuberías de refrigerante, cableado eléctrico y configuración del sistema. El cliente ahora disfruta de un ambiente perfectamente climatizado con un equipo de bajo consumo energético.",
    category: "aires"
  },
  {
    image: images.technician,
    title: "Mantenimiento preventivo secadora Whirlpool Heavy Duty",
    text: "Servicio de mantenimiento que incluyó limpieza completa de conductos de ventilación, calibración del sensor de temperatura, reemplazo de correas desgastadas y lubricación de partes móviles. Este mantenimiento permite extender la vida útil del equipo y prevenir averías costosas.",
    category: "electrodomesticos"
  },  
  {
    image: images.solarPanels,
    title: "Instalación de sistema de paneles solares residencial 5kW",
    text: "Implementación de sistema fotovoltaico completo que incluye 15 paneles solares, inversor, baterías de almacenamiento y sistema de monitoreo inteligente. El proyecto abarcó desde el estudio inicial de viabilidad, diseño personalizado, obtención de permisos, hasta la instalación y configuración final. El cliente ha reducido su factura eléctrica en un 85% y contribuye positivamente al medio ambiente.",
    category: "paneles-solares"
  },
  {
    image: images.airConditioner,
    title: "Mantenimiento de sistema de aire acondicionado comercial",
    text: "Servicio integral de mantenimiento para sistema central de aire acondicionado en oficinas corporativas. Incluye limpieza de ductos, revisión de compresores, recarga de refrigerante y optimización del sistema de control. El cliente experimentó una mejora significativa en la calidad del aire y eficiencia energética.",
    category: "aires"
  },
  {
    image: images.refrigerator,
    title: "Instalación de cámara frigorífica comercial",
    text: "Diseño e instalación de cámara frigorífica para almacenamiento de productos perecederos en negocio de alimentación. Proyecto completo desde la evaluación de necesidades, cálculos de capacidad, instalación de equipos y configuración de sistemas de monitoreo de temperatura.",
    category: "refrigeracion"
  },
  {
    image: images.kitchenAppliances,
    title: "Instalación y configuración de cocina inteligente integrada",
    text: "Instalación completa de un sistema de cocina inteligente con electrodomésticos conectados. El proyecto incluyó la configuración de la red doméstica, sincronización entre dispositivos y programación de rutinas automatizadas. El cliente ahora disfruta de una cocina moderna controlable desde su smartphone.",
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
            <Card image={item.image} title={item.title} text={item.text} category={item.category} />
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
