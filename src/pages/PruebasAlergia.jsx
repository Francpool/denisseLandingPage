import React from "react";
import imgPruebas from "../assets/img/pruebasalergia.png";
import "../styles/pruebasAlergia.css";

export default function PruebasAlergia() {
    return (
        <section className="pruebas-alergia">
            <div className="pruebas-alergia__blobs">
                <div className="pruebas-alergia__blob-top-right"></div>
                <div className="pruebas-alergia__blob-bottom-left"></div>
            </div>

            <div className="pruebas-alergia__container">
                {/* Left Column: Content */}
                <div className="pruebas-alergia__content">
                    <div className="pruebas-alergia__title-wrapper">
                        <div className="pruebas-alergia__title-blob"></div>
                        <h1 className="pruebas-alergia__title libre-baskerville-bold">
                            Pruebas de alergia
                        </h1>
                    </div>

                    <div className="pruebas-alergia__text poppins-regular">
                        <p>
                            El prick test, también conocido como prueba cutánea de alergia, es un examen rápido y seguro que permite identificar a qué sustancias una persona es alérgica.
                        </p>
                        <p className="pruebas-alergia__subtitle">
                            Diagnostica alergias para:
                        </p>
                        <ul className="pruebas-alergia__list">
                            <li>Pólenes, ácaros , polvo.</li>
                            <li>Moho, hongos,plantas.</li>
                            <li>Pelo de animales,insectos.</li>
                            <li>Alimentos</li>
                            <li>Algunos medicamentos.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="pruebas-alergia__image-col">
                    <img
                        src={imgPruebas}
                        alt="Prueba cutánea de alergia"
                        className="pruebas-alergia__img"
                    />
                </div>
            </div>
        </section>
    );
}
