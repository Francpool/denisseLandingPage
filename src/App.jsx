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
import SignosAlergia from "./pages/SignosAlergia.jsx";
import TestHidrogeno from "./pages/TestHidrogeno.jsx";
import Endoscopia from "./pages/Endoscopia.jsx";
import PruebasAlergia from "./pages/PruebasAlergia.jsx";

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
        <Route path="/signos-alergia" element={<SignosAlergia />} />
        <Route path="/test-hidrogeno" element={<TestHidrogeno />} />
        <Route path="/endoscopia" element={<Endoscopia />} />
        <Route path="/pruebas-alergia" element={<PruebasAlergia />} />
      </Routes>
    </Router>
  );
}
