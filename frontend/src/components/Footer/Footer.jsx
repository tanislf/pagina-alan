import { Link } from "react-router-dom";
import sayarpng from "../../images/Logos/Sayar.png";

function Footer({ onContactClick }) {
  return (
    <footer className="footer">
      <div className="footer__nav-container">
        <div className="footer__logo-container">
          <p className="footer__text">TRABAJEMOS JUNTOS</p>
          <img className="footer__logo" src={sayarpng} alt="Logo" />
        </div>
        <div className="footer__navbar">
          <div className="footer__buttons">
            <Link
              to="https://www.instagram.com/alan.vasquezvasquez/"
              className="footer__link-button"
            >
              <button className="footer__button footer__button_insta" />
            </Link>

            <Link
              to="https://www.linkedin.com/in/alan-vasquez-3905a2289/"
              className="footer__link-button"
            >
              <button className="footer__button footer__button_linkedin" />
            </Link>

            <Link
              to="https://www.behance.net/alanvsquez?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnuXSlQaUcoxv0YrDfshOqj7p6iV-j8rXmG2NzMq_xvFAIF7fd8Noac6gJcOQ_aem_8dZ4_bKozoc6BqHYUTANGQ"
              className="footer__link-button"
            >
              <button className="footer__button footer__button_behance" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
