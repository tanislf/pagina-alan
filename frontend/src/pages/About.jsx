
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import alan2 from "../images/Sobre-mi/alan2.webp";

const specs = [
  { label: "Disciplina", value: "Diseño Industrial" },
  { label: "Experiencia", value: "2+ Años" },
  { label: "Especialidad", value: "Producto & Mobiliario modular" },
  { label: "Herramientas", value: "SolidWorks, Rhino, V-Ray, Blender, Inventor, Photoshop" },
  { label: "Materiales", value: "Cerámica, Madera, Joyería, Plásticos, Metales" },
  { label: "Habilidades", value: "Modelado digital, Prototipado, Storytelling, Conceptualización" },
];

const awards = [
  { year: "2026", name: "Cactácea", event: "WantedDesign, Manhattan" },
  { year: "2025", name: "Exelencia académica. Mención honorífica", event: "Universidad Anáhuac Puebla" },
  { year: "2024", name: "Cafar", event: "WantedDesign, Manhattan" },
  { year: "2023", name: "Sayar, Salón Satélite", event: "Milán" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function About() {
  const [awardsOpen, setAwardsOpen] = useState(false);

  return (
    <section className="about">

      {/* IMAGEN */}
      <motion.div
        className="about__image-col"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="about__me-image-container">
          <img className="about__me-image" src={alan2} alt="Alan Vásquez — retrato" />
        </div>

        {/* Número decorativo, consistente con Home */}
        <span className="about__deco-number">02</span>
      </motion.div>

      {/* CONTENIDO */}
      <motion.div
        className="about__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p className="about__eyebrow" variants={itemVariants}>
          Sobre mí
        </motion.p>

        {/* Nombre */}
        <motion.h1 className="about__me" variants={itemVariants}>
          Alan Vásquez<br />Vásquez
        </motion.h1>

        {/* Línea decorativa */}
        <motion.div
          className="about__title-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          style={{ originX: 0 }}
        />

        {/* Descripción */}
        <motion.p className="about__description" variants={itemVariants}>
          Diseñador Industrial egresado de la Universidad Anáhuac Puebla (2025),
          con experiencia en exposiciones y ferias internacionales en Milán,
          Valencia, Nueva York y Ciudad de México. Me caracteriza una constante
          curiosidad por explorar nuevas herramientas y mejorar mis procesos,
          aportando soluciones bien estructuradas, funcionales y visualmente atractivas.
        </motion.p>

        {/* Specs */}
        <motion.div className="about__specs" variants={itemVariants}>
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              className="about__specs-row"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="about__specs-label">{spec.label}</span>
              <span className="about__specs-value">{spec.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Logros — acordeón */}
        <motion.div className="about__awards" variants={itemVariants}>
          <button
            className="about__awards-trigger"
            onClick={() => setAwardsOpen((v) => !v)}
            aria-expanded={awardsOpen}
          >
            <span className="about__awards-trigger-label">Logros destacados</span>
            <motion.span
              className="about__awards-trigger-icon"
              animate={{ rotate: awardsOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {awardsOpen && (
              <motion.div
                className="about__awards-list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden" }}
              >
                {awards.map((award, i) => (
                  <motion.div
                    key={i}
                    className="about__award-row"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="about__award-year">{award.year}</span>
                    <div className="about__award-info">
                      <span className="about__award-name">{award.name}</span>
                      <span className="about__award-event">{award.event}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default About;
