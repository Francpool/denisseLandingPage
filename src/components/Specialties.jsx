import React from "react";
import "../styles/specialties.css";

import imgApetito from "../assets/img/apetito.png";
import imgHepato from "../assets/img/hepato-pancreas.png";
import imgGastro from "../assets/img/gastro-pediatrico.png";
import imgIntolerancer from "../assets/img/intolerancias.png";
import imgAlergias from "../assets/img/alergias.png";

// Puedes reemplazar src por tus imágenes reales en /src/assets/img/areas/
const AREAS = [
  {
    title: "Nutrición y Trastornos del Apetito",
    src: imgApetito,
    alt: "Nutrición y Trastornos del Apetito",
  },
  {
    title: "Enfermedades Hepatobiliares y de Páncreas",
    src: imgHepato,
    alt: "Enfermedades Hepatobiliares y de Páncreas",
  },
  {
    title: "Enfermedades Gastrointestinales de Niños y Adolescentes",
    src: imgGastro,
    alt: "Enfermedades Gastrointestinales Pediátricas",
  },
  {
    title: "Intolerancias alimentarias",
    src: imgIntolerancer,
    alt: "Intolerancias alimentarias",
  },
  {
    title: "Alergias",
    src: imgAlergias,
    alt: "Alergias",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="specialties">
      <div className="specialties__split">
        {/* Lado Izquierdo: Texto */}
        <div className="specialties__aside">
          <div className="specialties__content-wrapper">
            <h2 className="specialties__title poppins-medium">
              Brindamos atención especializada, evaluaciones y servicios médicos en las siguientes áreas:
            </h2>
          </div>
        </div>

        {/* Lado Derecho: Grid */}
        <div className="specialties__main">
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
        </div>
      </div>
    </section>
  );
}
