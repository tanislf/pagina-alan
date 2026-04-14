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
    description: "Análisis profundo del usuario, sus necesidades y contexto. Defino el problema real antes de buscar soluciones.",
    icon: iconInvestigacion,
    icon2: iconFlecha,
    actions: ["Brief de Diseño", "User Research"]
  },
  {
    order: "02",
    title: "Ideación",
    description: "Exploración creativa mediante bocetos rápidos, moodboards y conceptos divergentes.",
    icon: iconIdeacion,
    icon2: iconFlecha,
    actions: ["Sketches", "Conceptos 3D"]
  },
  {
    order: "03",
    title: "Diseño 3D",
    description: "Modelado 3D en diversos programas, para concretar conceptos y propuestas.",
    icon: iconPrototipado,
    icon2: iconFlecha,
    actions: ["Renders HD", "Modelos 3D", "Animaciones"]
  },
  {
    order: "04",
    title: "Prototipado",
    description: "Materialización de ideas en prototipos funcionales, en diversos materiales. Iteración basada en testing real.",
    icon: iconProduccion,
    icon2: iconFlecha,
    actions: ["Prototipos funcionales", "Maquetas de apariencia", "Testing", "Planos técnicos"]
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

            {phase.actions.map((action, i) => (
              <div key={i} className="servicios__phase-icon-container">
                <img src={phase.icon2} alt="icon" className="servicios__phase-icon" />
                <p className="servicios__phase-icon-text">{action}</p>
              </div>
            ))}
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
          <span className="servicios__nav-label">Desde el concepto hasta la manufactura. Productos físicos que resuelven problemas reales.</span>
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
          <span className="servicios__nav-label">Piezas de mobiliario que combinan ergonomía, estética y durabilidad.</span>
        </motion.div>
      </section>

      <motion.span
        className="servicios__deco-number"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        05
      </motion.span>
    </main>
  );
}

export default Servicios;
