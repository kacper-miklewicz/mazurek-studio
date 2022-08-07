import { useAppSelector } from "../../state/hooks";
import { projectsSelector } from "../../state/selectors/projects";

const Projects: React.FC = () => {
  const projects = useAppSelector(projectsSelector);
  console.log(projects);

  return (
    <main>
      <h1 className="text-2xl">Projects</h1>
    </main>
  );
};

export default Projects;
