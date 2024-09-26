import { useState } from "react";
import { Link } from "react-router-dom";

const UserMenu = ({ relativeClasses }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`${relativeClasses} w-fit`}>
      <div className="flex w-fit flex-row items-center justify-center gap-1 rounded-[51px] bg-[hsla(273,70%,94%,1)] px-2 py-1">
        <button aria-label="change language" className="size-fit">
          <img src="icons/saudi-arabia.svg" className="h-4 w-[21.33px]" />
        </button>
        <button
          aria-label="show user-menu"
          className="flex w-fit cursor-pointer flex-row items-center"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src="icons/user.svg" className="h-6 w-6" />
          <img
            src="icons/chevron-down.svg"
            className={`h-6 w-5 transition-all duration-500 ${showMenu ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>
      <div
        className={`${showMenu ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-1 scale-90 opacity-0"} absolute top-[calc(100%+12px)] w-full max-w-[120px] origin-top-left rounded bg-[hsla(0,0%,100%,1)] p-2 shadow-[0px_2px_4px_0px_hsla(0,0%,0%,0.08),0px_0px_6px_0px_hsla(0,0%,0%,0.02)] transition-all duration-300 lg:right-0 lg:origin-top-right`}
      >
        <ul className="flex w-full flex-col gap-2 text-sm/[14px] text-[hsla(0,0%,0%,1)]">
          <Link
            to="/"
            className="w-full rounded-[4px] border border-[hsla(213,20%,89%,1)] p-2 pb-[6px]"
          >
            Tickets
          </Link>
          <Link
            to="/"
            className="w-full rounded-[4px] border border-[hsla(213,20%,89%,1)] p-2 pb-[6px]"
          >
            Profile
          </Link>
          <Link
            to="/"
            className="w-full rounded-[4px] border border-[hsla(213,20%,89%,1)] p-2 pb-[6px]"
          >
            Settings
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
