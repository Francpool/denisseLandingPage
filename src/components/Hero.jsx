// import stomach from "../assets/svg/stomach.svg";   // SVG rosado de Canva
// import doctor from "../assets/img/doctor.png";     // PNG con transparencia (opcional)
import React from "react";
export default function Hero(){
  return (
    <section className="hero">
      <div className="hero__ring hero__ring--tl" aria-hidden="true"></div>
      <div className="hero__ring hero__ring--br" aria-hidden="true"></div>
      {/* <img className="hero__stomach" src={stomach} alt="" aria-hidden="true"/> */}

      <div className="container hero__grid">
        <div>{/* aquí irán tus títulos/CTA luego */}</div>
        <div className="hero__figure">
          {/* <img className="hero__photo" src={doctor} alt="Dra. Denisse Mayorga"/> */}
        </div>
      </div>
    </section>
  );
}
