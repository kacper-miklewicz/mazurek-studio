interface ProjectDescriptionProps {
  title: string;
  text: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  text,
}) => {
  return (
    <>
      <h2 className={"section-title"}>{title}</h2>
      <p className={"section-text mb-10 xs:mb-10 s:mb-16"}>{text}</p>
    </>
  );
};

export default ProjectDescription;
