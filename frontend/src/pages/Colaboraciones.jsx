import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ModalColaboraciones from "../components/Modal/ModalColaboraciones";

//images from marcas
import concrete from "../images/Colaboraciones/Marcas/ConcreteLogo.webp";
import gepetto from "../images/Colaboraciones/Marcas/GepettoLogo.webp";
import ladrillos from "../images/Colaboraciones/Marcas/ladrillosMexico.png";
import rijaya from "../images/Colaboraciones/Marcas/RIJAYA.png";
import sorribes from "../images/Colaboraciones/Marcas/SorribesLogo.webp";
import talateca from "../images/Colaboraciones/Marcas/TalatecaLogo.webp";

//images from diseño web
import artboom from "../images/Colaboraciones/DiseñoWeb/artboom.png";


const CATEGORIES = ["Todos", "Diseño Web", "Diseñadores", "Marcas",];

const PROJECTS_DATA = [
  { id: 1, title: "Concrete Workshop MX", category: "Marcas", name: "Concrete", src: concrete, description: "Un taller de arquitectura especializado en terrazo y concreto. Con líneas de trabajo en elementos arquitectónicos, piezas de gran formato, decorativas y mobiliario urbano."},
  { id: 2, title: "Gepetto. Diseño en madera", category: "Marcas", name: "Gepetto", src: gepetto, description: "Especializada en la fabricación de mobiliario bajo el principio de la madera como un material noble, resistente, decorativo e importante."},
  { id: 3, title: "Ladrillos de México", category: "Marcas", name: "Ladrillos", src: ladrillos, description: "Especializada en el manejo de barro rojo, piezas de acabados arquitectónicos, piezas de diseño decorativo y luminarias."},
  { id: 4, title: "Rijaya MX", category: "Marcas", name: "Rijaya", src: rijaya, description: "Especializados en el diseño y la producción de Racks, lockers, muebles metálicos y estanterías."},
  { id: 5, title: "Sorribes", category: "Marcas", name: "Sorribes", src: sorribes, description: "Desde Valencias, una marca de artesanos maestros en el manejo del vidrio."},
  { id: 6, title: "Talateca", category: "Marcas", name: "Talateca", src: talateca, description: "Una tradición familiar de más de cien años dentro de la industria alfarera."},
  { id: 7, title: "Artboom. Design studio & Web Development", category: "Diseño Web", name: "Artboom", src: artboom, description: ""},
  
  // Reusing catador as placeholder for others
];

function Colaboraciones() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (location.state?.filter) {
      setActiveFilter(location.state.filter);
    }
  }, [location.state]);

   const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") return PROJECTS_DATA;
    return PROJECTS_DATA.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="colaboraciones">
      <header className="colaboraciones__header">
        <motion.h1 
          className="colaboraciones__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Colaboraciones
        </motion.h1>
        <motion.p 
          className="colaboraciones__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Explorando la intersección entre el material puro y la forma intencional. 
          Un archivo curado de diseño industrial, artesanía digital y arte.
        </motion.p>
      </header>

      <nav className="colaboraciones__filters-container">
        <ul className="colaboraciones__filters">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <button
                className={`colaboraciones__filter-btn ${activeFilter === category ? "colaboraciones__filter-btn--active" : ""}`}
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
        className="colaboraciones__grid"
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
              className="colaboraciones__card"
              onClick={() => handleOpenModal(project)}
            >
              <div className="colaboraciones__image-container">
                <img 
                  src={project.src} 
                  alt={project.title} 
                  className="colaboraciones__image" 
                  loading="lazy"
                />
                <p className="colaboraciones__marca-title">{project.name}</p>
              </div>
              <div className="colaboraciones__card-content">
                <span className="colaboraciones__card-category">{project.category}</span>
                <h3 className="colaboraciones__card-title">{project.title}</h3>
                <p className="colaboraciones__card-description">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
        
      </motion.div>

      <ModalColaboraciones
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
      {/* Número decorativo */}
          <motion.span
            className="colaboraciones__deco-number"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            04
          </motion.span>
    </main>
  );
}

export default Colaboraciones;