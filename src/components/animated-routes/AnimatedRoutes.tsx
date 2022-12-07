import { Route, Routes, useLocation } from "react-router-dom";

import About from "../../pages/about/About";
import Admin from "../../pages/admin/Admin";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Offer from "../../pages/offer/Offer";
import ProjectPage from "../../pages/project/ProjectPage";

import { AnimatePresence } from "framer-motion";

interface AnimatedRoutesProps {}

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="o-mnie" element={<About />} />
        <Route path="oferta" element={<Offer />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
        <Route path="projekty/:id" element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
