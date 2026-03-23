import ExpandableDetailsSection from "./ExpandableDetailsSection";

const coverageAreas = [
  {
    id: 1,
    title: "Zona urbana",
    meta: "Ciudades principales",
    description: "Cobertura completa en todas las grandes ciudades del paÃ­s.",
  },
  {
    id: 2,
    title: "Zona rural",
    meta: "Sectores remotos",
    description: "Llegamos a municipios y veredas con envÃ­os confiables.",
  },
  {
    id: 3,
    title: "Mercados internacionales",
    meta: "MÃºltiples destinos",
    description: "Conectamos con paÃ­ses en AmÃ©rica, Europa, Asia y mÃ¡s.",
  },
  {
    id: 4,
    title: "LogÃ­stica especial",
    meta: "Documentos y carga",
    description: "Servicios personalizados para necesidades especÃ­ficas.",
  },
];

export default function CoverageSection({ id, titulo, texto, imagen, reverse }) {
  return (
    <ExpandableDetailsSection
      id={id}
      titulo={titulo}
      texto={texto}
      imagen={imagen}
      reverse={reverse}
      items={coverageAreas}
      expandButtonLabel="Ver cobertura"
      collapseButtonLabel="Ocultar"
    />
  );
}
