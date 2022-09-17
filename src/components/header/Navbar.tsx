import MenuLink from "./MenuLink";

import { useAppDispatch } from "../../state/hooks";
import { setShowMenu } from "../../state/slices/showMenuSlice";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = (e: any) => {
    e.stopPropagation();
    dispatch(setShowMenu(false));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <nav
        className={
          "flex absolute top-0 right-0 items-center w-full h-screen bg-darker md:w-1/3 l:w-1/4"
        }
      >
        <ul className="w-full" onClick={handleClick}>
          <MenuLink pageLink="o-mnie" text="O mnie" />
          <MenuLink pageLink="/" text="Projekty" />
          <MenuLink pageLink="oferta" text="Oferta" />
          <MenuLink pageLink="kontakt" text="Kontakt" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
