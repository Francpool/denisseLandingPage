import React from "react";
import logo from "../assets/svg/logo.svg";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e5e7eb", marginTop: "var(--space-7)" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
          <img src={logo} alt="Logo" style={{ height: 28 }} />
          <strong>Brand</strong>
        </div>
        <small style={{ opacity: .75 }}>© {new Date().getFullYear()} Brand. All rights reserved.</small>
      </div>
    </footer>
  );
}
