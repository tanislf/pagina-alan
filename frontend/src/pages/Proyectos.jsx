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
import ypsilon from "../images/Proyectos/Mobiliario/MesaYpsilon_Perspectiva Frontal.webp";
import nexy from "../images/Proyectos/Mobiliario/NEXYRENDERAM02.webp";
import nomada from "../images/Proyectos/Mobiliario/Nomada Tierra 5.webp";



import ModalProyectos from "../components/Modal/ModalProyectos";

const CATEGORIES = ["Todos", "Exhibiciones", "Animaciones", "Mobiliario", "Producto", "Arte"];

const PROJECTS_DATA = [
  //mobiliario
  { id: 1, year: 2026, title: "Colección Catador", category: "Mobiliario", src: catador,  tool: "Modelado en Rhinoceros, renderizado en V-Ray.", description: "Siempre se dice que el vino tiene un buen cuerpo, con notas sutiles. Una serie de mobiliario compuesta por una mesa que exhibe y sugiere, pero con aspectos discretos, que desea ocultar. Una silla más honesta, abierta y amable, una estantería para botellas y copas. Un acompañante silencioso, pero notorio. Catador, usa la mezcla de tonos como una herramienta de discurso simbólico." },
  { id: 2, year: 2022, title: "Mesa Ypsilon", category: "Mobiliario", src: ypsilon,  tool: "Fabricado con madera de Katalox, Onix Travertino.", description: "Una mesa de comedor con un enfoque sustentable para la fabricación, buscando optimizar el uso de los recursos, además de ser elaborado con materiales duraderos, locales y de bajo impacto." },
  { id: 3, year: 2024, title: "Nexy", category: "Mobiliario", src: nexy,  tool: "Modelado en SolidWorks, renderizado en V-Ray.", description: "Mesa modular multifuncional. Un mueble versátil, con una facilidad de montaje.Un diseño minimalista y elegante, enfocado en el aprovechamiento y optimización de recursos, así como en la transportabilidad." },
  { id: 4, year: 2025, title: "Nómada", category: "Mobiliario", src: nomada, tool: "Elaborado con madera de pino y triplay de pino. Identidad gráfica por: Soleónico.", description: "Repisero modular, diseñado para ser fácilmente transportable y resistente. Una solución accesible que optimiza el uso del espacio y mejora la organización en entornos reducidos."},
//exhibicion
  { id: 5, year: 2025, title:"Sinergia", category:"Exhibiciones", src: sinergia, colaboration: "Colaboración con Juskani Alonso, Alejandra Ramírez y Ray Liebano. Identidad gráfica por Soleónico.", exibition: "ICFF+WantedDesign, Nueva York, Estados Unidos. 2025. Nude Feria Hábitat de Valencia, España. 2025", tool: "Elaborado en vidrio y piedra volcánica por Vidrios Sorribes y Artesanías Ángel.", description: "Luminaria decorativa. Con tres piezas de vidrio, que con su propia esencia, se unen para formar una columna de luz. Símbolo de la colaboración e individualidad, que crea un conjunto armónico."},
  { id: 6, year: 2023, title:"Sayar", category:"Exhibiciones", src: sayar, colaboration: "Colaboración con MUT Design.", exibition: "Salone Satellite de Milán, Italia. 2023. Nude Feria Hábitat de Valencia, España. 2023Museo Regional de Cholula, México. 2023", tool: "Elaborado con Barro rojo por Ladrillos de México.", description: "Es una obra inspirada en la idea de \"explosión\" y en las cicatrices que deja, simbolizando la fuerza transformadora de la vida frente a lo artificial. A través de la ruptura y la imperfección, emerge una nueva belleza." },
  { id: 7, year: 2024, title:"Nisa", category:"Exhibiciones", src: nisa, colaboration: "Colaboración con Terben Pinson y Erick Serrano.", exibition: "ICFF+WantedDesign, Nueva York, Estados Unidos. 2024", tool:"Elaborado en lámina cal.14 por Rijaya Mx.", description: "Un taburete multifuncional museográfico. Inspirado en un elemento importante de la sociedad mexicana, los lavaderos. Buscando revalorar una actividad tan necesaria y ordinaria, con un significado cultural." },
  { id: 8, year: 2025, title:"Carys", category:"Exhibiciones", src: carys, colaboration: "Colaboración con Clap Studio, Daniela Denice y Daniela Dávila. Identidad gráfica por Soleónico.", exibition: "ICFF+WantedDesign, Nueva York, Estados Unidos. 2025. Nude Feria Hábitat de Valencia, España. 2025", tool:"Fabricado en vidrio y piedra volcánica por Vidrios Sorribes y Artesanías Ángel.", description: "Un florero. Representación del cariño, unión e intimidad. Es un equilibrio entre la solidez y la sutileza, un objeto que captura la dualidad de una relación: La fuerza y la fragilidad." },
  { id: 9, year: 2024, title:"Cafar", category:"Exhibiciones", src: cafar, colaboration: "Colaboración con Hiroshi Tsunoda.", exibition: "ICFF+WantedDesign, Nueva York, Estados Unidos. 2024. Espacio Diseño, Museo Amparo; Puebla, México 2025", tool:"Elaborado en Talavera por Talateca Mexican Pottery.", description: "Es un set de tres tazas modulares inspirado en la cultura y tradición mexicana. Destaca por su elegancia, funcionalidad e interacción, reflejando la riqueza cultural e histórica de México. Integrando elementos como: Café de altura, la pirámide de Cholula y la cerámica talavera." },
  { id: 10, year: 2025, title:"Cafar Black", category:"Exhibiciones", src: cafar2, colaboration: "Colaboración con Hiroshi Tsunoda.", exibition: "", tool:"Elaborado en Talavera por Talateca Mexican Pottery.", description: "Versión monocromática de la serie Cafar, enfatizando la forma y la textura sobre el color." },
  { id: 11, year: 2026, title:"Cactácea", category:"Exhibiciones", src: cactacea, colaboration: "Colaboración con Berto Sánchez, Xinkanshi, Lorena Predes y Ray Liebano.", exibition: "ICFF+WantedDesign, Nueva York, Estados Unidos. 2026", tool:"Fabricado en talavera por Talateca Mexican Pottery.", description: "Este objeto de configuración vertical propone una reinterpretación contemporánea del tótem tradicional, conformado por secciones modulares. Su lenguaje formal surge de la abstracción de diversas cactáceas propias de México, adaptadas a un contexto de diseño contemporáneo. El objeto funciona como una metáfora de la identidad cultural mexicana; múltiples formas, historias y características que, al integrarse, crean una expresión colectiva." },
  { id: 12, year: 2024, title:"Modubo", category:"Exhibiciones",  src: modubo, colaboration: "Colaboración con MUT Design.", exibition: "Inédito, Design Week CDMX. México 2024", tool:"Fabricado en concreto con terrazo por Concrete Workshop Mx.", description: "De “modular” y “tubo”, es una pieza modular de concreto. Con un diseño directo, minimalista y robusto. Los módulos pueden unirse para funcionar como: Taburete, almacenamiento, repisas, estructuras decorativas o separador de ambientes." },
  //arte
  { id: 13, year: 2025, title:"Soleil", category:"Arte", src: soleil, tool:"Óleo sobre tela.", description: "El fuego siempre me ha impresionado; las llamas que danzan, se mueven y se mezclan generando figuras, formas e incluso colores. A veces revelan mucho más de lo que crees; el mundo que vemos es solo lo que nosotros entendemos de él." },
  { id: 14, year: 2025, title:"Laura", category:"Arte", src: laura, tool:"Óleo sobre tela.", description: "Una mujer te ve, la miras de vuelta… Solo la ves a ella, no importa nada más. Ella te invita, la aceptas… No importa nada más. Pero solo la ves cuando cierras los ojos." },
  { id: 15, year: 2025, title:"Bosque Azul", category:"Arte", src: bosqueAzul, tool:"Óleo sobre tela.", description: "Un gatito nos observa, ¿o será que nosotros somos observados? No puedo ver sus ojos; las luces y el bosque me rodean, no me dejan ver… ¿Dónde estamos? ¿Será que debo seguirlo? Un bosque mágico se alza frente a nosotros, ¿qué piensas al verlo?" },
  //producto
  { id: 16, year: 2026, title: "Prometeo", category:"Producto", src: prometeo, tool:"Modelado y renderizado con Blender.", description: "Luminaria ambiental, el fuego sagrado que ha sido traído desde el cielo, y hoy toca lo terrenal. Un objeto que busca representar lo mortal, lo divino, lo asombroso y lo cotidiano. Busca recordarnos tanto a lo religioso como a lo común, la base, con colores rojos, naranjas y amarillos, nos recuerda a una fogata, el posible primer uso del fuego para la humanidad." },
  { id: 17, year: 2025, title: "Tower of Power", category:"Producto", src: towerOfPower, tool:"Elaborado con madera de pino, acero inoxidable.", description: "Los mejores equipos construyen grandes cosas juntos. Pero alcanzar o incluso superar los objetivos establecidos impone grandes exigencias para todos los implicados. '¿Cómo queremos hablar entre nosotros?', '¿Qué es importante para nosotros en nuestra colaboración?' – estas y otras preguntas deben responderse juntas. Las respuestas son la clave para un 'trabajo en equipo' disfrutable. Un juguete didáctico para fomentar el trabajo en equipo." },
  { id: 18, year: 2025, title: "Lego Duck", category:"Producto", src: legoDuck, tool:"Fabricado en triplay de madera de pino.", description: "El pato LEGO es un set de juguetes de madera lanzado en 1935. Contiene un modelo de madera de un pato y fue uno de los primeros juguetes fabricados por LEGO. También es, posiblemente, el juguete de madera más popular jamás producido por LEGO. Cuenta con ruedas rodantes y una cuerda con un mando para poder tirar." },
  { id: 19, year: 2025, title: "Bauspiel", category:"Producto", src: bauspiel, tool:"Fabricado con madera de pino", description: "En 1924, Alma Siedhoff-Buscher diseñó Bauspiel. \"Nuestros juguetes (Bauhaus): la forma - simple - inconfundiblemente clara y definida - la variedad y la estimulación son creados por los propios niños a través de la combinación, la construcción. En consecuencia, un desarrollo sostenido\"." },
  { id: 20, year: 2025, title: "Anhelos Diversos", category:"Producto", src: anhelosDiversos, tool:"Modelado en Rhinoceros y renderizado en V-Ray.", description: "Una colección inspirada en la elegancia de la talavera, buscando generar piezas elegantes, piezas que invitan a la apreciación. Compuesto por 3 productos: Silvia, un florero, representante de la naturaleza, lo inorgánico que sostiene y lo orgánico que florece; Sia, una taza, símbolo de la dualidad entre lo intelectual/lógico y la intuición; Selene, una luminaria ambiental que busca recordarnos el movimiento y la atmósfera que puede generar la luna a lo largo de sus fases." },
  { id: 21, year: 2024, title: "Demubo", category:"Producto", src: demubo, tool:"Fabricado en MDF y Triplay de madera de pino, renders en Blender.", description: "Una pieza que forma parte de la familia “Modubo”, su nombre es un juego de palabras, haciendo uso del prefijo “Demi” y Modubo. Una pieza nacida tras múltiples iteraciones jugando con las figuras básicas. Un objeto más decorativo, que busca generar espacios diferentes, estructuras para almacenamiento y tótems con un uso más similar a celosías." },
].sort((a, b) => b.year - a.year);

const ProjectCard = ({ project, onOpenModal }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = (e) => {
    e.stopPropagation();
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="proyectos__card"
      onClick={() => onOpenModal(project)}
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
        <span className="proyectos__card-tool">{project.tool}</span>
        
        {/* detalles de exhibicion */}
        {project.category === "Exhibiciones" && project.exibition && (
          <div className="proyectos__accordion">
            <button 
              className={`proyectos__accordion-toggle ${isAccordionOpen ? "active" : ""}`}
              onClick={toggleAccordion}
            >
              {isAccordionOpen ? "- OCULTAR" : "+ DETALLES DE EXHIBICIÓN"}
            </button>
            <AnimatePresence>
              {isAccordionOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="proyectos__accordion-content"
                >
                  <p>{project.exibition}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* detalles de colaboración */}
         {project.category === "Exhibiciones" && project.colaboration && (
          <div className="proyectos__accordion">
            <button 
              className={`proyectos__accordion-toggle ${isAccordionOpen ? "active" : ""}`}
              onClick={toggleAccordion}
            >
              {isAccordionOpen ? "- OCULTAR" : "+ DETALLES DE COLABORACIÓN"}
            </button>
            <AnimatePresence>
              {isAccordionOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="proyectos__accordion-content"
                >
                  <p>{project.colaboration}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.article>
  );
};

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
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={handleOpenModal} 
            />
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
