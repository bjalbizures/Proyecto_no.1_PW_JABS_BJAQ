import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <Hero />

      <InfoSection
        id="servicios"
        titulo="Nuestros servicios"
        texto="Ofrecemos envíos nacionales, internacionales, recolección a domicilio y servicio exprés para que puedas elegir la opción que mejor se adapte a tus necesidades."
        imagen="/nuestrosServicios.png"
      />

      <InfoSection
        id="cobertura"
        titulo="Cobertura"
        texto="Contamos con cobertura en distintas ciudades, departamentos y destinos internacionales, buscando brindar un servicio confiable y de amplio alcance."
        reverse={true}
        imagen="/cobertura.png"
      />

      <InfoSection
        id="como-funciona"
        titulo="¿Cómo funciona?"
        texto="El proceso es simple: el cliente solicita el envío, se realiza la recolección, se despacha el paquete y finalmente se entrega al destinatario."
        imagen="/comoFunciona.png"
      />
    </main>
  );
}
