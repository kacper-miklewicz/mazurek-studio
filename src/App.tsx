import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Offer from "./pages/Offer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="o-mnie" element={<About />} />
        <Route path="projekty" element={<Projects />} />
        <Route path="oferta" element={<Offer />} />
        <Route path="kontakt" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
