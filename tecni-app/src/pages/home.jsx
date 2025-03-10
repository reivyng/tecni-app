import 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

<<<<<<< HEAD
import './css/home.css'
import { Nav } from '../components/nav'
export const home = () => {
=======
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'react';
import images from '../assets/images';
import Carousel from '../components/carrucel';
>>>>>>> 277afddbf30e86e2d5f9c7086d005eb51c00c80e

const Home = () => {
  

  return (
    <>
<<<<<<< HEAD
      {/* Contenido del componente nav */}
      <div>
        <Nav />
      </div>
      {/* Contenido del componente home */}

      <section className="px-6 py-8">
        <h1 className="text-4xl font-light text-gray-700">TECN<span className="font-bold">I</span>App</h1>
        <h2 className="text-2xl font-bold text-blue-900 mt-2">Soluciones en Climatización y Refrigeración</h2>
        <p className="text-gray-700 mt-4">
          En TecniApp, nos especializamos en el diseño, instalación y mantenimiento de sistemas de aire acondicionado y refrigeración para entornos residenciales, comerciales e industriales. Aplicamos metodologías avanzadas y un enfoque llave en mano, asegurando soluciones eficientes y adaptadas a las necesidades de nuestros clientes.
        </p>
        <div className="mt-6 flex justify-center">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
              <img src="/imagen1.png" alt="Publicidad 1" className="w-1/3 shadow-lg rounded-lg border border-gray-200" />
            </div>
            <div>
              <img src="/imagen2.png" alt="Publicidad 2" className="w-1/3 shadow-lg rounded-lg border border-gray-200" />
            </div>
            <div>
              <img src="/imagen3.png" alt="Publicidad 3" className="w-1/3 shadow-lg rounded-lg border border-gray-200" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
=======
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
        <Carousel />
      </section>

    </>
    );
>>>>>>> 277afddbf30e86e2d5f9c7086d005eb51c00c80e
}


export default Home;
