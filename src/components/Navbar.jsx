import logo from "../assets/svg/logo.svg";
import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="container navbar__container">
        {/* <a href="/" className="navbar__brand">
          <img src={logo} alt="Logo" />
          <span>Brand</span>
        </a> */}
        <div className="navbar__links">
          <a href="#specialties" className="navbar__link" onClick={(e) => { e.preventDefault(); document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' }); }}>Servicios</a>
          <a href="#ubicacion" className="navbar__link" onClick={(e) => { e.preventDefault(); document.getElementById('ubicacion')?.scrollIntoView({ behavior: 'smooth' }); }}>Ubicación</a>
          <a href="https://wa.me/593988913012" target="_blank" rel="noreferrer" className="btn btn--primary navbar__link">Agendar Cita</a>
        </div>
      </nav>
    </header>
  );
}
