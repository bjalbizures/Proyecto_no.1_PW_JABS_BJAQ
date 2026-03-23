import "../styles/contacto.css";

export default function Contacto() {
    return (
        <div className="contacto" id="contacto">
            <h2>Contáctanos</h2>
            <p>Déjanos tus datos y tu mensaje.</p>

            <form className="contacto__form">
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo" />
                <input type="text" placeholder="Teléfono" />
                <textarea placeholder="Mensaje"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
