import Proyectos from "./components/proyectos";
import Footer from "./components/footer";
import EstudiosHabilidades from "./components/estududiosHabilidades";
import ProyectosRealizados from "./components/proyectosRealizados";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experiencias from "./components/experiencias";
import Button from "./components/button";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/PortafoliosRenzo">
        <Proyectos />
        <ProyectosRealizados />
        <Button></Button>
        <Footer />
      </Router>
    </>
  );
}

export default App;
