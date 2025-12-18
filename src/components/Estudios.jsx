import React from "react";
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
                    {STUDIES.map((item, idx) => (
                        <div className={`estudios__card estudios__card--${idx + 1}`} key={idx}>
                            <div className="estudios__label poppins-medium">{item.label}</div>
                            <div className="estudios__figure">
                                <img src={item.img} alt={item.label} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Rings */}
            <div className="estudios__ring estudios__ring--top-right" aria-hidden="true"></div>
            <div className="estudios__ring estudios__ring--bottom-left" aria-hidden="true"></div>
        </section>
    );
}
