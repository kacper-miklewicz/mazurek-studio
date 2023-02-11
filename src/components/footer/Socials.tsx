import SocialsItem from "./SocialsItem";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

interface SocialsProps {}

const Socials: React.FC<SocialsProps> = () => {
  return (
    <ul className="flex justify-evenly w-full max-w-[680px]">
      <SocialsItem
        url="https://www.instagram.com/mazurek.studio"
        icon={<FaInstagram />}
      />
      <SocialsItem
        url="https://www.facebook.com/profile.php?id=100087601991813"
        icon={<FaFacebookF />}
      />
      <SocialsItem
        url="https://pl.pinterest.com/mazurekstudio0270/"
        icon={<FaPinterestP />}
      />
    </ul>
  );
};

export default Socials;
