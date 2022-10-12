import { Link } from "react-router-dom";
import { Project } from "../../types/project";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <li className="overflow-hidden project-card">
      <Link to={`projekty/${data.projectId}`}>
        <h3 className="hidden text-xl mb-2 md:block md:text-2xl">
          {data.title}
        </h3>
        <div
          className="h-[500px] bg-cover bg-center relative transition-all project-card-img"
          style={{ backgroundImage: `url(${data.coverPhotoURL}}` }}
        ></div>
      </Link>
    </li>
  );
};

export default ProjectCard;
