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
      <h2 className="text-xl font-bold mt-5 mb-10 s:text-2xl">{title}</h2>
      <p className="mb-10 xs:mb-10 s:text-lg s:mb-16">{text}</p>
    </>
  );
};

export default ProjectDescription;
