import "../styles/about.css";
import BenefitItem from "../components/BenefitItem";

export default function About() {
    const historia = [
        {
            id: 1,
            titulo: "Cómo comenzó todo",
            contenido: "En 2015, Jorge Avendaño y sus dos hermanos tenían un sueño: revolucionar la logística en el país. Con solo un camión y mucha determinación, comenzaron a entregar paquetes puerta a puerta en la capital. Lo que parecía un pequeño emprendimiento familiar, pronto se convirtió en algo especial cuando sus clientes empezaron a recomendarlos."
        },
        {
            id: 2,
            titulo: "El primer cambio importante",
            contenido: "Después de 2 años de crecimiento constante, AeroPaq expandió su operación a 5 ciudades más. En 2017 invirtieron en tecnología para crear un sistema de rastreo en tiempo real. Este fue el hito que diferenció a AeroPaq de la competencia y atrajo a inversionistas interesados en su modelo."
        },
        {
            id: 3,
            titulo: "Llegada a lo digital",
            contenido: "Conscientes de que el mercado estaba cambiando, el equipo de AeroPaq comprendió que necesitaban una presencia digital fuerte. En 2019 lanzaron su plataforma web, permitiendo a los clientes cotizar y gestionar envíos desde cualquier lugar. La pandemia aceleró aún más esta transformación digital."
        },
        {
            id: 4,
            titulo: "Expansión internacional",
            contenido: "Para 2021, AeroPaq había establecido alianzas estratégicas con socios logísticos en 12 países latinoamericanos. Su compromiso con la excelencia y la innovación los posicionó como uno de los proveedores de logística más confiables. Cada paquete entregado representaba su promesa de conectar personas."
        },
        {
            id: 5,
            titulo: "Nuestra misión hoy",
            contenido: "Hacer que enviar paquetes sea simple, seguro y accesible para todos. Creemos que la logística es más que mover cajas; es conectar familias, negocios y sueños. Cada día trabajamos para ser más rápidos, más sostenibles y más cercanos a nuestros clientes."
        },
        {
            id: 6,
            titulo: "Lo que nos impulsa",
            contenido: "Nuestros valores definen quiénes somos: Confiabilidad en cada envío, Innovación constante, Sostenibilidad ambiental, y Excelencia en el servicio. No solo queremos ser la mejor empresa de logística; queremos ser el socio que nuestros clientes eligen porque nos importan."
        }
    ];

    const beneficios = [
        {
            id: 1,
            icon: "✓",
            titulo: "Experiencia probada",
            descripcion: "Más de 8 años entregando soluciones confiables"
        },
        {
            id: 2,
            icon: "✓",
            titulo: "Cobertura amplia",
            descripcion: "Presente en 12 países y creciendo cada día"
        },
        {
            id: 3,
            icon: "✓",
            titulo: "Innovación constante",
            descripcion: "Tecnología de punta para tu tranquilidad"
        },
        {
            id: 4,
            icon: "✓",
            titulo: "Equipo dedicado",
            descripcion: "Profesionales comprometidos con tu éxito"
        }
    ];

    return (
        <div className="about-page">
            <div className="about-header">
                <h1>Nuestra Historia</h1>
                <p>Una empresa nacida de la pasión por conectar al país</p>
            </div>

            <div className="about-grid">
                {historia.map((item) => (
                    <div key={item.id} className="about-card">
                        <div className="about-card__header">
                            <span className="about-card__number">{item.id}</span>
                            <h3>{item.titulo}</h3>
                        </div>
                        <p className="about-card__content">{item.contenido}</p>
                    </div>
                ))}
            </div>

            <div className="about-footer">
                <h2>¿Por qué elegir AeroPaq?</h2>
                <div className="about-benefits">
                    {beneficios.map((beneficio) => (
                        <BenefitItem
                            key={beneficio.id}
                            icon={beneficio.icon}
                            title={beneficio.titulo}
                            description={beneficio.descripcion}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
