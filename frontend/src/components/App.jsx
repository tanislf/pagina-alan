import Navbar from "../components/Navbar/Navbar.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Proyectos from "../pages/Proyectos.jsx";
import Servicios from "../pages/Servicios.jsx";
import Colaboraciones from "../pages/Colaboraciones.jsx";
import Footer from "./Footer/Footer.jsx";

import {
  BrowserRouter as BrouserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrouserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/colaboraciones" element={<Colaboraciones />} />
        </Routes>
        <Footer />
      </BrouserRouter>
    </>
  );
}

export default App;
