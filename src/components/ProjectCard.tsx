import { Link } from "react-router-dom";
import { Project } from "../types/project";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <li className="mb-20 mx-5">
      <Link to={`${data.projectId}`}>
        <h3 className="text-xl mb-2">{data.title}</h3>
        <div
          className="h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${data.coverPhotoURL}}` }}
        ></div>
      </Link>
    </li>
  );
};

export default ProjectCard;
