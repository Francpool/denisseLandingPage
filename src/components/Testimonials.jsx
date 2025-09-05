import React from "react";
export default function Testimonials() {
  const quotes = [
    { name: "Client A", text: "Amazing work! Exactly like our Canva mockup." },
    { name: "Client B", text: "Fast, clean, and responsive." },
  ];
  return (
    <section id="testimonials" className="container" style={{ padding: "var(--space-7) 0" }}>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", marginBottom: "var(--space-5)" }}>Testimonials</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {quotes.map((q, i) => (
          <figure key={i} style={{ border: "1px solid #e5e7eb", borderRadius: "var(--radius)", padding: "1rem", boxShadow: "var(--shadow-1)" }}>
            <blockquote style={{ margin: 0, fontStyle: "italic" }}>"{q.text}"</blockquote>
            <figcaption style={{ marginTop: ".75rem", fontWeight: 600 }}>— {q.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
