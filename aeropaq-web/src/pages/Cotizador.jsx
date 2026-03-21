import Navbar from "../components/Navbar";
import "../styles/cotizador.css";

function Cotizador() {
  return (
    <>
      <Navbar />

      <main className="cotizador-page">
        <section className="cotizador">
          <div className="cotizador__row">
            <div className="cotizador__field">
              <label>¿Desde dónde se enviará tu pedido?</label>
              <select>
                <option>Misma ciudad</option>
                <option>Otro departamento</option>
                <option>Internacional</option>
              </select>
            </div>

            <div className="cotizador__field">
              <label>¿A dónde se enviará tu pedido?</label>
              <select>
                <option>Misma ciudad</option>
                <option>Otro departamento</option>
                <option>Internacional</option>
              </select>
            </div>
          </div>

          <div className="cotizador__group">
            <p>Nivel de servicio</p>
            <label>
              <input type="radio" name="servicio" /> Estándar
            </label>
            <label>
              <input type="radio" name="servicio" /> Exprés
            </label>
          </div>

          <div className="cotizador__group">
            <p>Extras</p>
            <label>
              <input type="checkbox" /> Recolección a domicilio
            </label>
            <label>
              <input type="checkbox" /> Seguro contra pérdidas y accidentes
            </label>
          </div>

          <div className="cotizador__field cotizador__peso">
            <label>Peso del paquete (Lb)</label>
            <input type="number" placeholder="Ej. 10" />
          </div>

          <div className="cotizador__actions">
            <button type="button">Agregar paquete</button>
          </div>

          <section className="cotizador__paquete">
            <div className="cotizador__paquete-header">Paquete no: x</div>

            <div className="cotizador__cards">
              <div className="cotizador__card">Dimensiones</div>
              <div className="cotizador__card">Dimensiones</div>
              <div className="cotizador__card">Dimensiones</div>
              <div className="cotizador__card">Dimensiones</div>
            </div>
          </section>

          <div className="cotizador__center">
            <button className="cotizador__btn">Cotizar</button>
          </div>

          <section className="cotizador__resultado">
            <h3>Resultado</h3>
            <p>Servicio: ...</p>
            <p>Descripción: ...</p>
            <p>Costos: ...</p>
            <p>Total: ...</p>
            <p>Días: ...</p>
          </section>
        </section>
      </main>
    </>
  );
}

export default Cotizador;