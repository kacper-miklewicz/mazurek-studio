import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between px-8 py-5 bg-base">
      <Link to="/" className="z-10" onClick={() => setIsMenuOpen(false)}>
        mazurek studio
      </Link>
      <button onClick={handleBurgerClick} className="z-10">
        <span
          className={`bg-black w-6 h-[3px] block my-1 transition-all ${
            isMenuOpen && "-rotate-45 translate-y-[7px]"
          }`}
        ></span>
        <span
          className={`bg-black w-6 h-[3px] block my-1 transition-all ${
            isMenuOpen && "-translate-x-full opacity-0"
          }`}
        ></span>
        <span
          className={`bg-black w-6 h-[3px] block my-1 transition-all ${
            isMenuOpen && "rotate-45 -translate-y-[7px]"
          }`}
        ></span>
      </button>
      <Navbar open={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
