import React from "react";
import Hero from "../components/Hero.jsx";
// import Services from "../components/Services.jsx";
import Specialties from "../components/Specialties.jsx";
import CuandoAcudir from "../components/CuandoAcudir.jsx";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes.jsx";
import Estudios from "../components/Estudios.jsx";
import About from "../components/About.jsx";
import Ubicacion from "../components/Ubicacion.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <Specialties />
            <CuandoAcudir />
            <PreguntasFrecuentes />
            <Estudios />
            <About />
            <Ubicacion />
            {/* <Testimonials />
      <Footer /> */}
        </>
    );
}
