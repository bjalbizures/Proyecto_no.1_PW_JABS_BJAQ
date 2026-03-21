import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">LOGO</div>

      <nav className="navbar__menu">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#cobertura">Cobertura</a>
        <a href="#contacto">Contacto</a>
        <Link to="/cotizador" className="navbar__btn">Cotizar</Link>
      </nav>
    </header>
  );
}

export default Navbar;