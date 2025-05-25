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
  {
    image: images.refrigerator,
    title: "Diseño e instalación de sistema de refrigeración chiller 40tr",
    text: "Implementación de sistema chiller de 40 toneladas de refrigeración para planta procesadora de lácteos. El proyecto incluyó diseño personalizado, instalación de unidad enfriadora, red de distribución y automatización con control PID para mantener temperaturas estables en el proceso productivo.",
    category: "refrigeracion"
  },

  // Aires acondicionados (categoría: "aires") - 4 proyectos
  {
    image: images.airConditioner,
    title: "Instalación de aire acondicionado",
    text: "Instalación completa de sistema de climatización en residencia familiar, incluyendo montaje de unidades interior y exterior, conexión de tuberías de refrigerante, cableado eléctrico y configuración del sistema. El cliente ahora disfruta de un ambiente perfectamente climatizado con un equipo de bajo consumo energético.",
    category: "aires"
  },
  {
    image: images.airConditioner,
    title: "Mantenimiento de sistema de aire acondicionado comercial",
    text: "Servicio integral de mantenimiento para sistema central de aire acondicionado en oficinas corporativas. Incluye limpieza de ductos, revisión de compresores, recarga de refrigerante y optimización del sistema de control. El cliente experimentó una mejora significativa en la calidad del aire y eficiencia energética.",
    category: "aires"
  },
  {
    image: images.airConditioner,
    title: "Instalación de sistema VRF para edificio de oficinas",
    text: "Implementación de sistema de Flujo de Refrigerante Variable (VRF) para climatización de edificio de 5 pisos. El proyecto abarcó diseño personalizado, instalación de unidades exteriores en azotea, distribución de 20 unidades interiores y programación del sistema centralizado de control inteligente por zonas.",
    category: "aires"
  },
  {
    image: images.airConditioner,
    title: "Reemplazo y actualización de sistema de ductos",
    text: "Renovación completa del sistema de conductos de aire acondicionado en centro comercial. Se sustituyeron conductos deteriorados, se optimizó el diseño para mejorar el flujo de aire, se instalaron difusores modernos y se implementó aislamiento térmico de alta eficiencia, logrando un 30% de ahorro energético.",
    category: "aires"
  },

  // Sistema Eléctrico/Paneles solares (categoría: "paneles-solares") - 3 proyectos
  {
    image: images.solarPanels,
    title: "Instalación de sistema de paneles solares residencial 5kW",
    text: "Implementación de sistema fotovoltaico completo que incluye 15 paneles solares, inversor, baterías de almacenamiento y sistema de monitoreo inteligente. El proyecto abarcó desde el estudio inicial de viabilidad, diseño personalizado, obtención de permisos, hasta la instalación y configuración final. El cliente ha reducido su factura eléctrica en un 85% y contribuye positivamente al medio ambiente.",
    category: "paneles-solares"
  },
  {
    image: images.solarPanels,
    title: "Diseño e instalación de tablero eléctrico automatizado",
    text: "Desarrollo de sistema de control automatizado para planta procesadora de alimentos. El proyecto incluyó diseño eléctrico, programación PLC, implementación de HMI táctil y configuración de alarmas. El sistema permite monitoreo en tiempo real, control preciso de temperaturas y generación automática de informes.",
    category: "paneles-solares"
  },
  {
    image: images.solarPanels,
    title: "Sistema solar comercial con respaldo de baterías",
    text: "Instalación de sistema fotovoltaico de 30kW para hotel con almacenamiento en baterías de litio. El proyecto incluye 75 paneles de alta eficiencia, sistema de monitorización remota y configuración de respaldo automático durante cortes eléctricos. La inversión se recuperará en menos de 5 años.",
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
    title: "Instalación y configuración de cocina inteligente integrada",
    text: "Instalación completa de un sistema de cocina inteligente con electrodomésticos conectados. El proyecto incluyó la configuración de la red doméstica, sincronización entre dispositivos y programación de rutinas automatizadas. El cliente ahora disfruta de una cocina moderna controlable desde su smartphone.",
    category: "electrodomesticos"
  },
  {
    image: images.kitchenAppliances,
    title: "Reparación de sistema de calefacción industrial para restaurante",
    text: "Diagnóstico y reparación de sistema de calefacción para cocina industrial que presentaba fallos intermitentes. Se identificó un problema en el controlador central, se reemplazaron componentes dañados y se implementó un sistema de monitoreo para prevenir futuras averías. El cliente recuperó la operatividad completa de su cocina.",
    category: "electrodomesticos"
  },

  // Nuevos proyectos específicos de refrigeración industrial
  {
    image: images.refrigerator,
    title: "Instalación de sistema de congelación Rack para supermercado",

    text: "Diseño e implementación de sistema de refrigeración tipo Rack para cadena de supermercados. El sistema centralizado con múltiples compresores permite alimentar 25 exhibidores refrigerados y 8 cámaras de congelación. La solución incluye monitoreo remoto, alarmas de temperatura y recuperación de calor para calefacción.",
    category: "refrigeracion"
  },
  {
    image: images.refrigerator,
    title: "Planta productora de hielo industrial 10 ton/día",

    text: "Implementación de planta completa para producción de hielo industrial con capacidad de 10 toneladas diarias. El proyecto incluyó diseño de ingeniería, instalación del sistema de refrigeración, equipos de formación de hielo, sistema de almacenamiento y automatización del proceso productivo.",
    category: "refrigeracion"
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
