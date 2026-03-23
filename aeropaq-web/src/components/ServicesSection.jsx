import ExpandableDetailsSection from "./ExpandableDetailsSection";

const services = [
  {
    id: 1,
    title: "EnvÃ­os nacionales",
    description: "Entrega rÃ¡pida y segura en toda la naciÃ³n.",
  },
  {
    id: 2,
    title: "EnvÃ­os internacionales",
    description: "Conectamos tu negocio con el mundo.",
  },
  {
    id: 3,
    title: "RecolecciÃ³n a domicilio",
    description: "Nos encargamos de buscar tu paquete.",
  },
  {
    id: 4,
    title: "Servicio exprÃ©s",
    description: "Entrega urgente para tus emergencias.",
  },
];

export default function ServicesSection({ id, titulo, texto, imagen }) {
  return (
    <ExpandableDetailsSection
      id={id}
      titulo={titulo}
      texto={texto}
      imagen={imagen}
      items={services}
      expandButtonLabel="Ver servicios"
      collapseButtonLabel="Ocultar"
    />
  );
}
