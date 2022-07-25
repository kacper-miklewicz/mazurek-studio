import { Dispatch, SetStateAction } from "react";
import MenuLink from "./MenuLink";

interface NavbarProps {
  open: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ open, setIsMenuOpen }) => {
  return (
    <nav
      className={`absolute top-0 right-0 items-center w-full h-screen bg-dark ${
        open ? "flex" : "hidden"
      } md:w-1/3 l:w-1/4`}
      onClick={() => setIsMenuOpen(false)}
    >
      <ul className="w-full">
        <MenuLink pageLink="o-mnie" text="O mnie" />
        <MenuLink pageLink="projekty" text="Projekty" />
        <MenuLink pageLink="oferta" text="Oferta" />
        <MenuLink pageLink="kontakt" text="Kontakt" />
      </ul>
    </nav>
  );
};

export default Navbar;
