import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { showMenuSelector } from "../../state/selectors/showMenu";
import { setShowMenu } from "../../state/slices/showMenuSlice";
import ShowMenuIcon from "./ShowMenuIcon";
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
    <header className="flex justify-between items-center px-8 py-5 l:px-14 bg-lighter md:h-[120px]">
      <Link
        to="/"
        className="text-xl z-10 l:text-2xl w-[200px] s:w-[250px]"
        onClick={handleLogoClick}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mazurek-studio.appspot.com/o/static%2Fimg%2Flogo.png?alt=media&token=4557b9f3-5260-4a7d-8646-3764e934d602"
          alt="page logo"
          className="w-full"
        />
      </Link>
      <ShowMenuIcon />
      {showMenu && <Navbar />}
    </header>
  );
};

export default Header;
