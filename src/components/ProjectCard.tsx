import { useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "../types/project";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <li className="">
      <h3 className="text-xl mb-2 md:hidden">{data.title}</h3>
      <Link to={`projekty/${data.projectId}`}>
        <div
          className="h-[500px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${data.coverPhotoURL}}` }}
          onMouseEnter={() => setShowTitle(true)}
          onMouseLeave={() => setShowTitle(false)}
        >
          {showTitle && (
            <div className="w-full h-full bg-[rgba(0,0,0,.3)] absolute top-0 left-0 flex items-center justify-center">
              <p className="text-white text-2xl">{data.title}</p>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
