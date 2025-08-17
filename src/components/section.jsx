
import serviceImage from '../assets/service.png'; // Asegúrate de tener esta imagen

const Section = () => (
  <section className="px-10 py-20">
    <h2 className="text-3xl font-semibold text-center mb-10">¿Quieres saber como lo hacemos?</h2>
    <div className="flex justify-around items-center">
      <ul className="text-lg text-gray-700">
        <li>• Modelamos tu proyecto.</li>
        <li>• Realizamos análisis energético.</li>
        <li>• Análisis de interferencias entre instalaciones.</li>
        <li>• Cómputos y presupuesto.</li>
        <li>• Coordinación de obra.</li>
        <li>• Avances de obra en tiempo real.</li>
        <li>• Opción de Gestión de mantenimiento.</li>
      </ul>
      <img src={serviceImage} alt="Service" className="w-1/3" />
    </div>
  </section>
);

export default Section;