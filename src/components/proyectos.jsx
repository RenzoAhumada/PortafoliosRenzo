import fotoPaginaMendoza from './images/paginaResponsivaDeMendoza.JPG';
import fotoFlyChomby from './images/flyChombiHomr.JPG';
import fotoTienda from './images/tiendaCapturaUno.JPG';
import foto from './images/fotoNavBardos.jpg';
import { useState } from 'react';
import ChatBot from './chatbot';
import Carousel from './carousel';
import fotoCruzEHijos from './images/cruzEHijos.JPG';
import fotoCruzEHijosMobile from './images/cruzEHijosdos.JPG';
import fotoPaginaMendozaDos from './images/paginaResponsivaDeMendozaDos.JPG'
import fotoTiendaProductos from './images/TiendaProductosAgregados.JPG'
import fotoProductosAgregados from './images/tiendaPago.JPG'

const Proyectos = () => {
  const [isOpen, setIsOpen] = useState(false);

  const imagesCruzEHijos = [
    fotoCruzEHijos,
    fotoCruzEHijosMobile
  ]
  const imagespaginaMendoza = [
    fotoPaginaMendoza,
    fotoPaginaMendozaDos
  ]

  const imagesFlyChomby = [
    fotoFlyChomby
  ]

  const imagesTiendaReact = [
    fotoTienda,
    fotoTiendaProductos,
    fotoProductosAgregados

  ]
  

  return (
    <>
      <section className="text-gray-400 bg-blue-950 body-font">
        <div className="container px-5 py-30 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-21 h-21 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                  <img src={foto} alt="Foto de Renzo" className="w-27 h-27 rounded-full object-cover border-2" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-white text-lg">Renzo Ahumada Desarrollador Full Stack</h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-white mb-6 text-lg">
                  ¡Hola! Soy Renzo Ahumada, Desarrollador Full Stack. Soy un apasionado por la programación, especializado en tecnologías como React, HTML, CSS, JavaScript y Java. Durante mis estudios y proyectos personales, he adquirido un sólido conocimiento en estas áreas, lo que me ha permitido desarrollar aplicaciones web dinámicas y responsivas con interfaces de usuario intuitivas y funcionales.
                  Actualmente, estoy cursando la Licenciatura en Informática y Desarrollo de Software, donde también he ampliado mis conocimientos en MySQL, UX/UI, C y C++. Estos estudios me han brindado una comprensión profunda de las mejores prácticas en desarrollo web y programación.
                  Mi objetivo es aplicar mis conocimientos y habilidades en un entorno profesional, contribuyendo al éxito de equipos innovadores. Estoy siempre abierto a nuevas oportunidades que me permitan crecer como desarrollador y enfrentar nuevos desafíos.
                </p>
              </div>
            </div>
          </div>   
        </div>
       
       {!isOpen && (
      <button
        className="fixed bottom-0 left-0 m-4 bg-blue-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 focus:outline-none transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
        onClick={() => setIsOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-9 8l3-3h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h8l3 3z" />
        </svg>
      </button>
       )}
       {isOpen && (
         <div className="fixed bottom-0 left-0 m-4 w-72">
         <div className="bg-gray-800 text-white rounded-t-lg px-4 py-2 flex justify-between items-center">
           <h3 className="text-lg">ChatBot</h3>
           <button
             className="text-gray-400 hover:text-white focus:outline-none"
             onClick={() => setIsOpen(false)}
           >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"  >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
             </svg>
           </button>
         </div>
         <div className="bg-white h-64 rounded-b-lg p-4 flex flex-col">
           <div className="flex-1 overflow-y-auto">
            <ChatBot /> 
           </div>
         </div>
       </div>
     )}
      </section>


      <section className="text-gray-600 body-font bg-blue-950">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Proyectos realizados
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <Carousel images={imagesCruzEHijos}>
                
              </Carousel>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Página para asesor de seguros</h2>
              <p className="leading-relaxed text-white">
                Desarrollé una página web para un asesor de seguros, utilizando HTML, CSS, JavaScript y PHP para la creación del formulario. Este proyecto me permitió aplicar mis conocimientos en desarrollo web, creando una interfaz funcional y amigable para los usuarios.
              </p>
              <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                <a className="mr-5 hover:text-white" href='https://cruzehijosasesora.website/'>Para visitar la página haz clic aquí</a>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
                <Carousel images={imagespaginaMendoza}>
                
                </Carousel>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Página de ubicaciones de Mendoza</h2>
              <p className="leading-relaxed text-white">
                Desarrollé un proyecto para mostrar los lugares más concurridos de Mendoza, utilizando HTML, CSS y JavaScript. Este proyecto destaca por su diseño interactivo y su capacidad para proporcionar información útil a los visitantes sobre los principales puntos de interés de la región.
              </p>
              <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                <a className="mr-5 hover:text-white" href='https://renzoahumada.github.io/responsivePageMDZ/'>Para visitar la página haz clic aquí</a>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <Carousel images={imagesFlyChomby}/>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Proyecto universitario</h2>
              <p className="leading-relaxed text-white">
                En este proyecto universitario desarrollado con React, trabajé en equipo con 7 integrantes. Mi responsabilidad principal fue el desarrollo de la parte de equipaje y el inicio de sesión de usuario. Esta experiencia me permitió colaborar eficazmente en un entorno de equipo y aplicar mis habilidades en React para crear funcionalidades clave del sistema.
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <Carousel images={imagesTiendaReact}/>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Proyecto de tienda</h2>
              <p className="leading-relaxed text-white">
                Este es un proyecto personal que estoy desarrollando utilizando React + Vite. Actualmente, el proyecto se encuentra en una etapa de desarrollo y está siendo trabajado exclusivamente por mí. Este proyecto me permite profundizar en mis habilidades en React y Vite, y aplicar mis conocimientos para construir una aplicación funcional y atractiva de manera independiente.
              </p>
            </div>
          </div>
          
        </div>

        <div className="flex justify-center pb-8">
          <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
            <a className="mr-2 hover:text-white" href="https://github.com/RenzoAhumada?tab=repositories'">
              ¡Te invito a ver mis otros proyectos en github clickeando aquí!
            </a> 
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M12 .297c-6.6 0-12 5.4-12 12.025 0 5.325 3.438 9.846 8.205 11.44.6.113.82-.263.82-.588 0-.293-.01-1.07-.015-2.1-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.758-1.335-1.758-1.091-.745.083-.729.083-.729 1.205.083 1.838 1.237 1.838 1.237 1.07 1.834 2.808 1.305 3.492.998.108-.774.42-1.305.763-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.382 1.237-3.222-.124-.304-.537-1.527.117-3.18 0 0 1.01-.324 3.3 1.23a11.49 11.49 0 013.005-.403 11.53 11.53 0 013.005.403c2.287-1.555 3.297-1.23 3.297-1.23.656 1.653.243 2.875.12 3.18.773.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.623-5.48 5.92.43.37.814 1.096.814 2.207 0 1.59-.015 2.872-.015 3.262 0 .325.22.707.824.587C20.565 22.165 24 17.642 24 12.322 24 5.696 18.6.297 12 .297z"></path>
            </svg>
          </button>
        </div>


      </section>

      
    </>
  );
}

export default Proyectos;