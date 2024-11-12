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

import { motion } from "framer-motion"



const Proyectos = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <>
      <section className="text-gray-400 bg-blue-950 body-font">
        <div className="container px-5 py-30 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2}}
                  viewport={{ once: true }}
                >
                <div className="w-21 h-21 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
           
                  <img src={foto} alt="Foto de Renzo" className="w-27 h-27 rounded-full object-cover border-2" />
                 
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-white text-lg">Renzo Ahumada Desarrollador Full Stack</h2>
                  <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                </div>
                </motion.div>
              </div>
              
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2}}
                  viewport={{ once: true }}
                >
                  <p className="leading-relaxed text-white mb-6 text-lg">
                    ¡Hola! Soy Renzo Ahumada, Desarrollador Full Stack. Soy un apasionado por la programación, especializado en tecnologías como React, HTML, CSS, JavaScript y Java. Durante mis estudios y proyectos personales, he adquirido un sólido conocimiento en estas áreas, lo que me ha permitido desarrollar aplicaciones web dinámicas y responsivas con interfaces de usuario intuitivas y funcionales.
                    Actualmente, estoy cursando la Licenciatura en Informática y Desarrollo de Software, donde también he ampliado mis conocimientos en MySQL, UX/UI, C y C++. Estos estudios me han brindado una comprensión profunda de las mejores prácticas en desarrollo web y programación.
                    Mi objetivo es aplicar mis conocimientos y habilidades en un entorno profesional, contribuyendo al éxito de equipos innovadores. Estoy siempre abierto a nuevas oportunidades que me permitan crecer como desarrollador y enfrentar nuevos desafíos.
                  </p>
                </motion.div>
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
      
    </>
  );
}

export default Proyectos;