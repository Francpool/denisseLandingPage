import React from "react";
import { Link } from "react-router-dom";
import "../styles/estudios.css";
import img1 from "../assets/img/er1.png";
import img2 from "../assets/img/er2.png";
import img3 from "../assets/img/er3.png";

const STUDIES = [
    { img: img1, label: "Test de Hidrógeno" },
    { img: img2, label: "Endoscopia- Colonoscopia" },
    { img: img3, label: "Pruebas de alergia" },
];

export default function Estudios() {
    return (
        <section className="estudios">
            <div className="container">
                <div className="estudios__header">
                    <h2 className="estudios__title libre-baskerville-bold">
                        <span className="estudios__highlight">Estudios</span> que realizamos:
                    </h2>
                </div>

                <div className="estudios__grid">
                    {/* Test de Hidrógeno - Linkable */}
                    <div className="estudios__card estudios__card--1">
                        <div className="estudios__label poppins-medium">Test de Hidrógeno</div>
                        <Link to="/test-hidrogeno" className="estudios__figure-link">
                            <div className="estudios__figure">
                                <img src={img1} alt="Test de Hidrógeno" />
                            </div>
                        </Link>
                    </div>

                    {/* Endoscopia - Linkable */}
                    <div className="estudios__card estudios__card--2">
                        <div className="estudios__label poppins-medium">Endoscopia- Colonoscopia</div>
                        <Link to="/endoscopia" className="estudios__figure-link">
                            <div className="estudios__figure">
                                <img src={img2} alt="Endoscopia- Colonoscopia" />
                            </div>
                        </Link>
                    </div>

                    {/* Pruebas de alergia - Linkable */}
                    <div className="estudios__card estudios__card--3">
                        <div className="estudios__label poppins-medium">Pruebas de alergia</div>
                        <Link to="/pruebas-alergia" className="estudios__figure-link">
                            <div className="estudios__figure">
                                <img src={img3} alt="Pruebas de alergia" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Rings */}
            <div className="estudios__ring estudios__ring--top-right" aria-hidden="true"></div>
            <div className="estudios__ring estudios__ring--bottom-left" aria-hidden="true"></div>
        </section>
    );
}
