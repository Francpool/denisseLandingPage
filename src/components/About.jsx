import React from "react";
import "../styles/about.css";
import doctorImg from "../assets/img/doctor_trim.png";

export default function About() {
    return (
        <section className="about">
            <div className="container about__container">
                {/* Left: Text */}
                <div className="about__content">
                    <h2 className="about__title libre-baskerville-bold">
                        <div className="about__title-line">Gastroenteróloga Pediatra</div>
                        <div className="about__title-line">Especialista en Nutrición</div>
                        <div className="about__title-line">Infantil, y Msc en Alergología</div>
                    </h2>

                    <div className="about__bio poppins-regular">
                        <p>
                            Soy médica especialista en Gastroenterología Pediátrica, formada en la Universidad de Buenos Aires. Cursé la Maestría en Gastroenterología, Hepatología y Nutrición Pediátrica en la Universidad del Salvador, y complementé mi formación con una Maestría en Alergología Pediátrica en TECH Universidad Tecnológica.
                        </p>
                        <p>
                            Mi enfoque se basa en brindar un diagnóstico oportuno, tratamientos personalizados y un acompañamiento humano, actualizado y comprometido con cada familia. Gracias a mi formación multidisciplinaria, abordo las enfermedades digestivas y alérgicas desde una mirada integral, siempre priorizando el bienestar físico y emocional de cada paciente.
                        </p>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="about__figure">
                    <div className="about__bg-circle"></div>
                    <img src={doctorImg} alt="Dra. Denisse Mayorga" className="about__img" />
                </div>
            </div>
        </section>
    );
}
