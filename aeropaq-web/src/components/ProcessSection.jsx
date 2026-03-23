import ExpandableDetailsSection from "./ExpandableDetailsSection";

const processSteps = [
  {
    id: 1,
    title: "Solicitud del envio",
    meta: "Paso 1",
    description:
      "El cliente registra los datos del remitente, destinatario, tipo de paquete y modalidad de entrega para iniciar el proceso.",
  },
  {
    id: 2,
    title: "Recoleccion y verificacion",
    meta: "Paso 2",
    description:
      "Se recoge el paquete en domicilio o sucursal y se valida que el embalaje, peso y documentacion esten listos para despacho.",
  },
  {
    id: 3,
    title: "Clasificacion y despacho",
    meta: "Paso 3",
    description:
      "El envio se clasifica segun su destino y prioridad para asignarlo a la ruta logistica mas eficiente y segura.",
  },
  {
    id: 4,
    title: "Seguimiento y entrega",
    meta: "Paso 4",
    description:
      "Durante el trayecto puedes consultar el estado del paquete hasta su entrega final al destinatario.",
  },
];

export default function ProcessSection({ id, titulo, texto, imagen, reverse }) {
  return (
    <ExpandableDetailsSection
      id={id}
      titulo={titulo}
      texto={texto}
      imagen={imagen}
      reverse={reverse}
      items={processSteps}
      expandButtonLabel="Ver proceso completo"
      collapseButtonLabel="Ocultar"
    />
  );
}
