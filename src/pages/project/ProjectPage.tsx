import { useParams } from "react-router-dom";
import { useAppSelector } from "../../state/hooks";
import { projectsSelector } from "../../state/selectors/projects";

interface ProjectPageProps {}

const ProjectPage: React.FC<ProjectPageProps> = () => {
  const { id } = useParams();
  const project = useAppSelector(projectsSelector).find(
    project => project.projectId === id
  );

  return (
    <>
      {project && (
        <section className="px-8">
          <h2 className="font-bold my-5">{project.title}</h2>
          <p>{project.description}</p>
        </section>
      )}
    </>
  );
};

export default ProjectPage;
