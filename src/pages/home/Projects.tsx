import { useAppSelector } from "../../state/hooks";
import { projectsSelector } from "../../state/selectors/projects";

import ProjectCard from "../../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = useAppSelector(projectsSelector);

  return (
    <section>
      <ul className="mt-10">
        {projects.map(project => (
          <ProjectCard key={project.projectId} data={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
