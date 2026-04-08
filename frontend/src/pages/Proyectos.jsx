import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Images from Mobiliario
import catador from "../images/Proyectos/Mobiliario/Coleccion Catador  v2 R 1.webp";
import milier from "../images/Proyectos/Mobiliario/Milier R B 5.webp";
import somm from "../images/Proyectos/Mobiliario/Somm R B 3.webp";
import sumi from "../images/Proyectos/Mobiliario/Sumi R B 1.webp";
import ypsilon from "../images/Proyectos/Mobiliario/MesaYpsilon_Perspectiva Frontal.webp";
import nexy from "../images/Proyectos/Mobiliario/NEXYRENDERAM02.webp";
import nomada from "../images/Proyectos/Mobiliario/Nomada Tierra 5.webp";

// Other folders as placeholders for categories
import sinergia from "../images/Proyectos/Sinergia/union-final.webp";
import sayar from "../images/Proyectos/Sayar/sayar-final.webp";
import nisa from "../images/Proyectos/Nisa/NISA_Final.webp";
import carys from "../images/Proyectos/Carys/carys-final.webp";

const CATEGORIES = ["Todos", "Exhibiciones", "Animaciones", "Mobiliario", "Producto", "Arte", "Colaboraciones"];

const PROJECTS_DATA = [
  { id: 1, title: "Colección Catador", category: "Mobiliario", src: catador },
  { id: 2, title: "Mesa Ypsilon", category: "Mobiliario", src: ypsilon },
  { id: 3, title: "Silla Milier", category: "Mobiliario", src: milier },
  { id: 4, title: "Somm Series", category: "Mobiliario", src: somm },
  { id: 5, title: "Sumi Desk", category: "Mobiliario", src: sumi },
  { id: 6, title: "NEXY Workspace", category: "Mobiliario", src: nexy },
  { id: 7, title: "Nómada Tierra", category: "Mobiliario", src: nomada },
  { id: 8, title: "Sinergia Pavilion", category: "Exhibiciones", src: sinergia },
  { id: 9, title: "Sayar Collection", category: "Colaboraciones", src: sayar },
  { id: 10, title: "Nisa Motion", category: "Animaciones", src: nisa },
  { id: 11, title: "Carys Piece", category: "Arte", src: carys },
  { id: 12, title: "Brutalist Study", category: "Exhibiciones", src: catador }, // Reusing catador as placeholder for others
];

function Proyectos() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("Todos");

  useEffect(() => {
    if (location.state?.filter) {
      setActiveFilter(location.state.filter);
    }
  }, [location.state]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") return PROJECTS_DATA;
    return PROJECTS_DATA.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="proyectos">
      <header className="proyectos__header">
        <motion.h1 
          className="proyectos__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Proyectos
        </motion.h1>
        <motion.p 
          className="proyectos__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Explorando la intersección entre el material puro y la forma intencional. 
          Un archivo curado de diseño industrial, arquitectura y artesanía digital.
        </motion.p>
      </header>

      <nav className="proyectos__filters-container">
        <ul className="proyectos__filters">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <button
                className={`proyectos__filter-btn ${activeFilter === category ? "proyectos__filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <motion.div 
        layout
        className="proyectos__grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="proyectos__card"
            >
              <div className="proyectos__image-container">
                <img 
                  src={project.src} 
                  alt={project.title} 
                  className="proyectos__image" 
                  loading="lazy"
                />
              </div>
              <div className="proyectos__card-content">
                <span className="proyectos__card-category">{project.category}</span>
                <h3 className="proyectos__card-title">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
        
      </motion.div>
      {/* Número decorativo */}
          <motion.span
            className="proyectos__deco-number"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            03
          </motion.span>
    </main>
  );
}

export default Proyectos;
