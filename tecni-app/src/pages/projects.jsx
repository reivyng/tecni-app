import "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useRef } from "react";
const data = [
  {
    image: "/ruta-a-imagen1.jpg",
    title: "Mantenimiento lavadora LG Pro Plus 3200",
    text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto..."
  },
  {
    image: "/ruta-a-imagen2.jpg",
    title: "Reparación de nevera Samsung",
    text: "El servicio técnico especializado en reparación de neveras Samsung incluye..."
  },
  {
    image: "/ruta-a-imagen2.jpg",
    title: "Reparación de nevera Samsung",
    text: "El servicio técnico especializado en reparación de neveras Samsung incluye..."
  },
];


const projects = () => {
  const cardRefs = useRef([]);

  const startAutoScroll = () => {
    cardRefs.current.forEach((card, index) => {
      setTimeout(() => {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }, index * 1000);
    });
  };

  
  return (
    <div className="w-full px-6 mx-auto max-w-7xl">
      {/* Sección de estadísticas */}
      <motion.div
        className="p-8 m-10 border shadow-md border-neutral-700 rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-wrap justify-center gap-20">
          {[
            { label: "Proyectos completados", value: "+200" },
            { label: "Años completados", value: "+3" },
            { label: "Clientes satisfechos", value: "+73%" },
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
      </div>

      {/* Título con línea decorativa */}
      <div>
        <h2 className="relative flex items-center text-3xl font-bold text-center before:content-[''] before:flex-1 before:border-t before:border-gray-400 before:mr-4 after:content-[''] after:flex-1 after:border-t after:border-gray-400 after:ml-4 text-[#203363]">
          Nuestros proyectos
        </h2>
      </div>

      {/* Tarjetas animadas */}
      <div className="space-y-6 p-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card image={item.image} title={item.title} text={item.text} />
          </motion.div>
        ))}
      </div>
    </div>

      {/* Sección de servicios adicionales */}
      <motion.div
        className="p-8 m-10 border shadow-md border-neutral-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-[#203363]">
          Servicios Adicionales
        </h2>
        <div className="flex flex-wrap justify-center mt-6 gap-28">
          {[
            "Instalación de Equipos",
            "Asesorías",
            "Mantenimiento Preventivo",
          ].map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-[#96B2C7] w-20 h-20 rounded-full"></div>
              <p className="text-center">{service}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center">
          Nuestra empresa ofrece distintos servicios además de los ya
          mencionados. Si tiene dudas, no lo piense mucho, contáctenos y le
          daremos una asesoría personalizada.
        </p>
      </motion.div>
    </div>
  );
};

export default projects;
