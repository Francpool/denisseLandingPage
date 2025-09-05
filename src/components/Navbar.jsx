import logo from "../assets/svg/logo.svg";
import React from "react";

export default function Navbar() {
  return (
    <header style={{ borderBottom: "1px solid #e5e7eb" }}>
      <nav className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
          <img src={logo} alt="Logo" style={{ height: 32 }} />
          <strong>Brand</strong>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn btn--primary">Contact</a>
        </div>
      </nav>
    </header>
  );
}
