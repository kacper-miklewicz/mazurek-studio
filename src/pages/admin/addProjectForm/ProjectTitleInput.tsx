import { Dispatch, SetStateAction } from "react";

interface ProjectTitleProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title, setTitle }) => {
  return (
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
        {title ? <span>{title}</span> : <span>Nie dodano nazwy projektu.</span>}
      </div>
    </div>
  );
};

export default ProjectTitle;
