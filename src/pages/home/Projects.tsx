import { useAppSelector } from "../../state/hooks";
import { projectsSelector } from "../../state/selectors/projects";

import ProjectCard from "../../components/project-card/ProjectCard";

const Projects: React.FC = () => {
  const projects = useAppSelector(projectsSelector);

  return (
    <section>
      <ul className="my-10 mx-auto px-5 grid gap-10 xs:px-10 s:px-16 md:py-10 md:grid-cols-2 l:px-20 xl:px-36 max-w-[1560px]">
        {projects.map(project => (
          <ProjectCard key={project.projectId} data={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
