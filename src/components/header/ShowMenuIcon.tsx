import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { showMenuSelector } from "../../state/selectors/showMenu";
import { setShowMenu } from "../../state/slices/showMenuSlice";

const ShowMenuIcon: React.FC = () => {
  const showMenu = useAppSelector(showMenuSelector);
  const dispatch = useAppDispatch();

  const handleBurgerClick = () => {
    dispatch(setShowMenu(!showMenu));
  };

  return (
    <button
      onClick={handleBurgerClick}
      className={`z-20 transition-transform  ${showMenu ? "rotate-45" : ""}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className="w-8 h-8 s:w-10 s:h-10 l:w-12 l:h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
};

export default ShowMenuIcon;
