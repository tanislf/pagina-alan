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

//images from diseñadores
// import berto from "../images/Colaboraciones/Diseñadores/BertoSanchez.png";
import clap from "../images/Colaboraciones/Diseñadores/ClapStudio.png";
import juskani from "../images/Colaboraciones/Diseñadores/JuskaniAlonso.png";
import mut from "../images/Colaboraciones/Diseñadores/MutDesign.png";
import hiroshi from "../images/Colaboraciones/Diseñadores/Hiroshi.png";
import terben from "../images/Colaboraciones/Diseñadores/TerbenPinson.png";

//images from diseño web
import artboom from "../images/Colaboraciones/DiseñoWeb/artboom.png";


const CATEGORIES = ["Todos", "Diseño Web", "Diseñadores", "Marcas",];

const PROJECTS_DATA = [
  { id: 1, title: "Concrete Workshop MX", category: "Marcas", name: "Concrete", src: concrete, description: "Un taller de arquitectura especializado en terrazo y concreto. Con líneas de trabajo en elementos arquitectónicos, piezas de gran formato, decorativas y mobiliario urbano.", description2: "Participamos en el desarrollo de una exhibición colectiva organizada por la Universidad Anáhuac Puebla para Inédito 2024, dentro de Design Week México. Colaboramos de manera integral en la conceptualización y materialización del proyecto Modubo, llevándolo de la idea a su ejecución final."},
  { id: 2, title: "Gepetto. Diseño en madera", category: "Marcas", name: "Gepetto", src: gepetto, description: "Especializada en la fabricación de mobiliario bajo el principio de la madera como un material noble, resistente, decorativo e importante.", description2: "El equipo de Sayar se distingue por su maestría en el trabajo artesanal de la madera. Hemos colaborado con ellos en el desarrollo del proyecto Nisa, exhibido en WantedDesign 2024. Además, han participado como asesores en distintos proyectos, destacando por su disposición para enfrentar y resolver desafíos de diseño complejos."},
  { id: 3, title: "Ladrillos de México", category: "Marcas", name: "Ladrillos", src: ladrillos, description: "Especializada en el manejo de barro rojo, piezas de acabados arquitectónicos, piezas de diseño decorativo y luminarias.", description2: "Nuestra primera colaboración como fabricantes del proyecto Sayar, primera pieza presentada en ferias de diseño internacionales como el SaloneSatellite en Milán, Nude Feria Hábitat Valencia 2023 y Design Week Puebla 2023. Esta colaboración destaca por el trabajo conjunto con artesanos y la creación de productos con acabados rústicos y naturales."},
  { id: 4, title: "Rijaya MX", category: "Marcas", name: "Rijaya", src: rijaya, description: "Especializados en el diseño y la producción de Racks, lockers, muebles metálicos y estanterías.", description2: "Colaboramos en la fabricación de Nisa, una pieza exhibida en WantedDesign 2024, participando junto a una marca especializada en el trabajo del metal, destacada por su capacidad para resolver procesos técnicos complejos."},
  { id: 5, title: "Sorribes", category: "Marcas", name: "Sorribes", src: sorribes, description: "Desde Valencias, una marca de artesanos maestros en el manejo del vidrio.", description2: "Colaboramos con una marca de artesanos especializados en el trabajo del vidrio, participando en el desarrollo de proyectos exhibidos en WantedDesign 2025 y en Nude Feria Hábitat Valencia."},
  { id: 6, title: "Talateca", category: "Marcas", name: "Talateca", src: talateca, description: "Una tradición familiar de más de cien años dentro de la industria alfarera.", description2: "Una de las marcas con las que hemos desarrollado una colaboración cercana, participando en la producción de piezas presentadas en importantes ferias de diseño. Destaca su participación en la fabricación de “Cafar” y la colección “Cactácea”."},
  { id: 7, title: "Artboom. Design studio & Web Development", category: "Diseño Web", name: "Artboom", src: artboom, description: "Un estudio multidisciplinario enfocado en el diseño y desarrollo web, con experiencia en la creación de experiencias digitales innovadoras y personalizadas.", description2: "Encargada del desarrollo de nuestra web, trabajando en conjunto con Sayar, para generar una página principal de la marca, donde podrán conocer a mayor profundidad sobre nuestros proyectos y sobre nosotros."},
  { id: 8, title: "Berto Sánchez", category: "Diseñadores", name: "Berto Sánchez", description: "Cofundador del prestigioso estudio MUT Design. ", description2: "El diseñador Valenciano Alberto Sanchez. Su nueva marca personal, es concebida como una extensión natural de su universo creativo. Un proyecto que despliega su propio lenguaje sin renunciar a los principios que le han definido en su trayectoria."},
  { id: 9, title: "Clap Studio", category: "Diseñadores", name: "Clap Studio", src: clap, description: "Estudio de diseño Valenciano.", description2: "Fundado por Jordi Iranzo y Ángela Montagud. Dedicado al diseño de interiores, diseño de producto e instalaciones de arte. Un estudio reconocido por diversos premios a nivel nacional e internacional, con trabajos en Arabia Saudi, Brasil, Hong Kong, Suiza, España y más."},
  { id: 10, title: "Juskani Alonso", category: "Diseñadores", name: "Juskani Alonso", src: juskani, description: "Diseñador Mexicano.", description2: "Especializados en el desarrollo de producto, mobiliario y arquitectura de interiores, combinan conocimientos, historias y experiencias, tomando en cuenta factores específicos para crear soluciones integrales y experiencias únicas de diseño."},
  { id: 11, title: "Mut Design", category: "Diseñadores", name: "Mut Design", src: mut, description: "Alberto Sánchez y Eduardo Villalón.", description2: "MUT Design Studio está formado por un equipo multidisciplinario. Su inspiración proviene de la naturaleza y de los objetos aparentemente prosaicos que componen el rompecabezas de su vida diaria, siempre fiel a los principios del diseño emocional."},
  { id: 12, title: "Hiroshi Tsunoda", category: "Diseñadores", name: "Hiroshi Tsunoda", src: hiroshi, description: "Diseñador Japonés.", description2: " Encuentra inspiración en su entorno, abordando los pequeños desafíos de la vida diaria mientras explora nuevos territorios conceptuales y formales. Con sede en Barcelona, centrado en soluciones innovadoras con una perspectiva multicultural. Su trabajo ha sido expuesto a nivel mundial, incluyendo Londres, Milán, París, Hangzhou y Moscú."},
  { id: 13, title: "Terben Pinson", category: "Diseñadores", name: "Terben Pinson", src: terben, description: "Diseñador Mexicano.", description2: "Ingeniero en innovación y diseño, cofundador de la marca Prannus, diseño mexicano contemporáneo, basado en luminarias decorativas, muebles y objetos utilitarios. También cuenta con su marca personal “Terben Pinson” en donde brinda sus servicios profesionales de diseño de producto y dirección creativa colaborando con startups y PYMES."},
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