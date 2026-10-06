import logo from "../assets/svg/logo.svg";
import React from "react";
import "../styles/navbar.css";
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';


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
        <div className="navbar__socials">
          <a href="https://www.instagram.com/gastropediatra.denisse?stkn=aXU1am9ycnludWxw" target="_blank" rel="noreferrer" className="navbar__social-link" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1GhS41fCkZ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="navbar__social-link" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.tiktok.com/@gastropediatra.de?_r=1&_t=ZS-9AJK2yV2dIm" target="_blank" rel="noreferrer" className="navbar__social-link" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </nav>
    </header>
  );
}
