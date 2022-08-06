import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { showMenuSelector } from "../../state/selectors/showMenu";
import { setShowMenu } from "../../state/slices/showMenuSlice";
import BurgerIcon from "./BurgerIcon";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const showMenu = useAppSelector(showMenuSelector);
  const dispatch = useAppDispatch();

  const handleLogoClick = () => {
    if (showMenu) {
      dispatch(setShowMenu(false));
    }
  };

  return (
    <header className="flex justify-between items-center px-8 h-[70px] l:px-14 bg-lighter">
      <Link
        to="/"
        className="text-xl z-10 l:text-2xl"
        onClick={handleLogoClick}
      >
        mazurek studio
      </Link>
      <BurgerIcon />
      {showMenu && <Navbar />}
    </header>
  );
};

export default Header;
