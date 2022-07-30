import React, { useState } from "react";

interface AdminPanelProps {}

const AdminPanel: React.FC<AdminPanelProps> = () => {
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const selected = e.target.files[0];
    setCoverPhoto(selected);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const selected = e.target.files[0];
    setPhotos(prevPhotos => [...prevPhotos, selected]);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Zdjęcie główne:");
    console.log(coverPhoto);

    console.log("Nazwa projektu:", projectName);

    console.log("ID projektu:", projectId);

    console.log("Zdjęcia:");
    console.log(photos);
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-[1280px] py-10">
      <h2 className="text-2xl font-bold py-10 text-center">
        Dodawanie nowych projektów
      </h2>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-center items-center w-[400px] space-y-20"
      >
        <label className="text-xl space-y-4">
          Krok 1: Załaduj zdjęcie główne
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

        <label className="text-xl flex flex-col space-y-4">
          <span>Krok 2: Podaj nazwę projektu</span>
          <input
            required
            type="text"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className="py-2 px-2"
          />
        </label>

        <label className="text-xl flex flex-col space-y-4">
          <span>
            Krok 3: Podaj id projektu (to, co będzie wyświetlane po adresie
            strony w pasku wyszukiwania)
          </span>
          <input
            required
            type="text"
            value={projectId}
            onChange={e => setProjectId(e.target.value)}
            className="py-2 px-2"
          />
        </label>

        <label className="text-xl flex flex-col space-y-4">
          <span>Krok 4: Załaduj zdjęcia projektu</span>
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

        <button
          type="submit"
          className="block text-center text-lg py-2 cursor-pointer bg-black/80 text-white rounded w-full"
        >
          Dodaj projekt
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
