import Navbar from "../components/Navbar/Navbar.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
// import Portfolio from "../pages/Portfolio.jsx";
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
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
        <Footer />
      </BrouserRouter>
    </>
  );
}

export default App;
