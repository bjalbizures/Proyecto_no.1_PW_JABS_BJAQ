import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/cotizador.css";

function Cotizador() {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [servicio, setServicio] = useState("");
  const [extras, setExtras] = useState({
    recoleccion: false,
    seguro: false,
  });

  const [paquetes, setPaquetes] = useState([
    { id: 1, peso: "", caja: "" }
  ]);

  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [resultado, setResultado] = useState(null);

  const cajas = [
    { nombre: "Pequeña", factor: 1, descripcion: "Ideal para paquetes livianos y pequeños" },
    { nombre: "Mediana", factor: 1.2, descripcion: "Para artículos de tamaño medio" },
    { nombre: "Grande", factor: 1.5, descripcion: "Para paquetes más amplios" },
    { nombre: "Extra grande", factor: 2, descripcion: "Para artículos voluminosos" }
  ];

  const agregarPaquete = () => {
    const nuevoPaquete = {
      id: Date.now(),
      peso: "",
      caja: ""
    };

    setPaquetes([...paquetes, nuevoPaquete]);
  };

  const eliminarPaquete = (id) => {
    if (paquetes.length === 1) return;

    const nuevosPaquetes = paquetes.filter((paq) => paq.id !== id);
    setPaquetes(nuevosPaquetes);
  };

  const actualizarPeso = (id, peso) => {
    const nuevosPaquetes = paquetes.map((paq) =>
      paq.id === id ? { ...paq, peso } : paq
    );
    setPaquetes(nuevosPaquetes);
  };

  const seleccionarCaja = (id, caja) => {
    const nuevosPaquetes = paquetes.map((paq) =>
      paq.id === id ? { ...paq, caja } : paq
    );
    setPaquetes(nuevosPaquetes);
  };

  const manejarExtra = (e) => {
    const { name, checked } = e.target;
    setExtras({
      ...extras,
      [name]: checked,
    });
  };

  const calcularCotizacion = () => {
    let costoBase = 25;
    let costoPeso = 0;
    let costoCaja = 0;
    let tiempo = "3 a 5 días";

    if (origen === "misma-ciudad" && destino === "misma-ciudad") {
      costoBase = 15;
      tiempo = servicio === "expres" ? "24 horas" : "1 a 2 días";
    } else if (destino === "otro-departamento") {
      costoBase = 25;
      tiempo = servicio === "expres" ? "1 a 2 días" : "2 a 4 días";
    } else if (destino === "internacional") {
      costoBase = 80;
      tiempo = servicio === "expres" ? "3 a 5 días" : "5 a 10 días";
    }

    for (const paquete of paquetes) {
      const pesoNum = Number(paquete.peso) || 0;
      costoPeso += pesoNum * 2;

      const cajaSeleccionada = cajas.find((c) => c.nombre === paquete.caja);
      if (cajaSeleccionada) {
        costoCaja += 10 * cajaSeleccionada.factor;
      }
    }

    let costoExtras = 0;

    if (extras.recoleccion) costoExtras += 10;
    if (extras.seguro) costoExtras += 15;
    if (servicio === "expres") costoBase += 20;

    const total = costoBase + costoPeso + costoCaja + costoExtras;

    setResultado({
      servicio: servicio || "No seleccionado",
      descripcion: `${paquetes.length} paquete(s) cotizado(s)`,
      costos: `Base: Q${costoBase.toFixed(2)} | Peso: Q${costoPeso.toFixed(2)} | Cajas: Q${costoCaja.toFixed(2)} | Extras: Q${costoExtras.toFixed(2)}`,
      total: `Q${total.toFixed(2)}`,
      dias: tiempo,
    });

    setMostrarResultado(true);
  };

  return (
    <>
      <Navbar />

      <main className="cotizador-page">
        <section className="cotizador">
          <div className="cotizador__row">
            <div className="cotizador__field">
              <label>¿Desde dónde se enviará tu pedido?</label>
              <select value={origen} onChange={(e) => setOrigen(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="misma-ciudad">Misma ciudad</option>
                <option value="otro-departamento">Otro departamento</option>
                <option value="internacional">Internacional</option>
              </select>
            </div>

            <div className="cotizador__field">
              <label>¿A dónde se enviará tu pedido?</label>
              <select value={destino} onChange={(e) => setDestino(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="misma-ciudad">Misma ciudad</option>
                <option value="otro-departamento">Otro departamento</option>
                <option value="internacional">Internacional</option>
              </select>
            </div>
          </div>

          <div className="cotizador__group">
            <p>Nivel de servicio</p>
            <label>
              <input
                type="radio"
                name="servicio"
                value="estandar"
                checked={servicio === "estandar"}
                onChange={(e) => setServicio(e.target.value)}
              />
              Estándar
            </label>
            <label>
              <input
                type="radio"
                name="servicio"
                value="expres"
                checked={servicio === "expres"}
                onChange={(e) => setServicio(e.target.value)}
              />
              Exprés
            </label>
          </div>

          <div className="cotizador__group">
            <p>Extras</p>
            <label>
              <input
                type="checkbox"
                name="recoleccion"
                checked={extras.recoleccion}
                onChange={manejarExtra}
              />
              Recolección a domicilio
            </label>
            <label>
              <input
                type="checkbox"
                name="seguro"
                checked={extras.seguro}
                onChange={manejarExtra}
              />
              Seguro contra pérdidas y accidentes
            </label>
          </div>

          <div className="cotizador__actions">
            <button type="button" onClick={agregarPaquete}>
              Agregar paquete
            </button>
          </div>

          {paquetes.map((paquete, index) => (
            <section className="cotizador__paquete" key={paquete.id}>
              <div className="cotizador__paquete-top">
                <div className="cotizador__paquete-header">
                  Paquete no: {index + 1}
                </div>

                {paquetes.length > 1 && (
                  <button
                    type="button"
                    className="cotizador__eliminar"
                    onClick={() => eliminarPaquete(paquete.id)}
                  >
                    Eliminar
                  </button>
                )}
              </div>

              <div className="cotizador__peso-individual">
                <label>Peso del paquete (Lb)</label>
                <input
                  type="number"
                  placeholder="Ej. 10"
                  value={paquete.peso}
                  onChange={(e) => actualizarPeso(paquete.id, e.target.value)}
                />
              </div>

              <div className="cotizador__cards">
                {cajas.map((caja) => (
                  <div
                    key={caja.nombre}
                    className={`cotizador__card ${
                      paquete.caja === caja.nombre ? "seleccionada" : ""
                    }`}
                    onClick={() => seleccionarCaja(paquete.id, caja.nombre)}
                  >
                    <h4>{caja.nombre}</h4>
                    <p>{caja.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="cotizador__center">
            <button className="cotizador__btn" onClick={calcularCotizacion}>
              Cotizar
            </button>
          </div>

          {mostrarResultado && resultado && (
            <section className="cotizador__resultado">
              <h3>Resultado</h3>
              <p>Servicio: {resultado.servicio}</p>
              <p>Descripción: {resultado.descripcion}</p>
              <p>Costos: {resultado.costos}</p>
              <p>Total: {resultado.total}</p>
              <p>Días: {resultado.dias}</p>
            </section>
          )}
        </section>
      </main>
    </>
  );
}

export default Cotizador;