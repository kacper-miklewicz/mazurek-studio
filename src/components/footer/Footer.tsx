import Socials from "./Socials";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col items-center bg-darker w-full px-10 py-20 mt-10 md:mt-20">
      <Socials />
    </footer>
  );
};

export default Footer;
