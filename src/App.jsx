import Proyectos from "./components/proyectos";
import Footer from "./components/footer";
import EstudiosHabilidades from "./components/estududiosHabilidades";
import ProyectosRealizados from "./components/proyectosRealizados";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experiencias from "./components/experiencias";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/PortafoliosRenzo">
        <Proyectos />
        <ProyectosRealizados />

        <Routes>
          <Route path="/" element={<EstudiosHabilidades />} />
          <Route
            path="/estudiosYHabilidades"
            element={<EstudiosHabilidades />}
          />
          <Route path="/experiencias" element={<Experiencias />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
