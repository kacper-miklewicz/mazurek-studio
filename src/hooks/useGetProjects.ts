import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import { useAppDispatch } from "../state/hooks";
import { setProjects } from "../state/slices/projectsSlice";
import { Project } from "../types/project";

const useGetProjects = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);
  const dispatch = useAppDispatch();

  const getProjects = async () => {
    setError(null);
    setIsPending(true);

    try {
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

      setIsPending(false);
    } catch (e) {
      setError(e);
      setIsPending(false);
    }
  };

  return { getProjects, isPending, error };
};

export default useGetProjects;
