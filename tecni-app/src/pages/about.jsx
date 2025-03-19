import React from "react";
import { motion } from "framer-motion";
import teamImage from "../assets/claretFoto.jpg"; // Asegúrate de que la ruta sea correcta

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-200 min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Contenedor principal con imagen a la derecha */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contenedor del texto */}
          <div className="md:w-2/3 space-y-6">
            {/* Título alineado a la izquierda y más abajo */}
            <h1 className="text-4xl font-bold text-blue-900 text-left mt-[-10px]">
             Descubre Quiénes Somos
           </h1>
           <div className="w-220 h-0.5 bg-gray-400 mt-2 mb-6"></div>

            {/* Texto descriptivo */}
            <p className="text-lg text-gray-700 leading-relaxed">
              En <span className="font-semibold">TECNI App</span>,
              ofrecemos servicios de instalación, mantenimiento y reparación de
              aires acondicionados, neveras y paneles solares. Trabajamos con un
              equipo experto y tecnología de calidad para garantizar eficiencia
              y rendimiento en cada proyecto, tanto para hogares como para
              empresas.
            </p>

            {/* Sección de métricas debajo del texto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { label: "Proyectos completos", value: "300+" },
                { label: "Años de experiencia", value: "10+" },
                { label: "Clientes satisfechos", value: "70+" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-400 rounded-lg py-6 shadow-md bg-white"
                >
                  <p className="text-2xl font-bold text-blue-900">
                    {item.value}
                  </p>
                  <p className="text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen alineada a la derecha */}
          <div className="md:w-1/3 flex justify-end">
            <img
              src={teamImage}
              alt="Nuestro equipo"
              className="w-full h-auto max-w-xs rounded-lg shadow-lg"
            />
          </div>
        </div>

{/* Beneficios que ofrece la empresa */}
<motion.div
  className="bg-white shadow-lg rounded-lg p-6 md:p-10 text-center mx-auto max-w-4xl mt-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* Línea - Título - Línea */}
  <div className="flex items-center justify-center mb-6">
    <div className="w-50 h-0.5 bg-gray-300"></div>
    <h2 className="text-2xl font-bold text-blue-900 mx-4">
      Te ofrecemos
    </h2>
    <div className="w-50 h-0.5 bg-gray-300"></div>
  </div>

  {/* Beneficios */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {["Calidad", "Seguridad", "Ayuda", "Velocidad", "Eficiencia"].map(
      (text, index) => (
        <motion.div
          key={index}
          className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-semibold text-blue-900">{text}</p>
        </motion.div>
      )
    )}
  </div>
</motion.div>



{/* Sección del equipo */}
<motion.div
  className="mt-28 flex flex-col md:flex-row items-center md:items-start gap-12"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* Contenedor izquierdo: Título y descripción */}
  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold text-blue-900 text-left mb-4">
      Nuestro equipo
    </h2>
    <div className="w-150 h-0.5 bg-gray-300 mb-6"></div>
    <p className="text-lg text-gray-700 leading-relaxed">
      Somos un equipo comprometido con la excelencia y la innovación. 
      Nuestra fortaleza nace en la colaboración, el talento diverso y 
      la pasión por lograr los objetivos de nuestros clientes.
    </p>
  </div>

  {/* Contenedor derecho: Fotos del equipo */}
  <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-6">
    {[1, 2, 3, 4].map((member) => (
      <motion.div
        key={member}
        className="bg-gray-300 h-40 rounded-lg flex items-center justify-center shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: member * 0.1 }}
        viewport={{ once: true }}
      >
        <span className="text-gray-600">[Miembro {member}]</span>
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </div>
  );
}

export default About;




