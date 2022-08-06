import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/header/Header";
import Offer from "./pages/Offer";
import Admin from "./pages/admin/Admin";

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
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
