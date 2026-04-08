// import sayarlogosolo from "../../images/Sayarlogosolo.png";
import sayarlogo from "../../images/Logos/Sayar-L.png";

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <Link to="/servicios" className="navbar__link" onClick={closeMenu}>
          Servicios
        </Link>

        <button
          type="button"
          className="navbar__link"
          onClick={() => {
            onContactClick();
            closeMenu();
          }}
        >
          Contacto
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
