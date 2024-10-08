import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/outline";

// Hooks
import useFocusOutside from "../hooks/useFocusOutside";

const menus = ["Tickets", "Profile", "Settings"];

const UserMenu = ({ relativeClasses }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleButtonRef = useRef(null);

  const handleToggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback((event) => {
    if (
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  }, []);

  const focusOutRef = useFocusOutside(handleCloseMenu);

  return (
    <div
      className={`${relativeClasses} flex w-fit flex-row items-center justify-center gap-1 rounded-[51px] bg-[hsla(273,70%,94%,1)] px-2 py-1`}
    >
      <button aria-label="change language" className="size-fit">
        <img src="icons/saudi-arabia.svg" className="h-4 w-[21.33px]" />
      </button>
      <div className="w-fit">
        <button
          ref={toggleButtonRef}
          aria-label="show user-menu"
          className="peer flex w-fit flex-row items-center"
          onClick={handleToggleMenu}
        >
          <UserCircleIcon
            className={`size-5 transition-all duration-500 ${showMenu && "text-[hsla(273,70%,36%,1)]"} `}
          />
          <ChevronDownIcon
            className={`size-4 transition-all duration-500 ${showMenu && "-rotate-180 text-[hsla(273,70%,36%,1)]"}`}
          />
        </button>
        <div
          ref={focusOutRef}
          className={`${showMenu ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-1 scale-90 opacity-0"} absolute top-[calc(100%+12px)] w-full max-w-[120px] origin-top-left rounded border bg-[hsla(0,0%,100%,1)] p-2 shadow-[0px_2px_4px_0px_hsla(0,0%,0%,0.08),0px_0px_6px_0px_hsla(0,0%,0%,0.02)] transition-all duration-300 focus-within:visible focus-within:translate-y-0 focus-within:scale-100 focus-within:opacity-100 peer-focus-visible:visible peer-focus-visible:translate-y-0 peer-focus-visible:scale-100 peer-focus-visible:opacity-100 lg:right-8 lg:origin-top-right`}
        >
          <ul className="flex w-full flex-col gap-2">
            {menus.map((item, index) => (
              <Link key={index} to="/" className="btn-outline">
                {item}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
