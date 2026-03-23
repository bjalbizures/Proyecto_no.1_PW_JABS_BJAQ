import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import CoverageSection from "../components/CoverageSection";
import ProcessSection from "../components/ProcessSection";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <Hero />

      <ServicesSection
        id="servicios"
        titulo="Nuestros servicios"
        texto="Ofrecemos envios nacionales, internacionales, recoleccion a domicilio y servicio expres para que puedas elegir la opcion que mejor se adapte a tus necesidades."
        imagen="/nuestrosServicios.png"
      />

      <CoverageSection
        id="cobertura"
        titulo="Cobertura"
        texto="Contamos con cobertura en distintas ciudades, departamentos y destinos internacionales, buscando brindar un servicio confiable y de amplio alcance."
        reverse={true}
        imagen="/cobertura.png"
      />

      <ProcessSection
        id="como-funciona"
        titulo="Como funciona?"
        texto="El proceso es simple: coordinas el envio, preparamos la recoleccion, despachamos tu paquete y acompanamos la entrega hasta el destino final."
        imagen="/comoFunciona.png"
      />
    </main>
  );
}
