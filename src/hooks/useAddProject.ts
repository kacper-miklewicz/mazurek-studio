import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

import { Project } from "../types/project";
import { db } from "../firebase/config";

const useAddProject = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);

  const addProject = async (project: Project) => {
    setIsPending(true);
    setError(null);

    try {
      const docRef = await addDoc(collection(db, "projects"), project);

      if (!docRef) {
        setError("Błąd przy dodawaniu dokumentu. Spróbuj ponownie.");
        setIsPending(false);
        return;
      }
      setIsPending(false);
    } catch (e: any) {
      setError(e);
      setIsPending(false);
    }
  };

  return { addProject, isPending, error };
};

export default useAddProject;
