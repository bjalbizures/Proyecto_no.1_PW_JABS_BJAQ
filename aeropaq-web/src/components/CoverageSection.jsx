import ExpandableDetailsSection from "./ExpandableDetailsSection";

const sectionContent = {
  title: "Cobertura",
  text: "Llegamos a diferentes ciudades, departamentos y destinos internacionales para brindarte un servicio confiable, accesible y de amplio alcance.",
  image: "/cobertura.png",
};

const coverageAreas = [
  {
    id: 1,
    title: "Zona urbana",
    meta: "Ciudades principales",
    description: "Contamos con cobertura en las principales ciudades del país para ofrecer entregas rápidas y seguras.",
  },
  {
    id: 2,
    title: "Zona rural",
    meta: "Sectores remotos",
    description: "Extendemos nuestro servicio a municipios y comunidades para acercar tus envíos a más destinos.",
  },
  {
    id: 3,
    title: "Mercados internacionales",
    meta: "Múltiples destinos",
    description: "Conectamos tus envíos con distintos países mediante un servicio confiable y eficiente.",
  },
  {
    id: 4,
    title: "Logística especial",
    meta: "Documentos y carga",
    description: "Ofrecemos soluciones adaptadas para envíos que requieren un manejo más específico.",
  },
];

export default function CoverageSection({ id, reverse }) {
  return (
    <ExpandableDetailsSection
      id={id}
      titulo={sectionContent.title}
      texto={sectionContent.text}
      imagen={sectionContent.image}
      reverse={reverse}
      items={coverageAreas}
      expandButtonLabel="Ver cobertura"
      collapseButtonLabel="Ocultar"
    />
  );
}
