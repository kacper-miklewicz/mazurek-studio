import { Dispatch, SetStateAction } from "react";

interface ProjectDescriptionInputProps {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}

const ProjectDescriptionInput: React.FC<ProjectDescriptionInputProps> = ({
  description,
  setDescription,
}) => {
  return (
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
  );
};

export default ProjectDescriptionInput;
