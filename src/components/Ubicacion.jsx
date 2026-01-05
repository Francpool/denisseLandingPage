import React from "react";
import "../styles/ubicacion.css";
import miniMap from "../assets/img/mapa.png";
import bigMap from "../assets/img/mapa2.png";
// import sIcon from "../assets/img/s_logo.png"; // We don't have this, will use CSS placeholder or similar

export default function Ubicacion() {
    return (
        <section id="ubicacion" className="ubicacion">
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
                                    <a href="https://www.google.com/maps/place/Axxis+Centro+%C3%93ptico/@-0.1703729,-78.4874886,3a,75y,256.63h,76.52t/data=!3m10!1e1!3m8!1sLhkryFPoAYxh4T2qGU1DtA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.482803743301972%26panoid%3DLhkryFPoAYxh4T2qGU1DtA%26yaw%3D256.6317895718909!7i16384!8i8192!9m2!1b1!2i45!4m15!1m8!3m7!1s0x91d59a9096746a83:0x57ae48ab4cd38ef!2sAv.+10+de+Agosto+39-155,+Quito+170104,+Ecuador!3b1!8m2!3d-0.170664!4d-78.487609!16s%2Fg%2F11yjz_sm2k!3m5!1s0x91d59b806960279d:0xe5ef54947e7a20d8!8m2!3d-0.1702241!4d-78.4875234!16s%2Fg%2F11n83gt64t?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
                                        <img src={miniMap} alt="Mapa Quito" />
                                    </a>
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
                                    <a href="https://www.google.com/maps/place/Darquea+%26+5+de+Junio,+Ambato,+Ecuador/@-1.2359672,-78.6252346,17z/data=!3m1!4b1!4m6!3m5!1s0x91d381a552386e51:0x8d579d3870e3004a!8m2!3d-1.2359726!4d-78.6226597!16s%2Fg%2F11gf21j3sg?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
                                        <img src={miniMap} alt="Mapa Ambato" />
                                    </a>
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
