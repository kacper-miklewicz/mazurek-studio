import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoadingScreen from "./components/loading-screen/LoadingScreen";
import AnimatedRoutes from "./components/animated-routes/AnimatedRoutes";

import { db } from "./firebase/config";
import { Project } from "./types/project";

import { useAppDispatch } from "./state/hooks";
import { setProjects } from "./state/slices/projectsSlice";
import useScrollToTop from "./hooks/useScrollToTop";

const App = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const dispatch = useAppDispatch();
  useScrollToTop();

  useEffect(() => {
    const getProjects = async () => {
      try {
        setIsPending(true);
        setError(null);

        const projectsCollection = collection(db, "projects");
        const projectsQuery = query(
          projectsCollection,
          orderBy("order", "asc")
        );
        const querySnapshot = await getDocs(projectsQuery);
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

        setIsPending(false);
      } catch (e) {
        setError(e);
        setIsPending(false);
      }
    };

    getProjects();
  }, [dispatch]);

  return (
    <div className="App flex flex-col justify-between min-h-[100vh]">
      <AnimatePresence>{isPending && <LoadingScreen />}</AnimatePresence>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default App;
