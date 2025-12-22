import React from "react";
import imgEndoscopia from "../assets/img/endoscopia.png";
import "../styles/endoscopia.css";

export default function Endoscopia() {
    return (
        <section className="endoscopia">
            <div className="endoscopia__blobs">
                <div className="endoscopia__blob-top-left"></div>
                <div className="endoscopia__blob-bottom-right"></div>
            </div>

            <div className="endoscopia__container">
                {/* Left Column: Content */}
                <div className="endoscopia__content">
                    <div className="endoscopia__title-wrapper">
                        <div className="endoscopia__title-blob"></div>
                        <h1 className="endoscopia__title libre-baskerville-bold">
                            Endoscopia- Colonoscopia
                        </h1>
                    </div>

                    <div className="endoscopia__text poppins-regular">
                        <p>
                            La endoscopia digestiva alta permite observar el esófago, el estómago y el inicio del intestino delgado para detectar inflamaciones, úlceras, infecciones o malformaciones.
                        </p>
                        <p>
                            La colonoscopia es un estudio que explora el intestino grueso y el recto, útil para identificar pólipos, inflamación, sangrados.
                        </p>
                        <p>
                            Estos procedimientos ayudan a diagnosticar la causa de síntomas del dolor abdominal, sangrado, vómitos persistentes o cambios en las deposiciones.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="endoscopia__image-col">
                    <img
                        src={imgEndoscopia}
                        alt="Procedimiento de endoscopia"
                        className="endoscopia__img"
                    />
                </div>
            </div>
        </section>
    );
}
