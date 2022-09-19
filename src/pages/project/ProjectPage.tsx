import { useParams } from "react-router-dom";

import { useAppSelector } from "../../state/hooks";
import { projectsSelector } from "../../state/selectors/projects";

import ProjectDescription from "./ProjectDescription";
import ProjectPhotoGallery from "./ProjectPhotoGallery";

interface ProjectPageProps {}

const ProjectPage: React.FC<ProjectPageProps> = () => {
  const { id } = useParams();
  const project = useAppSelector(projectsSelector).find(
    project => project.projectId === id
  );

  return (
    <>
      {project && (
        <section className="px-8 py-8 mx-auto max-w-[1280px] xs:px-16 s:px-24 md:px-36">
          <ProjectDescription
            title={project.title}
            text={project.description}
          />
          <ProjectPhotoGallery photos={project.photos} />
        </section>
      )}
    </>
  );
};

export default ProjectPage;
