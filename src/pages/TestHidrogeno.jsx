import React from "react";
import imgTestHidrogeno from "../assets/img/testhidrogeno.png";
import "../styles/testHidrogeno.css";

export default function TestHidrogeno() {
    return (
        <section className="test-hidrogeno">
            <div className="test-hidrogeno__blobs">
                <div className="test-hidrogeno__blob-top-right"></div>
                <div className="test-hidrogeno__blob-bottom-left"></div>
            </div>

            <div className="test-hidrogeno__container">
                <div className="test-hidrogeno__header">
                    <div className="test-hidrogeno__title-blob"></div>
                    <h1 className="test-hidrogeno__title libre-baskerville-bold">
                        Test de Hidrógeno
                    </h1>
                </div>

                <div className="test-hidrogeno__card">
                    <div className="test-hidrogeno__image-wrapper">
                        <img src={imgTestHidrogeno} alt="Test de Hidrógeno device" className="test-hidrogeno__img" />
                    </div>
                </div>

                <div className="test-hidrogeno__description poppins-regular">
                    <p>
                        Estudio para detectar intolerancia a la lactosa, fructosa, disbiosis intestinal (SIBO).
                    </p>
                </div>
            </div>
        </section>
    );
}
