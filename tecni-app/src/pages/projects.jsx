import "react";
import { motion } from "framer-motion";

const projects = () => {
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
                <h1 className="text-[#6380A6] text-2xl font-bold">{item.value}</h1>
                <p>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sección de servicios adicionales */}
      <motion.div
        className="p-8 m-10 border shadow-md border-neutral-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-[#203363]">Servicios Adicionales</h2>
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
          Nuestra empresa ofrece distintos servicios además de los ya mencionados. Si tiene dudas, no lo piense mucho, contáctenos y le daremos una asesoría personalizada.
        </p>
      </motion.div>
    </div>
  );
};

export default projects;
