import fotoCruzEHijos from './images/cruzEHijos.JPG';
import fotoPaginaMendoza from './images/paginaResponsivaDeMendoza.JPG';
import fotoFlyChomby from './images/flyChombiHomr.JPG';
import fotoTienda from './images/tiendaCapturaUno.JPG';
import foto from './images/fotoNavBardos.jpg';
import { useState } from 'react';
import ChatBot from './chatbot';


const Proyectos = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="text-gray-400 bg-blue-950 body-font">
        <div className="container px-5 py-30 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-25 h-25 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
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
        className="fixed bottom-0 left-0 m-4 bg-blue-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 focus:outline-none"
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
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
             </svg>
           </button>
         </div>
         <div className="bg-white h-64 rounded-b-lg p-4 flex flex-col">
           <div className="flex-1 overflow-y-auto">
            <ChatBot /> 
           </div>
           {/*<div className="mt-4">
             <input
               type="text"
               placeholder="Escribe un mensaje..."
               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
           </div>*/}
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
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={fotoCruzEHijos} />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Página para asesor de seguros</h2>
              <p className="leading-relaxed text-white">
                Desarrollé una página web para un asesor de seguros, utilizando HTML, CSS, JavaScript y PHP para la creación del formulario. Este proyecto me permitió aplicar mis conocimientos en desarrollo web, creando una interfaz funcional y amigable para los usuarios.
              </p>
              <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                <a className="mr-5 hover:text-white" href='https://cruzehijosasesora.website/'>Para visitar la página haz clic aquí</a>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={fotoPaginaMendoza} />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Página de ubicaciones de Mendoza</h2>
              <p className="leading-relaxed text-white">
                Desarrollé un proyecto para mostrar los lugares más concurridos de Mendoza, utilizando HTML, CSS y JavaScript. Este proyecto destaca por su diseño interactivo y su capacidad para proporcionar información útil a los visitantes sobre los principales puntos de interés de la región.
              </p>
              <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                <a className="mr-5 hover:text-white" href='https://renzoahumada.github.io/responsivePageMDZ/'>Para visitar la página haz clic aquí</a>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={fotoFlyChomby} />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Proyecto universitario</h2>
              <p className="leading-relaxed text-white">
                En este proyecto universitario desarrollado con React, trabajé en equipo con 7 integrantes. Mi responsabilidad principal fue el desarrollo de la parte de equipaje y el inicio de sesión de usuario. Esta experiencia me permitió colaborar eficazmente en un entorno de equipo y aplicar mis habilidades en React para crear funcionalidades clave del sistema.
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={fotoTienda} />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Proyecto de tienda</h2>
              <p className="leading-relaxed text-white">
                Este es un proyecto personal que estoy desarrollando utilizando React + Vite. Actualmente, el proyecto se encuentra en una etapa de desarrollo y está siendo trabajado exclusivamente por mí. Este proyecto me permite profundizar en mis habilidades en React y Vite, y aplicar mis conocimientos para construir una aplicación funcional y atractiva de manera independiente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Proyectos;