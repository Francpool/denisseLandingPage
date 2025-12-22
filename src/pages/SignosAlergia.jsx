import React from "react";
import imgSaberAlergia from "../assets/img/saberalergia.png";
import "../styles/signosAlergia.css";

export default function SignosAlergia() {
    return (
        <section className="signos-alergia">
            <div className="signos-alergia__blobs">
                <div className="signos-alergia__blob-top-right"></div>
                <div className="signos-alergia__blob-bottom-left"></div>
            </div>

            <div className="signos-alergia__container">
                {/* Left Column: Content */}
                <div className="signos-alergia__content">
                    <div className="signos-alergia__title-wrapper">
                        <div className="signos-alergia__title-blob"></div>
                        <h1 className="signos-alergia__title libre-baskerville-bold">
                            ¿Cómo saber si tu hijo podría tener una alergia?
                        </h1>
                    </div>

                    <div className="signos-alergia__text poppins-regular">
                        <p>
                            Muchas alergias en niños pueden pasar desapercibidas o confundirse con
                            molestias comunes, lo que retrasa su diagnóstico y tratamiento.
                        </p>
                        <p>
                            Estos son algunos signos de alerta que podrían indicar una posible
                            alergia:
                        </p>
                        <ul className="signos-alergia__list">
                            <li>
                                <strong>Problemas digestivos frecuentes:</strong> dolor abdominal,
                                gases excesivos, vómitos o diarrea sin causa aparente.
                            </li>
                            <li>
                                <strong>Lesiones en la piel:</strong> eccema, enrojecimiento,
                                resequedad o brotes que aparecen y desaparecen.
                            </li>
                            <li>
                                <strong>Congestión nasal o estornudos constantes:</strong>{" "}
                                especialmente si no hay signos de resfriado.
                            </li>
                            <li>
                                <strong>Tos seca recurrente o silbidos al respirar:</strong> que
                                podrían indicar asma alérgico.
                            </li>
                            <li>
                                <strong>Irritabilidad o alteraciones en el sueño:</strong> cuando el
                                malestar se vuelve parte de la rutina.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="signos-alergia__image-col">
                    <img
                        src={imgSaberAlergia}
                        alt="Niña con alergia sonándose la nariz"
                        className="signos-alergia__img"
                    />
                </div>
            </div>
        </section>
    );
}
