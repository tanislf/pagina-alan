// import sayarlogosolo from "../../images/Sayarlogosolo.png";
import sayarlogo from "../../images/Logos/Sayar-L.png";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";
import { useState } from "react";

const redes = [
  { name: "Instagram", link: "https://www.instagram.com/alan.vasquezvasquez/" },
  { name: "Behance", link: "https://www.behance.net/alanvsquez" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/alan-vasquez-3905a2289/" },
  { name: "Email", link: "mailto:alanvasvas2@gmail.com" },
  { name: "WhatsApp", link: "https://wa.me/529514415021" },
];


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};


function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [redesOpen, setRedesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__creator">
        <Link to="/" onClick={closeMenu}>
          <img className="navbar__logo" src={sayarlogo} alt="sayarlogo" />
        </Link>
      </div>

      {/* //boton hamburguesa para abrir y cerrar el menu en mobile, con aria-label
      para accesibilidad, y clases para animacion */}
      <button
        className={`navbar__toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
        <Link to="/about" className="navbar__link" onClick={closeMenu}>
          Sobre mí
        </Link>
        <Link to="/proyectos" className="navbar__link" onClick={closeMenu}>
          Proyectos
        </Link>
        <Link to="/colaboraciones" className="navbar__link" onClick={closeMenu}>
          Colaboraciones
        </Link>
        <Link to="/servicios" className="navbar__link" onClick={closeMenu}>
          Servicios
        </Link>
        
        {/* Contacto - acordeon */}
        <div className="navbar-contact">
          <button
            className="navbar__link navbar-contact__trigger"
            onClick={() => setRedesOpen((v) => !v)}
            aria-expanded={redesOpen}
          >
            <span>Contacto</span>
            <motion.span
              className="navbar-contact__trigger-icon"
              animate={{ rotate: redesOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {redesOpen && (
              <motion.div
                className="navbar-contact__list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {redes.map((red, i) => (
                  <motion.a
                    key={i}
                    href={red.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-contact__item"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    onClick={closeMenu}
                  >
                    <span className="navbar-contact__item-name">{red.name}</span>
                    <span className="navbar-contact__item-arrow">→</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
