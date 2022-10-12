import SocialsItem from "./SocialsItem";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

interface SocialsProps {}

const Socials: React.FC<SocialsProps> = () => {
  return (
    <ul className="flex justify-evenly w-full max-w-[680px]">
      <SocialsItem url="https://www.instagram.com" icon={<FaInstagram />} />
      <SocialsItem url="https://www.facebook.com" icon={<FaFacebookF />} />
      <SocialsItem url="https://www.linkedin.com" icon={<FaLinkedinIn />} />
      <SocialsItem url="https://www.pinterest.com" icon={<FaPinterestP />} />
    </ul>
  );
};

export default Socials;
