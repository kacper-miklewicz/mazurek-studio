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
      <h2 className="text-xl font-bold mt-5 mb-10 s:text-xl md:text-3xl">
        {title}
      </h2>
      <p className="mb-10 xs:mb-10 s:text-lg s:mb-16 s:leading-8 md:leading-10 md:text-2xl">
        {text}
      </p>
    </>
  );
};

export default ProjectDescription;
