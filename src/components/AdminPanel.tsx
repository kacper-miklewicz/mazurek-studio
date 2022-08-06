import React, { Dispatch, SetStateAction, useState } from "react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

import { db, storage } from "../firebase/config";

interface AdminPanelProps {
  setShowAdminPanel: Dispatch<SetStateAction<boolean>>;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ setShowAdminPanel }) => {
  const [coverPhotoURL, setCoverPhotoURL] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoCount, setPhotoCount] = useState(0);

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      console.log("Załaduj zdjęcie!");
      return;
    }

    if (!projectId) {
      console.log("Dodaj najpierw id projektu!");
      return;
    }

    const selected = e.target.files[0];

    const coverStorageRef = ref(
      storage,
      `covers/${projectId}.${selected.name.split(".").pop()}`
    );

    try {
      const uploadTask = await uploadBytes(coverStorageRef, selected);
      const url = await getDownloadURL(uploadTask.ref);
      setCoverPhotoURL(url);
    } catch (err) {
      console.log(err);
    }

    getDownloadURL(coverStorageRef)
      .then(url => {
        setCoverPhotoURL(url);
      })
      .catch(err => console.log(err));
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      console.log("Musisz dodać zdjęcie!");
      return;
    }

    if (!projectId) {
      console.log("Najpierw dodaj id projektu.");
    }

    const selected = e.target.files[0];
    if (selected.type !== "image/jpeg" && selected.type !== "image/png") {
      console.log("Zły format pliku! Wybierz format jpeg lub png.");
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
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Zdjęcie główne:", coverPhotoURL);
    console.log("Nazwa projektu:", title);
    console.log("ID projektu:", projectId);
    console.log("Zdjęcia projektu:", photos);

    try {
      const docRef = await addDoc(collection(db, "projects"), {
        title,
        projectId,
        description,
        coverPhotoURL,
        photos,
      });
      console.log("Zapisano dokument o id:", docRef.id);
    } catch (e) {
      console.log("Błąd przy dodawaniu dokumentu:", e);
    }

    setCoverPhotoURL("");
    setTitle("");
    setDescription("");
    setProjectId("");
    setPhotos([]);
    setShowAdminPanel(false);
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-[1280px] py-10">
      <h2 className="text-2xl font-bold py-10 text-center">
        Dodawanie nowych projektów
      </h2>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-center items-center w-full max-w-[600px] space-y-20"
      >
        <div className="space-y-6 bg-dark w-full max-w-[600px] px-20 py-5 rounded">
          <label className="text-xl flex flex-col space-y-4">
            <span>Krok 1: Podaj id projektu</span>
            <input
              required
              type="text"
              value={projectId}
              onChange={e => setProjectId(e.target.value)}
              className="py-2 px-2"
            />
          </label>
          <div className="bg-darker px-10 py-5 rounded">
            <h3 className="font-bold">ID projektu: </h3>
            {projectId ? (
              <span>{projectId}</span>
            ) : (
              <span>Nie dodano ID projektu.</span>
            )}
          </div>
        </div>

        <div className="space-y-6 bg-dark w-full max-w-[600px] px-20 py-5 rounded">
          <label className="text-xl flex flex-col space-y-4">
            <span>Krok 2: Podaj nazwę projektu</span>
            <input
              required
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="py-2 px-2"
            />
          </label>
          <div className="bg-darker px-10 py-5 rounded">
            <h3 className="font-bold">Nazwa projektu: </h3>
            {title ? (
              <span>{title}</span>
            ) : (
              <span>Nie dodano nazwy projektu.</span>
            )}
          </div>
        </div>

        <div className="space-y-6 bg-dark w-full max-w-[600px] px-20 py-5 rounded">
          <label className="text-xl flex flex-col space-y-4">
            <span>Krok 3: Wpisz opis projektu</span>
            <textarea
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="py-2 px-2 min-h-[300px]"
            />
          </label>
          <div className="bg-darker px-10 py-5 rounded">
            <h3 className="font-bold">Opis projektu: </h3>
            {description ? (
              <span>{description}</span>
            ) : (
              <span>Nie dodano nazwy projektu.</span>
            )}
          </div>
        </div>

        <div className="space-y-6 bg-dark w-full max-w-[600px] px-20 py-5 rounded">
          <label className="text-xl space-y-4">
            Krok 4: Załaduj zdjęcie główne
            <input
              required
              type="file"
              onChange={handleCoverUpload}
              className="hidden"
            />
            <span className="block text-center text-lg my-3 py-2 cursor-pointer bg-darker rounded">
              Kliknij tutaj aby dodać
            </span>
          </label>
          <div className="bg-darker px-10 py-5 rounded">
            <h3 className="font-bold">Zdjęcie główne: </h3>
            {coverPhotoURL ? (
              <a href={coverPhotoURL}>{coverPhotoURL}</a>
            ) : (
              <span>Nie dodano zdjęcia głównego.</span>
            )}
          </div>
        </div>

        <div className="space-y-6 bg-dark w-full max-w-[600px] px-20 py-5 rounded">
          <label className="text-xl flex flex-col space-y-4">
            <span>Krok 5: Załaduj zdjęcia projektu</span>
            <input
              required
              type="file"
              className="hidden"
              onChange={handlePhotoUpload}
            />
            <span className="block text-center text-lg my-3 py-2 cursor-pointer bg-darker rounded">
              Kliknij tutaj aby dodać
            </span>
          </label>
          <div className="bg-darker px-10 py-5 rounded">
            <h3 className="font-bold">Zdjęcia projektu: </h3>
            {photos.length > 0 ? (
              <ul>
                {photos.map(photo => (
                  <li key={Math.random()} className="my-2">
                    <span className="block py-2 text-center font-bold text-xl">
                      {photos.indexOf(photo)}
                    </span>
                    <a href={photo}>{photo}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Nie dodano żadnego zdjęcia.</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="block text-center text-lg py-2 cursor-pointer bg-black/80 text-white rounded w-full max-w-[250px]"
        >
          Dodaj projekt
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
