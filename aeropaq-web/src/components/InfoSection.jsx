function InfoSection({ id, titulo, texto, reverse = false }) {
  return (
    <section className={`info-section ${reverse ? "reverse" : ""}`} id={id}>
      <div className="info-section__image">
        Imagen / ilustración
      </div>

      <div className="info-section__text">
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
    </section>
  );
}

export default InfoSection;