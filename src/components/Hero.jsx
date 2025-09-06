import stomach from "../assets/img/stomach_trim.png";
import doctor from "../assets/img/doctor_trim.png";
import React from "react";

export default function Hero(){
  return (
    <section className="hero">
      {/* decoraciones */}
      <div className="hero__ring hero__ring--tl" aria-hidden="true"></div>
      <div className="hero__ring hero__ring--br" aria-hidden="true"></div>
      <img className="hero__stomach" src={stomach} alt="" aria-hidden="true"/>
      <div className="hero__decor" aria-hidden="true">
        <div className="hero__corner hero__corner--tl"></div>
        <div className="hero__corner hero__corner--br"></div>
      </div>

      {/* contenido */}
      <div className="container hero__grid">
        {/* TEXTO (columna izquierda) */}
        <div className="hero__text">
          <h1 className="hero__title">
            DRA.<br/>DENISSE<br/>MAYORGA
          </h1>

         <p className="hero__subtitle">
  Gastroenterología,&nbsp;Hepatología<br/>
  Nutrición&nbsp;Pediátrica<br/>
  M.SC&nbsp;Alergia
</p>
        </div>

        {/* FOTO (columna derecha) */}
        <div className="hero__figure">
          <img className="hero__photo" src={doctor} alt="Dra. Denisse Mayorga"/>
        </div>
      </div>
    </section>
  );
}
