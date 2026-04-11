import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//Images from exhibiciones
import sayar from "../images/Proyectos/Exhibiciones/Sayar/sayar-final.webp";
import cafar from "../images/Proyectos/Exhibiciones/Cafar/cafar-final.webp";
import cafar2 from "../images/Proyectos/Exhibiciones/Cafar/cafarnegro-final.webp";
import modubo from "../images/Proyectos/Exhibiciones/Modubo/modubo-final.webp";
import nisa from "../images/Proyectos/Exhibiciones/Nisa/NISA_Final.webp";
import carys from "../images/Proyectos/Exhibiciones/Carys/carys-final.webp";
import sinergia from "../images/Proyectos/Exhibiciones/Sinergia/union-final.webp";
import cactacea from "../images/Proyectos/Exhibiciones/Cactácea/Cactacea.webp";

//images from arte
import soleil from "../images/Proyectos/Arte/Soleil/soleil.webp";
import laura from "../images/Proyectos/Arte/Laura/laura.webp";
import bosqueAzul from "../images/Proyectos/Arte/Bosque-azul/bosque-azul.webp";

//images from animaciones

//images from producto
import prometeo from "../images/Proyectos/Producto/Prometeo/Prometeo.webp";
import towerOfPower from "../images/Proyectos/Producto/Tower-of-Power/tower.webp";
import legoDuck from "../images/Proyectos/Producto/Lego-duck/lego-duck.webp";
import bauspiel from "../images/Proyectos/Producto/Bauspiel/bauspiel.webp";
import anhelosDiversos from "../images/Proyectos/Producto/Anhelos-diversos/Anhelos-Diversos.webp";
import demubo from "../images/Proyectos/Producto/Demubo/Demubo.webp";

// Images from Mobiliario
import catador from "../images/Proyectos/Mobiliario/Coleccion Catador  v2 R 1.webp";
import milier from "../images/Proyectos/Mobiliario/Milier R B 5.webp";
import somm from "../images/Proyectos/Mobiliario/Somm R B 3.webp";
import sumi from "../images/Proyectos/Mobiliario/Sumi R B 1.webp";
import ypsilon from "../images/Proyectos/Mobiliario/MesaYpsilon_Perspectiva Frontal.webp";
import nexy from "../images/Proyectos/Mobiliario/NEXYRENDERAM02.webp";
import nomada from "../images/Proyectos/Mobiliario/Nomada Tierra 5.webp";



import ModalProyectos from "../components/Modal/ModalProyectos";

const CATEGORIES = ["Todos", "Exhibiciones", "Animaciones", "Mobiliario", "Producto", "Arte"];

const PROJECTS_DATA = [
  { id: 1, year: 2026, title: "Colección Catador", category: "Mobiliario", src: catador, description: "Una serie de mobiliario inspirada en la cultura vinícola, explorando la elegancia de la madera y las formas fluidas." },
  { id: 2, year: 2022, title: "Mesa Ypsilon", category: "Mobiliario", src: ypsilon, description: "Mesa de diseño minimalista que utiliza la geometría estructural para crear un soporte ligero pero robusto." },
  { id: 3, year: 2025, title: "Milier", category: "Mobiliario", src: milier, description: "Pieza de mobiliario que fusiona texturas industriales con acabados artesanales para un ambiente contemporáneo." },
  { id: 4, year: 2025, title: "Somm", category: "Mobiliario", src: somm, description: "Exploración de volúmenes y proporciones en una pieza diseñada para la interacción táctil y visual." },
  { id: 5, year: 2025, title: "Sumi", category: "Mobiliario", src: sumi, description: "Inspirada en el minimalismo japonés, esta pieza destaca por su simplicidad y el uso honesto de los materiales." },
  { id: 6, year: 2024, title: "Nexy", category: "Mobiliario", src: nexy, description: "Un sistema modular que se adapta a diversos espacios de trabajo, priorizando la ergonomía y la función." },
  { id: 7, year: 2025, title: "Nómada", category: "Mobiliario", src: nomada, description: "Mobiliario portátil diseñado para el estilo de vida actual, enfocado en la ligereza y la facilidad de transporte." },
  { id: 8, year: 2025, title: "Sinergia", category: "Exhibiciones", src: sinergia, description: "Instalación que explora la conexión entre diferentes medios artísticos y su impacto en el espectador." },
  { id: 9, year: 2023, title: "Sayar", category: "Exhibiciones", src: sayar, description: "Diseño de exhibición para marcas de lujo, creando una narrativa visual coherente y atractiva." },
  { id: 10, year: 2024, title: "Nisa", category: "Exhibiciones", src: nisa, description: "Pabellón temporal que utiliza estructuras ligeras para crear un juego de sombras y luces naturales." },
  { id: 11, year: 2025, title: "Carys", category: "Exhibiciones", src: carys, description: "Exhibición enfocada en la sostenibilidad, utilizando materiales reciclados en estructuras complejas." },
  { id: 12, year: 2024, title: "Cafar", category: "Exhibiciones", src: cafar, description: "Stand modular diseñado para ferias internacionales, destacando por su versatilidad y rapidez de montaje." },
  { id: 13, year: 2025, title: "Cafar Black", category: "Exhibiciones", src: cafar2, description: "Versión monocromática de la serie Cafar, enfatizando la forma y la textura sobre el color." },
  { id: 14, year: 2026, title: "Cactácea", category: "Exhibiciones", src: cactacea, description: "Inspirada en las formas orgánicas de la flora desértica, esta exhibición busca armonizar con el paisaje." },
  { id: 15, year: 2024, title: "Modubo", category: "Exhibiciones", src: modubo, description: "Módulo de exposición versátil que permite múltiples configuraciones espaciales para diversos tipos de arte." },
  { id: 16, year: 2025, title: "Soleil", category: "Arte", src: soleil, description: "Obra artística que utiliza el vidrio y la luz para crear una experiencia inmersiva de reflejos y color." },
  { id: 17, year: 2025, title: "Laura", category: "Arte", src: laura, description: "Escultura de gran formato que estudia la tensión entre los materiales rígidos y las formas curvas." },
  { id: 18, year: 2025, title: "Bosque Azul", category: "Arte", src: bosqueAzul, description: "Instalación abstracta que busca evocar la paz y el misterio de un entorno forestal nocturno." },
  { id: 19, year: 2026, title: "Prometeo", category: "Producto", src: prometeo, description: "Dispositivo inteligente diseñado para la eficiencia energética en el hogar moderno." },
  { id: 20, year: 2025, title: "Tower of Power", category: "Producto", src: towerOfPower, description: "Estación de carga vertical que combina funcionalidad técnica con una estética industrial pulida." },
  { id: 21, year: 2025, title: "Lego Duck", category: "Producto", src: legoDuck, description: "Reinterpretación lúdica de un ícono clásico, explorando la modularidad y la nostalgia." },
  { id: 22, year: 2025, title: "Bauspiel", category: "Producto", src: bauspiel, description: "Juego de construcción arquitectónico para todas las edades, enfocado en el aprendizaje espacial." },
  { id: 23, year: 2025, title: "Anhelos Diversos", category: "Producto", src: anhelosDiversos, description: "Colección de objetos decorativos que exploran la diversidad cultural a través de la forma." },
  { id: 24, year: 2024, title: "Demubo", category: "Producto", src: demubo, description: "Herramienta de diseño compacta enfocada en la precisión y la durabilidad industrial." },
].sort((a, b) => b.year - a.year);

function Proyectos() {
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
          Un archivo curado de diseño industrial, artesanía digital y arte.
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
              onClick={() => handleOpenModal(project)}
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
                
                <span className="proyectos__card-category">{project.year} | {project.category}</span>
                <h3 className="proyectos__card-title">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
        
      </motion.div>

      <ModalProyectos 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        project={selectedProject} 
      />
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
