import React from "react";
import "../styles/cuando-acudir.css";
import mainImage from "../assets/img/CuandoAcudir.png";
import stomachIcon from "../assets/img/stomach_trim.png"; // Reusing the stomach icon if appropriate, or I might need to use a smaller version or just the image provided. 
// Looking at the reference, the top icon is the stomach icon but faded/styled. I'll reuse the one I have.

export default function CuandoAcudir() {
    return (
        <section className="cuando-acudir">
            <div className="container">
                {/* Header */}
                <header className="ca__header">
                    <img src={stomachIcon} alt="" className="ca__icon" aria-hidden="true" />
                    <h2 className="ca__title libre-baskerville-bold">
                        ¿Cuándo acudir al <br /> gastroenterólogo pediatra?
                    </h2>
                </header>

                {/* Content Grid */}
                <div className="ca__grid">
                    {/* Left Column */}
                    <div className="ca__col ca__col--left">
                        <div className="ca__item">
                            <span className="ca__highlight ca__highlight--teal">Dolor</span> abdominal
                        </div>
                        <div className="ca__item">
                            <span className="ca__highlight ca__highlight--pink">Vomito</span> - reflujo
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="ca__figure">
                        <img src={mainImage} alt="Madre e hija en el baño" className="ca__img" />
                    </div>

                    {/* Right Column */}
                    <div className="ca__col ca__col--right">
                        <div className="ca__item">
                            <span className="ca__highlight ca__highlight--pink">Alteración</span> en peso
                        </div>
                        <div className="ca__item">
                            <span className="ca__highlight ca__highlight--teal">Cambio</span> en el hábito <br /> evacuatorio
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
