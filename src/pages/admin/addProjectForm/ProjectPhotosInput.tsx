import { Dispatch, SetStateAction, useState } from "react";

import usePhotoUpload from "../../../hooks/usePhotoUpload";

interface ProjectPhotosInputProps {
  projectId: string;
  photos: string[];
  setPhotos: Dispatch<SetStateAction<string[]>>;
}

const ProjectPhotosInput: React.FC<ProjectPhotosInputProps> = ({
  projectId,
  photos,
  setPhotos,
}) => {
  const [photoCount, setPhotoCount] = useState(0);

  const {
    uploadPhoto,
    isPending: isUploadingPhotoPending,
    error: uploadingPhotoError,
  } = usePhotoUpload();

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    uploadPhoto(e, projectId, photoCount, setPhotoCount, setPhotos);
  };

  return (
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
          {isUploadingPhotoPending
            ? "Dodawanie..."
            : "Kliknij tutaj, aby dodać"}
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
        {uploadingPhotoError && <div>{uploadingPhotoError}</div>}
      </div>
    </div>
  );
};

export default ProjectPhotosInput;
