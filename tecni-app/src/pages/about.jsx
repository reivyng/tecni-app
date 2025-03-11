import React from "react";
import Nav from "../components/Nav";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Descubre Quiénes Somos</h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-left">
            <p className="text-lg text-gray-700">
              En TECNIApp, ofrecemos servicios de instalación, mantenimiento y
              reparación de aire acondicionado. Contamos con un equipo experto
              que garantiza eficiencia y calidad en cada proyecto.
            </p>
            <div className="flex mt-4 gap-4 text-blue-500">
              <a href="#" className="hover:underline">Leer más</a>
              <a href="#" className="hover:underline">Nuestros servicios</a>
            </div>
          </div>
          <div className="md:w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">[Imagen del equipo aquí]</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-blue-600 mt-12">Te ofrecemos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {["Calidad", "Seguridad", "Ayuda", "Velocidad", "Eficiencia"].map(
            (text, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 rounded-lg shadow-md flex items-center justify-center"
              >
                <p className="text-lg font-semibold text-blue-500">{text}</p>
              </div>
            )
          )}
        </div>

        <h2 className="text-3xl font-bold text-blue-600 mt-12">Nuestro equipo</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Somos un equipo comprometido con la excelencia y el rendimiento.
          Nuestros técnicos están altamente capacitados para ofrecer soluciones
          rápidas y de calidad.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">[Miembro]</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">[Miembro]</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">[Miembro]</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">[Miembro]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
