import { Dispatch, SetStateAction } from "react";

interface ProjectIdProps {
  projectId: string;
  setProjectId: Dispatch<SetStateAction<string>>;
}

const ProjectId: React.FC<ProjectIdProps> = ({ projectId, setProjectId }) => {
  return (
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
  );
};

export default ProjectId;
