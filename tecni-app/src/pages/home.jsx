import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import  'react';
import images from '../assets/images';
import Carousel from '../components/carrucel';

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen p-4 mt-16 bg-white font-roboto"> {/* Ajusta el margen superior */}
        <div className="container flex flex-col items-center justify-center p-4 mx-auto md:flex-row">
          <div className="flex items-center justify-center w-full md:w-1/2">
            <img src={images.logo} alt="tecniapp" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      <section className='flex flex-col p-5 md:flex-row'>
        <div className="flex items-center justify-center min-h-screen p-12 bg-white font-roboto">
          <div className="container flex flex-col items-center p-4 mx-auto md:flex-row">
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-4xl font-bold text-blue-900">
                TECNI <span className="text-gray-500">App</span>
              </h1>
              <h2 className="mt-4 text-2xl font-bold text-blue-900">
                Soluciones en Climatización y Refrigeración
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                En TecniApp, nos especializamos en el diseño, instalación y mantenimiento de sistemas
                de aire acondicionado y refrigeración para entornos residenciales, comerciales e
                industriales. Aplicamos metodologías avanzadas y un enfoque llave en mano, asegurando
                soluciones eficientes y adaptadas a las necesidades de nuestros clientes.
              </p>
            </div>
            <div className="flex items-center justify-center md:w-1/2">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
      
      <div className="py-4 text-center">
        <h2 className="text-2xl text-blue-900">¿Quieres saber cómo lo hacemos?</h2>
        <div className="flex items-center justify-center gap-5 mt-4">
          <div className="w-3/5 p-5 text-black bg-gray-400 rounded-lg">
            <ul className="pl-4 space-y-2 text-lg list-disc">
              <li>Modelamos tu proyecto.</li>
              <li>Realizamos análisis energético.</li>
              <li>Análisis de interferencias entre instalaciones.</li>
              <li>Cómputos y presupuesto.</li>
              <li>Coordinación de obra.</li>
              <li>Avances de obra en tiempo real.</li>
              <li>Opción de Gestión de mantenimiento.</li>
            </ul>
          </div>
          <div className="w-1/5">
            <img src={images.service} alt="Técnico trabajando en aire acondicionado" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      
      <div className="py-8 text-center">
        <h2 className="inline-block pb-1 text-2xl text-blue-900 border-b-2 border-blue-900">Experiencia de la empresa</h2>
        <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-800">
          Considerada hoy en día un Consorcio que se destaca por su innovación y sigue creciendo en la industria del aire acondicionado y la refrigeración, cuenta con profesionales con más de 16 años de experiencia en el área de la climatización y refrigeración.
        </p>
      </div>
    </>
  );
}

export default Home;
