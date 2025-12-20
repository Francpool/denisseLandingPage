import React from "react";
import imgIntolerancia from "../assets/img/intolerancia.png";
import imgIntolerancia2 from "../assets/img/intolerancia2.png";
import "../styles/intoleranciasAlimentarias.css";

export default function IntoleranciasAlimentarias() {
    return (
        <>
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

            <section className="intolerancias-page__section-two">
                {/* Side Image - Positioned Absolutely Left for the second section */}
                <div className="intolerancias-page__image-side-left">
                    <img
                        src={imgIntolerancia2}
                        alt="Niña con vaso de leche"
                        className="intolerancias-page__img"
                    />
                </div>

                <div className="intolerancias-page__container">
                    <div className="intolerancias-page__content-wrapper-right">
                        <h2 className="intolerancias-page__subtitle poppins-medium">
                            Intolerancias alimentarias más comunes:
                        </h2>
                        <ul className="intolerancias-page__list">
                            <li>Intolerancia a la lactosa: dificultad para digerir el azúcar de la leche.</li>
                            <li>Intolerancia al gluten: reacción al gluten, presente en trigo, cebada y centeno.</li>
                            <li>Intolerancia a la fructosa: problemas para absorber el azúcar de algunas frutas y alimentos procesados.</li>
                        </ul>

                        <h2 className="intolerancias-page__subtitle poppins-medium" style={{ marginTop: '2rem' }}>
                            Consejos importantes:
                        </h2>
                        <p className="intolerancias-page__text">
                            No te autodiagnostiques ni elimines alimentos sin guía médica.
                            Lleva un diario de registro de alimentos eso ayudara a identificar el problema y guiar los examenes medicos que se requiere
                        </p>
                        <div className="intolerancias-page__blob intolerancias-page__blob--bottom-right"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
