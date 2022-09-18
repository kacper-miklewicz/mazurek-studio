import { useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "../types/project";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <li className="overflow-hidden project-card">
      <Link to={`projekty/${data.projectId}`}>
        <h3 className="text-xl mb-2 md:text-2xl">{data.title}</h3>
        <div
          className="h-[500px] bg-cover bg-center relative duration-[10000ms] project-card-img"
          style={{ backgroundImage: `url(${data.coverPhotoURL}}` }}
        >
          {/* {showTitle && (
            <div className="w-full h-full bg-[rgba(0,0,0,.3)] absolute top-0 left-0 flex items-center justify-center">
              <p className="text-white text-2xl">{data.title}</p>
            </div>
          )} */}
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
