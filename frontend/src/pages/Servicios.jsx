import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Import icons
import iconInvestigacion from "../images/Icons/search_50dp.svg";
import iconIdeacion from "../images/Icons/palette.svg";
import iconPrototipado from "../images/Icons/view_in_ar_50dp.svg";
import iconProduccion from "../images/Icons/precision_manufacturing.svg";
import iconFlecha from "../images/Icons/flecha.svg";

const PHASES = [
  {
    order: "01",
    title: "Investigación",
    description: "Inmersión profunda en las restricciones técnicas y comportamientos del usuario para establecer una base sólida de diseño.",
    icon: iconInvestigacion,
    icon2: iconFlecha,
    action1: "Análisis de usuario",
    action2: "Análisis de mercado",
    action3: "Auditoría de materiales"
  },
  {
    order: "02",
    title: "Ideación",
    description: "Exploración de posibilidades estéticas y conceptos estructurales a través de una iteración visual rápida.",
    icon: iconIdeacion,
    icon2: iconFlecha,
    action1: "Sketches",
    action2: "Moodboard",
    action3: "Conceptos 3D"
  },
  {
    order: "03",
    title: "Prototipado",
    description: "Refinamiento de la forma física y digital para asegurar la excelencia ergonómica y visual del objeto.",
    icon: iconPrototipado,
    icon2: iconFlecha,
    action1: "Renders HD",
    action2: "Animaciones",
    action3: "Mockups e impresión 3D"
  },
  {
    order: "04",
    title: "Producción",
    description: "Ingeniería para la manufactura y supervisión de la transición del diseño a la planta de producción.",
    icon: iconProduccion,
    icon2: iconFlecha,
    action1: "Ingeniería de detalle",
    action2: "Planos técnicos",
    action3: "Supervisión de producción"
  }
];

function Servicios() {
  const navigate = useNavigate();

  const handleNavigation = (filter) => {
    navigate("/proyectos", { state: { filter } });
    window.scrollTo(0, 0);
  };

  return (
    <main className="servicios">
      <header className="servicios__header">
        <div>
        <motion.h1 
          className="servicios__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          De Masa
        </motion.h1>
        <motion.h1 
          className="servicios__title2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          A forma
        </motion.h1>
        </div>
        <div className="srvicios__subtitle-container"> 
          <p className="servicios__subtitle">La arquitectura es la búsqueda de la forma perfecta.<br/> la transformación de ideas en objetos tangibles y funcionales.<br/></p>
        </div>
      </header>

      <section className="servicios__phases">
        {PHASES.map((phase, index) => (
          <motion.article 
            key={phase.order}
            className="servicios__phase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="servicios__phase-num">{phase.order}</span>
            <h3 className="servicios__phase-title">
              <img src={phase.icon} alt="icon" className="servicios__phase-icon" />
              {phase.title}
            </h3>
            <p className="servicios__phase-desc">{phase.description}</p>

            <div className="servicios__phase-icon-container">
              <img src={phase.icon2} alt="icon" className="servicios__phase-icon" />
              <p className="servicios__phase-icon-text">{phase.action1}</p>
            </div>
             <div className="servicios__phase-icon-container">
              <img src={phase.icon2} alt="icon" className="servicios__phase-icon" />
              <p className="servicios__phase-icon-text">{phase.action2}</p>
            </div>
             <div className="servicios__phase-icon-container">
              <img src={phase.icon2} alt="icon" className="servicios__phase-icon" />
              <p className="servicios__phase-icon-text">{phase.action3}</p>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="servicios__nav-sections">
        <motion.div 
          className="servicios__nav-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => handleNavigation("Producto")}
        >
          <span className="servicios__nav-label">Portafolio</span>
          <h2 className="servicios__nav-title">Diseño de Producto</h2>
        </motion.div>

        <motion.div 
          className="servicios__nav-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => handleNavigation("Mobiliario")}
        >
          <span className="servicios__nav-label">Portafolio</span>
          <h2 className="servicios__nav-title">Diseño de Mobiliario</h2>
        </motion.div>
      </section>

      <motion.span
        className="servicios__deco-number"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        04
      </motion.span>
    </main>
  );
}

export default Servicios;
