import 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './css/home.css'
import { Nav } from '../components/nav'
export const home = () => {


  return (
    <>
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
}
