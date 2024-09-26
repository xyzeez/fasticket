import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Hamburger from "../components/Hamburger";

const MainMenu = ({ relativeClasses }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={`${relativeClasses} flex w-fit`}>
      <button
        aria-label="show main-menu"
        className="z-20 size-6 lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <Hamburger isOpen={showMenu} />
      </button>
      <menu
        className={`${showMenu ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-1 scale-90 opacity-0"} absolute left-0 right-0 top-[calc(100%+12px)] z-20 mx-4 origin-top-right rounded-xl bg-[hsla(0,0%,100%,1)] p-8 shadow-[0px_2px_4px_0px_hsla(0,0%,0%,0.08),0px_0px_6px_0px_hsla(0,0%,0%,0.02)] transition-all duration-300 lg:visible lg:relative lg:left-auto lg:right-auto lg:top-auto lg:mx-0 lg:w-auto lg:translate-y-0 lg:scale-100 lg:rounded-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none`}
      >
        <ul className="flex w-full flex-col gap-6 text-sm/[14px] font-medium text-[hsla(0,0%,0%,1)] lg:flex-row">
          <Link to="/" className="">
            Help center
          </Link>
          <Link to="/" className="">
            Gifts
          </Link>
          <Link to="/" className="">
            My tickets
          </Link>
          <Link to="/" className="btn btn-large lg:hidden">
            Explore tickets
          </Link>
        </ul>
      </menu>
      <div
        className={`fixed inset-0 z-10 h-screen w-screen bg-black/5 backdrop-blur-2xl transition-transform duration-100 lg:hidden ${showMenu ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      ></div>
    </nav>
  );
};

export default MainMenu;
