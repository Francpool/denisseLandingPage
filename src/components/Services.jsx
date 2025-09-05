import React from "react";
export default function Services() {
  const items = [
    { title: "Service One", desc: "Short description of your service as designed in Canva." },
    { title: "Service Two", desc: "Another short line matching your Canva layout." },
    { title: "Service Three", desc: "Replace all this text with your real copy." },
  ];

  return (
    <section id="services" className="container" style={{ padding: "var(--space-7) 0" }}>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", marginBottom: "var(--space-5)" }}>Our Services</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
        {items.map((it, i) => (
          <article key={i} style={{ border: "1px solid #e5e7eb", borderRadius: "var(--radius)", padding: "1rem", boxShadow: "var(--shadow-1)" }}>
            <h3 style={{ margin: "0 0 .5rem 0" }}>{it.title}</h3>
            <p style={{ margin: 0, opacity: .9 }}>{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
