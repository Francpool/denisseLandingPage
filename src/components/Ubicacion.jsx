import React from "react";
import "../styles/ubicacion.css";
import miniMap from "../assets/img/mapa.png";
import bigMap from "../assets/img/mapa2.png";
// import sIcon from "../assets/img/s_logo.png"; // We don't have this, will use CSS placeholder or similar

export default function Ubicacion() {
    return (
        <section className="ubicacion">
            <div className="container ubicacion__container">

                {/* Left Side: Text & Locations */}
                <div className="ubicacion__info">
                    <h2 className="ubicacion__title libre-baskerville-bold">
                        ¿Dónde estamos ubicados?
                    </h2>

                    <div className="ubicacion__list">
                        {/* Quito */}
                        <div className="ubicacion__item">
                            <div className="ubicacion__details">
                                <h3 className="ubicacion__city libre-baskerville-bold">Quito</h3>
                                <p className="ubicacion__address poppins-regular">
                                    Av 10 de agosto 39-155 y Diguja<br />
                                    Hospital AXXIS Torre Materno Infantil,<br />
                                    consultorio 411
                                </p>
                            </div>
                            <div className="ubicacion__map-col">
                                <div className="ubicacion__mini-map">
                                    <img src={miniMap} alt="Mapa Quito" />
                                </div>
                                <div className="ubicacion__s-circle">S</div>
                            </div>
                        </div>

                        {/* Ambato */}
                        <div className="ubicacion__item">
                            <div className="ubicacion__details">
                                <h3 className="ubicacion__city libre-baskerville-bold">Ambato</h3>
                                <p className="ubicacion__address poppins-regular">
                                    5 de junio y darquea planta alta<br />
                                    pediátria especializada
                                </p>
                            </div>
                            <div className="ubicacion__map-col">
                                <div className="ubicacion__mini-map">
                                    <img src={miniMap} alt="Mapa Ambato" />
                                </div>
                                <div className="ubicacion__s-circle">S</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Map Illustration & CTA */}
                <div className="ubicacion__visual">
                    <div className="ubicacion__illustration poppins-regular">
                        <img src={bigMap} alt="Ilustración Mapa" />
                    </div>

                    <a href="https://wa.me/593988913012" target="_blank" rel="noreferrer" className="ubicacion__cta">
                        <span className="ubicacion__phone-icon">📞</span>
                        <span className="ubicacion__cta-text poppins-medium">AGENDA TU CITA AL 098 891 3012</span>
                    </a>
                </div>

            </div>

            {/* Background decoration matching reference (white circle/overlays) */}
            <div className="ubicacion__bg-decor" aria-hidden="true"></div>
        </section>
    );
}
