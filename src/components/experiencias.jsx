import React, { useState } from "react";

const CarouselExperiencias = () => {
  const experiencias = [
    {
      fechaMes: "Julio 2024",
      finalizacion: "Septiembre 2024",
      categoria: "Desarrollo Web",
      titulo: "Creación de Página Web Responsiva",
      descripcion:
        "Diseñé y desarrollé una página web dinámica y completamente responsiva para una productora asesora de seguros. El proyecto incluyó una interfaz intuitiva, un diseño moderno y un formulario interactivo para la captación de clientes.",
    },
    {
      fechaMes: "Enero 2025",
      finalizacion: "Actualidad",
      categoria: "Soporte Técnico Funcional",
      titulo: "Especialista en Soporte - Foca Software",
      descripcion:
        "Brindo soporte técnico en el sector de combustibles, resolviendo incidencias y proponiendo mejoras en el software. Trabajo en la optimización de procesos y en la derivación eficiente de solicitudes para garantizar una mejor experiencia del usuario.",
    },
    {
      fechaMes: "Diciembre 2024",
      finalizacion: "Actualidad",
      categoria: "Desarrollo de Videojuegos",
      titulo: "Game Developer - Proyecto Autodidacta",
      descripcion:
        "Desarrollo videojuegos en Unity con enfoque en la creación de mapas y mecánicas para juegos 2D. Exploro nuevas tecnologías y técnicas de optimización para mejorar la jugabilidad y el rendimiento.",
    },
    {
      fechaMes: "Otros",
      finalizacion: "Otros",
      categoria: "Experiencia en Otros Rubros",
      titulo: "Supervisor y Gestión Operativa",
      descripcion:
        "Me desempeñé como supervisor de turno en una empresa gastronómica, gestionando personal y operaciones diarias. Además, trabajé en la logística y manejo de caudales, adquiriendo habilidades en control y seguridad.",
    },
    
  ];

  const [showButtons, setShowButtons] = useState(false);

  const itemsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleExperiencias = Array.from(
    { length: itemsPerPage },
    (_, i) => experiencias[(currentIndex + i) % experiencias.length]
  );

  const nextSlide = () => {
    // Avanza 1 posición (de forma circular)
    setCurrentIndex((prev) => (prev + 1) % experiencias.length);
  };

  const prevSlide = () => {
    // Retrocede 1 posición (de forma circular)
    setCurrentIndex(
      (prev) => (prev - 1 + experiencias.length) % experiencias.length
    );
  };

  return (
    <section>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-wrap -mx-2 -my-2">
            {visibleExperiencias.map((exp, index) => (
              <div key={index} className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-blue-500 pb-2 mb-2 border-b-2 border-blue-200">
                      {exp.fechaMes}
                    </span>
                    <span className="font-medium text-lg text-blue-800 title-font leading-none">
                      {exp.finalizacion}
                    </span>
                  </div>
                  <div className="flex-grow pl-16">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      {exp.categoria}
                    </h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                      {exp.titulo}
                    </h1>
                    <p className="leading-relaxed mb-5">{exp.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity duration-300 ${
              showButtons
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            Anterior
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity duration-300 ${
              showButtons
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="relative bottom-2 left-1/2 transform -translate-x-1/2 w-full flex justify-center h-16">
        <button className="inline-flex items-center bg-blue-950 border-0 py-1 px-3 text-white focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:text-white">
          <a
            className="mr-5 hover:text-white"
            href="https://drive.google.com/file/d/143dIO8vG_u0Q6LvQnt_1cZ6HXJ-M5Y3Y/view?usp=sharing"
          >
            Para ver mi curriculum completo click aqui
          </a>
        </button>
      </div>
    </section>
  );
};

export default CarouselExperiencias;
