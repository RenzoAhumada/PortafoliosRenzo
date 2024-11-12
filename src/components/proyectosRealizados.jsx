import { useState } from 'react';
import fotoCruzEHijos from './images/cruzEHijos.JPG';
import fotoCruzEHijosMobile from './images/cruzEHijosdos.JPG';
import fotoPaginaMendoza from './images/paginaResponsivaDeMendoza.JPG';
import fotoFlyChomby from './images/flyChombiHomr.JPG';
import fotoTienda from './images/tiendaCapturaUno.JPG';
import fotoPaginaMendozaDos from './images/paginaResponsivaDeMendozaDos.JPG'
import fotoTiendaProductos from './images/TiendaProductosAgregados.JPG'
import fotoProductosAgregados from './images/tiendaPago.JPG'
import Carousel from './carousel';



const ProyectosRealizados = () => {  

    const imagesCruzEHijos = [
        fotoCruzEHijos,
        fotoCruzEHijosMobile,
    ];
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
       
        <section className="text-gray-600 body-font bg-blue-950">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-10 px-4">
                    <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Página para asesor de seguros</h2>
                        <div className="relative w-full h-64 overflow-hidden">
                            <Carousel images={imagesCruzEHijos}/>
                             </div>
                        <p className="leading-relaxed text-white">
                            Desarrollé una página web para un asesor de seguros, utilizando HTML, CSS, JavaScript y PHP para la creación del formulario. Este proyecto me permitió aplicar mis conocimientos en desarrollo web, creando una interfaz funcional y amigable para los usuarios.
                        </p>
                        <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                            <a className="mr-5 hover:text-white" href='https://cruzehijosasesora.website/'>Para visitar la página haz clic aquí</a>
                        </button>
                        
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Página de ubicaciones de Mendoza</h2>
                            <div className="relative w-full h-64 overflow-hidden">
                                    <Carousel images={imagespaginaMendoza} />
                                   </div>
                    <p className="leading-relaxed text-white">
                        Desarrollé un proyecto para mostrar los lugares más concurridos de Mendoza, utilizando HTML, CSS y JavaScript. Este proyecto destaca por su diseño interactivo y su capacidad para proporcionar información útil a los visitantes sobre los principales puntos de interés de la región.
                    </p>
                    <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                        <a className="mr-5 hover:text-white" href='https://renzoahumada.github.io/responsivePageMDZ/'>Para visitar la página haz clic aquí</a>
                    </button>
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                    <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Proyecto universitario</h2>
                            <div className="relative w-full h-64 overflow-hidden">
                                    <Carousel images={imagesFlyChomby} />
                                    </div>
                    <p className="leading-relaxed text-white">
                    En este proyecto universitario desarrollado con React, trabajé en equipo con 7 integrantes. Mi responsabilidad principal fue el desarrollo de la parte de equipaje y el inicio de sesión de usuario. Esta experiencia me permitió colaborar eficazmente en un entorno de equipo y aplicar mis habilidades en React para crear funcionalidades clave del sistema.
                    </p>
                    <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                        <a className="mr-5 hover:text-white" href='https://renzoahumada.github.io/responsivePageMDZ/'>Para visitar la página haz clic aquí</a>
                    </button>
                    </div>

                    <div className="sm:w-1/2 mb-10 px-4">
                            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Tienda con React</h2>
                            <div className="relative w-full h-64 overflow-hidden">
                                    <Carousel images={imagesTiendaReact} />
                                  </div>
                    <p className="leading-relaxed text-white">
                        Este es un proyecto personal que estoy desarrollando utilizando React + Vite. Actualmente, el proyecto se encuentra en una etapa de desarrollo y está siendo trabajado exclusivamente por mí. Este proyecto me permite profundizar en mis habilidades en React y Vite, y aplicar mis conocimientos para construir una aplicación funcional y atractiva de manera independiente.
                    </p>
                    <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
                        <a className="mr-5 hover:text-white" href='https://renzoahumada.github.io/responsivePageMDZ/'>Para visitar la página haz clic aquí</a>
                    </button>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
};

export default ProyectosRealizados;
