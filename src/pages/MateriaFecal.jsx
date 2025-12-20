import React from "react";
import imgFecal from "../assets/img/fecal.png";
import imgBristol from "../assets/img/escalabristol.png";
import "../styles/materiaFecal.css";

export default function MateriaFecal() {
    return (
        <section className="fecal-page">
            <div className="fecal-page__blobs">
                <div className="fecal-page__blob-top-left"></div>
                <div className="fecal-page__blob-bottom-left"></div>
            </div>

            <div className="fecal-page__container">
                {/* Left Column: Title */}
                <div className="fecal-page__col-left">
                    <div className="fecal-page__title-wrapper">
                        <div className="fecal-page__title-blob"></div>
                        <h1 className="fecal-page__title libre-baskerville-bold">
                            ¿Cómo saber si la materia fecal es normal?
                        </h1>
                    </div>
                </div>

                {/* Center Column: Child Image */}
                <div className="fecal-page__col-center">
                    <img src={imgFecal} alt="Niño en bacinica" className="fecal-page__img-child" />
                </div>

                {/* Right Column: Bristol Scale */}
                <div className="fecal-page__col-right">
                    <div className="fecal-page__card-bristol">
                        <img src={imgBristol} alt="Escala de Bristol" className="fecal-page__img-bristol" />
                    </div>
                </div>
            </div>
        </section>
    );
}
