import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import ContactoForm from "../components/ContactoForm";
import Footer from "../components/footer";
import "../styles/home.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <Hero />

        <section className="home__links">
          <a href="#como-funciona">¿Cómo funciona?</a>
          <a href="#sobre-nosotros">Sobre nosotros</a>
          <a href="#faq">Preguntas frecuentes</a>
        </section>

        <InfoSection
          id="servicios"
          titulo="Nuestros servicios"
          texto="Ofrecemos envíos nacionales, internacionales, recolección a domicilio y servicio exprés para que puedas elegir la opción que mejor se adapte a tus necesidades."
        />

        <InfoSection
          id="cobertura"
          titulo="Cobertura"
          texto="Contamos con cobertura en distintas ciudades, departamentos y destinos internacionales, buscando brindar un servicio confiable y de amplio alcance."
          reverse={true}
        />

        <InfoSection
          id="como-funciona"
          titulo="¿Cómo funciona?"
          texto="El proceso es simple: el cliente solicita el envío, se realiza la recolección, se despacha el paquete y finalmente se entrega al destinatario."
        />

        <InfoSection
          id="sobre-nosotros"
          titulo="Sobre nosotros"
          texto="AeroPaq busca ampliar su presencia digital ofreciendo una plataforma clara, útil y accesible para que los clientes conozcan sus servicios y puedan cotizar sus envíos."
          reverse={true}
        />

        <InfoSection
          id="faq"
          titulo="Preguntas frecuentes"
          texto="En esta sección se pueden mostrar dudas comunes relacionadas con tiempos de entrega, cobertura, peso máximo, costos y servicios adicionales."
        />

        <ContactoForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;