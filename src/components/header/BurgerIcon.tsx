import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { showMenuSelector } from "../../state/selectors/showMenu";
import { setShowMenu } from "../../state/slices/showMenuSlice";

const BurgerIcon: React.FC = () => {
  const showMenu = useAppSelector(showMenuSelector);
  const dispatch = useAppDispatch();

  const handleBurgerClick = () => {
    dispatch(setShowMenu(!showMenu));
  };

  return (
    <button onClick={handleBurgerClick} className="z-20">
      <span
        className={`bg-black w-6 h-[3px] block my-1 transition-all ${
          showMenu && "-rotate-45 translate-y-[7px] l:translate-y-[12px]"
        } l:my-2 l:w-8 l:h-[4px]`}
      ></span>
      <span
        className={`bg-black w-6 h-[3px] block my-1 transition-all ${
          showMenu && "-translate-x-full opacity-0"
        } l:my-2 l:w-8 l:h-[4px]`}
      ></span>
      <span
        className={`bg-black w-6 h-[3px] block my-1 transition-all ${
          showMenu && "rotate-45 -translate-y-[7px] l:-translate-y-[12px]"
        } l:my-2 l:w-8 l:h-[4px]`}
      ></span>
    </button>
  );
};

export default BurgerIcon;
