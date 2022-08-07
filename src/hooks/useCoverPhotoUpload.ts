import { Dispatch, SetStateAction, useState } from "react";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "../firebase/config";

const useCoverPhotoUpload = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<any>(null);

  const uploadCover = async (
    e: React.ChangeEvent<HTMLInputElement>,
    projectId: string,
    setCoverPhotoURL: Dispatch<SetStateAction<string>>
  ) => {
    setIsPending(true);
    setError("");

    if (!e.target.files?.length) {
      setError("Załaduj zdjęcie!");
      setIsPending(false);
      return;
    }

    if (!projectId) {
      setError("Wpisz najpierw ID projektu!");
      setIsPending(false);
      return;
    }

    const selected = e.target.files[0];

    if (selected.type !== "image/jpeg" && selected.type !== "image/png") {
      setError("Zły format pliku! Wybierz format jpeg lub png.");
      setIsPending(false);
      return;
    }

    const coverStorageRef = ref(
      storage,
      `covers/${projectId}.${selected.name.split(".").pop()}`
    );

    try {
      const uploadTask = await uploadBytes(coverStorageRef, selected);
      const url = await getDownloadURL(uploadTask.ref);
      setCoverPhotoURL(url);
    } catch (err) {
      setIsPending(false);
      setError(err);
    }

    try {
      const url = await getDownloadURL(coverStorageRef);
      setCoverPhotoURL(url);

      setIsPending(false);
      setError(null);
    } catch (err) {
      setIsPending(false);
      setError(err);
    }
  };

  return { uploadCover, isPending, error };
};

export default useCoverPhotoUpload;
