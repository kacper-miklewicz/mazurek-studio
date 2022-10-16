import StudioDescription from "./StudioDescription";
import StudioOwner from "./StudioOwner";

const About: React.FC = () => {
  return (
    <main className="px-5 py-10 mx-auto max-w-[550px] xs:px-16">
      <StudioDescription />
      <StudioOwner />
    </main>
  );
};

export default About;
