import { useAppSelector } from "../../state/hooks";
import { projectsSelector } from "../../state/selectors/projects";

import ProjectCard from "../../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = useAppSelector(projectsSelector);

  return (
    <section>
      <ul className="mt-10 px-5 grid xs:px-10 s:px-16 md:py-10 md:grid-cols-2 md:gap-20 l:px-20 l:gap-36 xl:px-36 xl:gap-44">
        {projects.map(project => (
          <ProjectCard key={project.projectId} data={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
