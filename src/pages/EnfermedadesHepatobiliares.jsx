import React from "react";
import imgPancreas from "../assets/img/enferpancreas.png";
import "../styles/enfermedadesHepatobiliares.css";

export default function EnfermedadesHepatobiliares() {
    return (
        <section className="hepato-page">
            <div className="hepato-page__container">
                <div className="hepato-page__content">
                    <div className="hepato-page__blob hepato-page__blob--top-left"></div>

                    <h1 className="hepato-page__title poppins-medium">
                        Enfermedades Hepatobiliares y de Páncreas:
                    </h1>

                    <p className="hepato-page__text">
                        El hígado y el páncreas cumplen funciones esenciales en la digestión y
                        el metabolismo de los niños. Cuando estos órganos presentan
                        alteraciones, pueden aparecer síntomas como ictericia (coloración
                        amarilla de la piel), dolor abdominal, náuseas, vómitos o problemas en
                        la absorción de nutrientes.
                    </p>

                    <div className="hepato-page__columns">
                        <div className="hepato-page__list-col">
                            <h2 className="hepato-page__subtitle poppins-medium">
                                Te podemos ayudar con:
                            </h2>
                            <ul className="hepato-page__list">
                                <li>Hepatitis agudas y crónicas (inflamacion del higado)</li>
                                <li>Ictericia (color amarillento en la piel y ojos)</li>
                                <li>Colecistitis (calculos en la vesicula)</li>
                                <li>Pancreatitis</li>
                                <li>Fibrosis quística</li>
                                <li>Higado graso</li>
                                <li>Hepatomegalia (higado grande)</li>
                                <li>Transplante de higado</li>
                            </ul>
                            <div className="hepato-page__blob hepato-page__blob--bottom-left"></div>
                        </div>

                        <div className="hepato-page__img-col">
                            <img
                                src={imgPancreas}
                                alt="Doctor sosteniendo ilustración de hígado y páncreas"
                                className="hepato-page__img"
                            />
                            <div className="hepato-page__blob hepato-page__blob--bottom-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
