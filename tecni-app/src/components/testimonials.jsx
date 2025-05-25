import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TestimonialCard = ({ name, role, text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9375 0L7.5 12H15V24H0V12L5.4375 0H12.9375ZM27.9375 0L22.5 12H30V24H15V12L20.4375 0H27.9375Z" fill="#E2E8F0"/>
        </svg>
      </div>
      
      <p className="text-gray-700 flex-grow">{text}</p>
      
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Ramírez",
      role: "Propietario de Restaurante",
      text: "TECNIApp resolvió nuestra emergencia de refrigeración comercial en tiempo récord. El técnico fue muy profesional y nos explicó todo el proceso. Nuestras cámaras frigoríficas funcionan mejor que nunca gracias a su mantenimiento especializado."
    },
    {
      name: "Laura Sánchez",
      role: "Residente en Neiva",
      text: "Instalaron un sistema de paneles solares en mi casa y estoy encantada con los resultados. La factura eléctrica se redujo significativamente y el equipo de TECNIApp me brindó asesoría completa sobre el sistema. Recomiendo totalmente sus servicios."
    },
    {
      name: "Miguel Ángel Tovar",
      role: "Gerente Hotel La Riviera",
      text: "Contratamos a TECNIApp para el mantenimiento de los aires acondicionados de todo el hotel. Su servicio fue impecable, cumpliendo con los plazos establecidos y dejando todos los equipos funcionando de manera óptima. Ahora tenemos un contrato de mantenimiento anual con ellos."
    },
    {
      name: "Elena Delgado",
      role: "Cliente Residencial",
      text: "Mi lavadora presentaba fallas constantes y otras empresas no lograban solucionarlo. El técnico de TECNIApp identificó el problema de inmediato y lo resolvió definitivamente. Servicio puntual, profesional y con garantía real."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#203363] mb-4">Lo que nuestros clientes dicen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro compromiso es brindar un servicio técnico excepcional. Estas son algunas experiencias de quienes han confiado en nosotros.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
