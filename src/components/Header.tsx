import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { showMenuSelector } from "../state/selectors/showMenu";
import { setShowMenu } from "../state/slices/showMenuSlice";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const showMenu = useAppSelector(showMenuSelector);
  const dispatch = useAppDispatch();

  const handleBurgerClick = () => {
    dispatch(setShowMenu(!showMenu));
  };

  const handleLogoClick = () => {
    if (showMenu) {
      dispatch(setShowMenu(false));
    }
  };

  return (
    <header className="flex justify-between px-8 py-5 bg-base">
      <Link to="/" className="z-10" onClick={handleLogoClick}>
        mazurek studio
      </Link>
      <button onClick={handleBurgerClick} className="z-10">
        <span
          className={`bg-black w-6 h-[3px] block my-1 transition-all ${
            showMenu && "-rotate-45 translate-y-[7px]"
          }`}
        ></span>
        <span
          className={`bg-black w-6 h-[3px] block my-1 transition-all ${
            showMenu && "-translate-x-full opacity-0"
          }`}
        ></span>
        <span
          className={`bg-black w-6 h-[3px] block my-1 transition-all ${
            showMenu && "rotate-45 -translate-y-[7px]"
          }`}
        ></span>
      </button>
      {showMenu && <Navbar />}
    </header>
  );
};

export default Header;
