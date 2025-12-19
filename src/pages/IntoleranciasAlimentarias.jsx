import React from "react";
import imgIntolerancia from "../assets/img/intolerancia.png";
import "../styles/intoleranciasAlimentarias.css";

export default function IntoleranciasAlimentarias() {
    return (
        <section className="intolerancias-page">
            {/* Side Image - Positioned Absolutely Right */}
            <div className="intolerancias-page__image-side">
                <img
                    src={imgIntolerancia}
                    alt="Niño con plato de comida"
                    className="intolerancias-page__img"
                />
            </div>

            <div className="intolerancias-page__container">
                <div className="intolerancias-page__content-wrapper">
                    <div className="intolerancias-page__blob intolerancias-page__blob--top-left"></div>

                    <h1 className="intolerancias-page__title poppins-medium">
                        ¿Qué son las intolerancias alimentarias?
                    </h1>

                    <p className="intolerancias-page__text">
                        Las intolerancias alimentarias ocurren cuando el cuerpo no puede digerir
                        bien ciertos alimentos. A diferencia de las alergias, no se trata de
                        una reacción del sistema inmunológico, pero sí pueden causar molestias
                        importantes en la vida diaria.
                    </p>

                    <div className="intolerancias-page__list-section">
                        <h2 className="intolerancias-page__subtitle poppins-medium">
                            Síntomas más comunes:
                        </h2>
                        <ul className="intolerancias-page__list">
                            <li>Dolor o distensión abdominal.</li>
                            <li>Gases o sensación de hinchazón.</li>
                            <li>Diarrea o estreñimiento.</li>
                            <li>Náuseas o vómitos.</li>
                            <li>Acidez o reflujo.</li>
                            <li>Los síntomas suelen aparecer horas después de consumir el alimento y pueden variar de una persona a otra.</li>
                        </ul>
                        <div className="intolerancias-page__blob intolerancias-page__blob--bottom-left"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
