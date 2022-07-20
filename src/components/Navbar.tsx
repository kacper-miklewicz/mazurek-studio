import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  open: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ open, setIsMenuOpen }) => {
  return (
    <nav
      className={`absolute top-0 left-0 flex w-full h-screen transition-all  ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul
        onClick={() => setIsMenuOpen(false)}
        className="w-full bg-white pt-20"
      >
        <li>
          <NavLink
            to="o-mnie"
            className="block w-full text-center text-2xl leading-[2.5]"
          >
            O mnie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projekty"
            className="block w-full text-center text-2xl leading-[2.5]"
          >
            Projekty
          </NavLink>
        </li>
        <li>
          <NavLink
            to="oferta"
            className="block w-full text-center text-2xl leading-[2.5]"
          >
            Oferta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="kontakt"
            className="block w-full text-center text-2xl leading-[2.5]"
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
function setIsMenuOpen(arg0: boolean): void {
  throw new Error("Function not implemented.");
}
