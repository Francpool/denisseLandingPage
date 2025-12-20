import React from "react";
import imgAlergias from "../assets/img/alergiascontenido.png";
import "../styles/alergias.css";

export default function Alergias() {
    return (
        <section className="alergias-page">
            {/* Side Image - Positioned Absolutely Right */}
            <div className="alergias-page__image-side">
                <img
                    src={imgAlergias}
                    alt="Niña estornudando"
                    className="alergias-page__img"
                />
            </div>

            <div className="alergias-page__container">
                <div className="alergias-page__content-wrapper">
                    <div className="alergias-page__blob alergias-page__blob--top-left"></div>

                    <h1 className="alergias-page__title poppins-medium">
                        ¿Qué son las alergias?
                    </h1>

                    <p className="alergias-page__text">
                        Las alergias ocurren cuando el sistema de defensas del cuerpo
                        reacciona de forma exagerada a sustancias que normalmente no
                        causan daño, como el polvo, el polen o ciertos alimentos.
                    </p>

                    <ul className="alergias-page__list">
                        <li className="list-title">Síntomas más frecuentes</li>
                        <li>Estornudos, nariz tapada o moqueo.</li>
                        <li>Ojos rojos, con picazón o lagrimeo.</li>
                        <li>Ronchas o picazón en la piel.</li>
                        <li>Tos, silbidos en el pecho o dificultad para respirar.</li>
                        <li>Dolor de barriga, vómitos o diarrea (en alergias alimentarias).</li>
                    </ul>

                    <h2 className="alergias-page__subtitle poppins-medium">
                        Enfermedades alérgicas más comunes
                    </h2>
                    <ul className="alergias-page__list">
                        <li>Rinitis (alergia en la nariz).</li>
                        <li>Asma alérgico. (tos y dificultad para respirar)</li>
                        <li>Alergia a alimentos como leche, huevo o frutos secos.</li>
                        <li>Urticaria y dermatitis (irritación y resequedad crónica de la piel).</li>
                        <li>Alergia a picaduras de insectos</li>
                    </ul>
                    <div className="alergias-page__blob alergias-page__blob--bottom-left"></div>
                </div>
            </div>
        </section>
    );
}
