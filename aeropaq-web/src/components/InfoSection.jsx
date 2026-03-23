function InfoSection({ id, titulo, texto, reverse = false, imagen }) {
  return (
    <section className={`info-section ${reverse ? "reverse" : ""}`} id={id}>
      <img src={imagen} alt={titulo} className="info-section__image" />

      <div className="info-section__text">
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
    </section>
  );
}

export default InfoSection;