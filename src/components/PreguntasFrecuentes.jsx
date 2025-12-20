import React from "react";
import "../styles/preguntas-frecuentes.css";
import babyImage from "../assets/img/Preguntasfre.png";

const QUESTIONS = [
    "¿Que es Test de alergia a proteina de leche de vaca?",
    "¿Cómo saber si la materia fecal es normal?",
    "¿Cuáles son los signos para saber si tu hijo puede tener alguna alergia?",
];

export default function PreguntasFrecuentes() {
    return (
        <section className="faq">
            {/* Background Split */}
            <div className="faq__bg-split" aria-hidden="true">
                <div className="faq__bg-left"></div>
                <div className="faq__bg-right"></div>
            </div>

            <div className="container faq__container">

                {/* Left Side: Title */}
                <div className="faq__left">
                    <div className="faq__title-wrapper">
                        {/* Decorative blob behind 'Preguntas' can be CSS */}
                        <h2 className="faq__title libre-baskerville-bold">
                            <span className="faq__highlight">Preguntas</span> <br />
                            frecuentes:
                        </h2>
                    </div>
                    {/* Decorative rings can be added via CSS on the container or here */}
                    <div className="faq__decor-ring"></div>
                </div>

                {/* Center: Image */}
                <div className="faq__center">
                    <img src={babyImage} alt="Bebe" className="faq__img" />
                </div>

                {/* Right Side: Questions */}
                <div className="faq__right">
                    <div className="faq__list">
                        {/* Static list items for control over individual links */}
                        <div className="faq__item poppins-regular">
                            <span className="faq__bullet"></span>
                            <a href="/test-alergia-leche" className="faq__link">
                                ¿Que es Test de alergia a proteina de leche de vaca?
                            </a>
                        </div>

                        <div className="faq__item poppins-regular">
                            <span className="faq__bullet"></span>
                            <a href="/materia-fecal" className="faq__link">
                                ¿Cómo saber si la materia fecal es normal?
                            </a>
                        </div>

                        <div className="faq__item poppins-regular">
                            <span className="faq__bullet"></span>
                            <p>¿Cuáles son los signos para saber si tu hijo puede tener alguna alergia?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
