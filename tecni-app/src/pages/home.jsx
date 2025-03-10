
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import 'react';
import images from '../assets/images';
import SimpleImageCarousel from '../components/carrucel';

const Home = () => {
  // Define las imágenes para el carrusel
  const carouselImages = [
    { 
      src: images.image, 
      alt: "TECNIApp servicio de refrigeración" 
    },
    { 
      src: images.service, 
      alt: "Instalación de aire acondicionado" 
    },
    { 
      src: images.logo, 
      alt: "Mantenimiento de equipos" 
    },
  ];

  return (
    <>
      <section className="flex items-center justify-center min-h-screen p-4 bg-white font-roboto">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto md:flex-row">
          <div className="flex items-center justify-center w-full md:w-1/2">
            <img src={images.logo} alt="tecniapp" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      <section className='flex flex-col md:flex-row'>
      <div className="flex items-center justify-center min-h-screen p-4 bg-white font-roboto">
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
        </div>
      </div>
      </section>
      
      <section className="flex items-center justify-center min-h-screen p-4 bg-white font-roboto">
        <SimpleImageCarousel images={carouselImages} />
      </section>

    </>
    );
}


export default Home;
