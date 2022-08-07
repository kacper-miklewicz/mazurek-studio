import { Dispatch, SetStateAction, useState } from "react";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "../firebase/config";

const usePhotoUpload = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);

  const uploadPhoto = async (
    e: React.ChangeEvent<HTMLInputElement>,
    projectId: string,
    photoCount: number,
    setPhotoCount: Dispatch<SetStateAction<number>>,
    setPhotos: Dispatch<SetStateAction<string[]>>
  ) => {
    setIsPending(true);
    setError(null);

    if (!e.target.files) {
      setIsPending(false);
      setError("Musisz dodać zdjęcie!");
      return;
    }

    if (!projectId) {
      setIsPending(false);
      setError("Najpierw dodaj id projektu.");
      return;
    }

    const selected = e.target.files[0];
    if (selected.type !== "image/jpeg" && selected.type !== "image/png") {
      setIsPending(false);
      setError("Zły format pliku! Wybierz format jpeg lub png.");
      return;
    }

    const imagesStorageRef = ref(
      storage,
      `${projectId}/${projectId + photoCount}.${selected.name.split(".").pop()}`
    );

    try {
      const uploadTask = await uploadBytes(imagesStorageRef, selected);
      const url = await getDownloadURL(uploadTask.ref);
      setPhotos(prevPhotos => [...prevPhotos, url]);
      setPhotoCount(photoCount + 1);
      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err);
      setIsPending(false);
    }
  };

  return { uploadPhoto, isPending, error };
};

export default usePhotoUpload;
