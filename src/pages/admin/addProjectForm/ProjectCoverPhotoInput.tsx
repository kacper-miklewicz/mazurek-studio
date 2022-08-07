import { Dispatch, SetStateAction } from "react";

import useCoverPhotoUpload from "../../../hooks/useCoverPhotoUpload";

interface ProjectCoverPhotoInputProps {
  projectId: string;
  coverPhotoURL: string;
  setCoverPhotoURL: Dispatch<SetStateAction<string>>;
}

const ProjectCoverPhotoInput: React.FC<ProjectCoverPhotoInputProps> = ({
  projectId,
  coverPhotoURL,
  setCoverPhotoURL,
}) => {
  const {
    uploadCover,
    isPending: isUploadingCoverPending,
    error: uploadingCoverError,
  } = useCoverPhotoUpload();

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    uploadCover(e, projectId, setCoverPhotoURL);
  };

  return (
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
          {isUploadingCoverPending ? "Dodawanie..." : "Kliknij tutaj aby dodać"}
        </span>
      </label>
      <div className="bg-darker px-10 py-5 rounded">
        <h3 className="font-bold">Zdjęcie główne: </h3>
        {coverPhotoURL ? (
          <a href={coverPhotoURL}>{coverPhotoURL}</a>
        ) : (
          <span>Nie dodano zdjęcia głównego.</span>
        )}
        {uploadingCoverError && <div>{uploadingCoverError}</div>}
      </div>
    </div>
  );
};

export default ProjectCoverPhotoInput;
