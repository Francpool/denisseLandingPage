
import React from "react";
import imgAlimentos from "../assets/img/alimentos.png";
import "../styles/nutricionNinos.css";

export default function NutricionNinos() {
    return (
        <section className="nutricion-ninos">
            {/* Background/Side Image - Positioned Absolutely to Section */}
            <div className="nutricion-ninos__image-side">
                <img
                    src={imgAlimentos}
                    alt="Manos sosteniendo un plato de comida saludable"
                    className="nutricion-ninos__img"
                />
            </div>

            <div className="nutricion-ninos__container">
                {/* Top Text Content */}
                <div className="nutricion-ninos__header">
                    <div className="nutricion-ninos__blob nutricion-ninos__blob--top-left"></div>
                    <h1 className="nutricion-ninos__title poppins-medium">
                        Nutrición de Niños y Adolescentes:
                    </h1>
                    <p className="nutricion-ninos__text">
                        Una buena alimentación es esencial para el crecimiento, el desarrollo
                        cerebral y el fortalecimiento del sistema inmune en los niños. Sin
                        embargo, algunos pequeños presentan problemas sensoriales o
                        selectividad alimentaria, lo que puede llevarlos a rechazar ciertos
                        sabores, texturas o colores de los alimentos, afectando su nutrición
                        y su relación con la comida.
                    </p>
                    <p className="nutricion-ninos__text">
                        Con un enfoque integral, es posible mejorar la aceptación de nuevos
                        alimentos y crear hábitos saludables que se mantendrán en la vida
                        adulta.
                    </p>
                </div>

                {/* List Section */}
                <div className="nutricion-ninos__content-row">
                    <div className="nutricion-ninos__list-col">
                        <h2 className="nutricion-ninos__subtitle poppins-medium">
                            Te podemos ayudar con:
                        </h2>
                        <ul className="nutricion-ninos__list">
                            <li>Evaluación Nutricional Completa</li>
                            <li>Plan de Alimentación con Nutricionista</li>
                            <li>Bajo peso o desnutrición</li>
                            <li>Trastornos del apetito niños que no comen</li>
                            <li>Sobrepeso</li>
                            <li>Obesidad</li>
                            <li>Selectividad Alimentaria</li>
                            <li>Niño con Aversión Sensorial al comer</li>
                        </ul>
                        <div className="nutricion-ninos__blob nutricion-ninos__blob--bottom-left"></div>
                    </div>
                    {/* Image col removed from here */}
                </div>
            </div>
        </section>
    );
}

