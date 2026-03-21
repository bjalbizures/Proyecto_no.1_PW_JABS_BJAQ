import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__image-placeholder">
        Imagen principal
      </div>

      <div className="hero__content">
        <h1>Envíos rápidos y seguros</h1>
        <p>
          AeroPaq te ayuda a gestionar tus envíos nacionales e internacionales
          de forma rápida, segura y confiable.
        </p>

        <Link to="/cotizador" className="hero__button">
          Cotizar
        </Link>
      </div>
    </section>
  );
}

export default Hero;