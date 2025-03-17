import "react";
import { motion } from "framer-motion";

const projects = () => {
  return (
    <motion.div
      className="p-6 m-6 mx-auto w-full max-w-6xl border-[1.5px] border-neutral-700 rounded-2xl opacity-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:text-left">
        {[
          { value: "+200", text: "Proyectos completados" },
          { value: "+3", text: "Años completados" },
          { value: "+73%", text: "Clientes satisfechos" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <div className="bg-[#96B2C7] rounded-full w-16 h-16 md:w-20 md:h-20"></div>
            <div>
              <h1 className="text-[#6380A6] text-xl md:text-2xl font-bold">{item.value}</h1>
              <p className="text-sm md:text-base">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default projects;
