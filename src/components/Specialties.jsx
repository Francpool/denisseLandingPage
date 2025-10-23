import React from "react";
import "../styles/specialties.css";

// Puedes reemplazar src por tus imágenes reales en /src/assets/img/areas/
const AREAS = [
  {
    title: "Nutrición y Trastornos del Apetito",
    src: "/src/assets/img/areas/apetito.png",
    alt: "Nutrición y Trastornos del Apetito",
  },
  {
    title: "Enfermedades Hepatobiliares y de Páncreas",
    src: "/src/assets/img/areas/hepato-pancreas.png",
    alt: "Enfermedades Hepatobiliares y de Páncreas",
  },
  {
    title: "Enfermedades Gastrointestinales de Niños y Adolescentes",
    src: "/src/assets/img/areas/gastro-pediatrico.png",
    alt: "Enfermedades Gastrointestinales Pediátricas",
  },
  {
    title: "Intolerancias alimentarias",
    src: "/src/assets/img/areas/intolerancias.png",
    alt: "Intolerancias alimentarias",
  },
  {
    title: "Alergias",
    src: "/src/assets/img/areas/alergias.png",
    alt: "Alergias",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="container specialties">
      {/* Columna izquierda */}
      <aside className="specialties__aside">
        <span className="specialties__pill" aria-hidden="true"></span>
        <h2 className="specialties__title libre-baskerville-bold">
          Brindamos atención especializada,
          evaluaciones y servicios médicos
          en las siguientes áreas:
        </h2>
      </aside>

      {/* Rejilla derecha */}
      <div className="specialties__grid">
        {AREAS.map(({ title, src, alt }, idx) => (
          <article className="specialty" key={idx}>
            <div className="specialty__photo">
              {/* Fallback si aún no pones la imagen */}
              {src ? <img src={src} alt={alt} loading="lazy" /> : <div className="specialty__placeholder" />}
            </div>
            <div className="specialty__label poppins-medium">{title}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
