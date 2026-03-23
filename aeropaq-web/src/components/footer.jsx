import { Link } from "react-router-dom";
import { APP_ROUTES } from "../constants/routes";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link className="footer-link" to={APP_ROUTES.CONTACTO}>
          Contacto
        </Link>
        <Link className="footer-link" to={APP_ROUTES.FAQ}>
          Preguntas frecuentes
        </Link>
        <Link className="footer-link" to={APP_ROUTES.ABOUT}>
          Sobre nosotros
        </Link>
      </div>
    </footer>
  );
}

export default Footer;