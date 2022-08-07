import { Dispatch, SetStateAction, useState } from "react";

import useAddProject from "../../../hooks/useAddProject";

import ProjectCoverPhotoInput from "./ProjectCoverPhotoInput";
import ProjectDescriptionInput from "./ProjectDescriptionInput";
import ProjectId from "./ProjectIdInput";
import ProjectPhotosInput from "./ProjectPhotosInput";
import ProjectTitle from "./ProjectTitleInput";

interface AddProjectFormProps {
  setShowAdminPanel: Dispatch<SetStateAction<boolean>>;
}

const AddProjectForm: React.FC<AddProjectFormProps> = ({
  setShowAdminPanel,
}) => {
  const [coverPhotoURL, setCoverPhotoURL] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [photos, setPhotos] = useState<string[]>([]);

  const {
    addProject,
    isPending: isAddingProjectPending,
    error: addingProjectError,
  } = useAddProject();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addProject({
      title,
      projectId,
      description,
      coverPhotoURL,
      photos,
    });

    setCoverPhotoURL("");
    setTitle("");
    setDescription("");
    setProjectId("");
    setPhotos([]);
    setShowAdminPanel(false);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col justify-center items-center w-full max-w-[600px] space-y-20"
    >
      <ProjectId projectId={projectId} setProjectId={setProjectId} />
      <ProjectTitle title={title} setTitle={setTitle} />
      <ProjectDescriptionInput
        description={description}
        setDescription={setDescription}
      />
      <ProjectCoverPhotoInput
        projectId={projectId}
        coverPhotoURL={coverPhotoURL}
        setCoverPhotoURL={setCoverPhotoURL}
      />
      <ProjectPhotosInput
        projectId={projectId}
        photos={photos}
        setPhotos={setPhotos}
      />

      {!isAddingProjectPending && (
        <button
          type="submit"
          className="block text-center text-lg py-2 cursor-pointer bg-black/80 text-white rounded w-full max-w-[250px]"
        >
          Dodaj projekt
        </button>
      )}
      {isAddingProjectPending && (
        <button
          disabled
          className="block text-center text-lg py-2 cursor-pointer bg-black/80 text-white rounded w-full max-w-[250px]"
        >
          Dodawanie projektu...
        </button>
      )}
      {addingProjectError && <div>{addingProjectError}</div>}
    </form>
  );
};

export default AddProjectForm;
