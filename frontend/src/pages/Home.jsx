
import { motion, useScroll, useTransform } from "framer-motion";

import { LogoLoop } from "../components/Animations/GalleryLoop.jsx";
import union from "../images/Proyectos/Exhibiciones/Sinergia/union-final.webp";
import sayar from "../images/Proyectos/Exhibiciones/Sayar/sayar-final.webp";
import nisa from "../images/Proyectos/Exhibiciones/Nisa/NISA_Final.webp";
import carys from "../images/Proyectos/Exhibiciones/Carys/carys-final.webp";
import modubo from "../images/Proyectos/Exhibiciones/Modubo/modubo-final.webp";

import cafartaza from "../images/Home/cafartaza.png";

function Home() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -60]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.05]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, skewY: 3 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 80, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.8,
      },
    },
  };



// Alternative with image sources
const imageLogos = [
  { src: union, alt: "union",  },
  { src: sayar, alt: "sayar",  },
  { src: nisa, alt: "nisa",  },
  { src: carys, alt: "carys",  },
  { src: modubo, alt: "modubo",  },
];

  return (
    <>
    <section className="home">
      {/* Grain overlay for texture */}
      <div className="home__grain" aria-hidden="true" />

      <div className="home__hero">
        {/* LEFT — texto */}
        <div className="home__hero-left">
          <motion.div
            className="home__content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p className="home__eyebrow" variants={subtitleVariants}>
              Portafolio — 2026
            </motion.p>

            {/* Línea decorativa */}
            <motion.div
              className="home__title-line"
              variants={lineVariants}
              style={{ originX: 0 }}
            />

            {/* Título principal */}
            <motion.h1 className="home__title" variants={titleVariants}>
              <span className="home__title-word">Diseño</span>
              <span className="home__title-span">Industrial</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p className="home__subtitle" variants={subtitleVariants}>
              Puebla · México
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="home__scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            <motion.div
              className="home__scroll-line"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5,
              }}
              style={{ originY: 0 }}
            />
            <span className="home__scroll-text">Scroll</span>
          </motion.div>
        </div>

        {/* RIGHT — imagen */}
        <motion.div
          className="home__hero-right"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="home__image-wrapper"
            style={{ y: imageY, scale: imageScale }}
          >
            <img
              src={cafartaza}
              alt="Objeto de diseño industrial — taza de café"
              className="home__image"
            />
          </motion.div>

          {/* Número decorativo */}
          <motion.span
            className="home__deco-number"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            01
          </motion.span>
        </motion.div>
      </div>
    </section>

    <section className="home__gallery">
<LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={400}
        gap={70}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      <div className="home__manifiesto">
<p className="home__manifiesto-title">El manifiesto</p>
      <p className="home__manifiesto-subtitle">La esencia del objeto reside en su honestidad material.</p>
      </div>
    </section>  
    </>
  );
}

export default Home;
