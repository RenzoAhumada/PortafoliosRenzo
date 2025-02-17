import { useState } from "react";
import ProyectosRealizados from "./proyectosRealizados";
import EstududiosHabilidades from "./estududiosHabilidades";
import Experiencias from "./experiencias";

const Button = () => {
  const [mostrarPrimeraSeccion, setMostrarPrimeraSeccion] = useState(true);

  const toggleSeccion = () => {
    
    setMostrarPrimeraSeccion(!mostrarPrimeraSeccion);
  };

  return (
    <div className="grid place-items-center min-h-screen">
       <div className="pt-6">
        <button
          onClick={toggleSeccion}
          className="object-top bg-blue-950 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Cambiar Sección
        </button>
      </div>
      {mostrarPrimeraSeccion ? (
        <EstududiosHabilidades/>
      ) : (
       <Experiencias/>
      )}
    </div>
  );
};

export default Button;
