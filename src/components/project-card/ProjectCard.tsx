import { Link } from "react-router-dom";
import { Project } from "../../types/project";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <li className="overflow-hidden project-card">
      <Link to={`projekty/${data.projectId}`}>
        <h3 className="text-xl mb-2 md:block md:text-3xl">{data.title}</h3>
        <div
          className="h-[500px] bg-cover bg-center relative transition-all duration-300 project-card-img l:h-[600px] xl:h-[700px]"
          style={{ backgroundImage: `url(${data.coverPhotoURL}}` }}
        ></div>
      </Link>
    </li>
  );
};

export default ProjectCard;
