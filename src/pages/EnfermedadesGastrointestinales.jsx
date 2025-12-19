import React from "react";
import imgGastro from "../assets/img/enfergastrointest.png";
import "../styles/enfermedadesGastrointestinales.css";

export default function EnfermedadesGastrointestinales() {
    return (
        <section className="gastro-page">
            {/* Side Image - Positioned Absolutely Left */}
            <div className="gastro-page__image-side">
                <img
                    src={imgGastro}
                    alt="Niño comiendo manzana"
                    className="gastro-page__img"
                />
            </div>

            <div className="gastro-page__container">
                <div className="gastro-page__content-wrapper">
                    <div className="gastro-page__blob gastro-page__blob--top-right"></div>

                    <h1 className="gastro-page__title poppins-medium">
                        Enfermedades Gastrointestinales de Niños y Adolescentes:
                    </h1>

                    <p className="gastro-page__text">
                        Los problemas digestivos son muy frecuentes en la infancia y adolescencia, y
                        pueden ir desde molestias leves hasta enfermedades crónicas que afectan el
                        crecimiento y la calidad de vida.
                    </p>
                    <p className="gastro-page__text">
                        Un diagnóstico temprano y un tratamiento adecuado son fundamentales para
                        prevenir complicaciones y asegurar una buena nutrición.
                    </p>

                    <div className="gastro-page__list-section">
                        <div className="gastro-page__blob gastro-page__blob--bottom-right"></div>
                        <h2 className="gastro-page__subtitle poppins-medium">
                            Te podemos ayudar con:
                        </h2>
                        <ul className="gastro-page__list">
                            <li>Reflujo Gastroesofágico vomitos</li>
                            <li>Dolor abdominal agudo, crónico o recurrente</li>
                            <li>Estreñimiento crónico (problemas para ir al baño)</li>
                            <li>Diarrea aguda, persistente y crónica</li>
                            <li>Gastritis Duodenitis</li>
                            <li>Úlceras gástricas, duodenales</li>
                            <li>Alergia alimentaria a la leche e intolerancia a las leches</li>
                            <li>Sangrados gastrointestinal alto y bajo</li>
                            <li>Intestinal Inflamatoria: Enfermedad de Crohn y Colitis Ulcerativa</li>
                        </ul>
                        <div className="gastro-page__blob gastro-page__blob--bottom-left"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
