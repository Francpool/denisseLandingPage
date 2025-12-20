import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NutricionNinos from "./pages/NutricionNinos.jsx";
import EnfermedadesHepatobiliares from "./pages/EnfermedadesHepatobiliares.jsx";
import EnfermedadesGastrointestinales from "./pages/EnfermedadesGastrointestinales.jsx";
import IntoleranciasAlimentarias from "./pages/IntoleranciasAlimentarias.jsx";
import Alergias from "./pages/Alergias.jsx";
import TestLeche from "./pages/TestLeche.jsx";
import MateriaFecal from "./pages/MateriaFecal.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutricion-ninos" element={<NutricionNinos />} />
        <Route path="/enfermedades-hepatobiliares" element={<EnfermedadesHepatobiliares />} />
        <Route path="/enfermedades-gastrointestinales" element={<EnfermedadesGastrointestinales />} />
        <Route path="/intolerancias-alimentarias" element={<IntoleranciasAlimentarias />} />
        <Route path="/alergias" element={<Alergias />} />
        <Route path="/test-alergia-leche" element={<TestLeche />} />
        <Route path="/materia-fecal" element={<MateriaFecal />} />
      </Routes>
    </Router>
  );
}
