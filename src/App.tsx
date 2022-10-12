import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/header/Header";
import Offer from "./pages/Offer";
import Admin from "./pages/admin/Admin";
import { useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";
import { Project } from "./types/project";

import { useAppDispatch } from "./state/hooks";
import { setProjects } from "./state/slices/projectsSlice";
import ProjectPage from "./pages/project/ProjectPage";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projects: Project[] = [];

      querySnapshot.forEach(doc => {
        const docData = doc.data();

        projects.push({
          title: docData.title,
          projectId: docData.projectId,
          description: docData.description,
          coverPhotoURL: docData.coverPhotoURL,
          photos: docData.photos,
        });
      });

      dispatch(setProjects(projects));
    };

    getProjects();
  }, []);

  return (
    <div className="App flex flex-col justify-between min-h-[100vh]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="o-mnie" element={<About />} />
        <Route path="oferta" element={<Offer />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
        <Route path="projekty/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
