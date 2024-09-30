import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Footer = ({ relativeClasses }) => {
  return (
    <footer
      className={`${relativeClasses} bg-[hsla(0,0%,97%,1)] pb-4 pt-10 md:pb-10 md:pt-16 lg:pt-24`}
    >
      <div className="inner grid max-w-[1328px] grid-cols-1 grid-rows-[auto_1fr_auto] gap-x-16 gap-y-8 px-4 sm:grid-cols-[auto_auto] sm:grid-rows-[auto_auto] sm:gap-y-16 md:px-8 lg:gap-y-32">
        <div className="flex max-w-96 flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-10 sm:gap-5 lg:gap-10">
            <Logo />
            <ul className="flex flex-row items-center gap-5">
              <a href="#" aria-label="facebook link">
                <img
                  src="/public/icons/facebook.svg"
                  alt=""
                  className="size-6"
                />
              </a>
              <a href="#" aria-label="x link">
                <img src="/public/icons/x.svg" alt="" className="size-6" />
              </a>
              <a href="#" aria-label="instagram link">
                <img
                  src="/public/icons/instagram.svg"
                  alt=""
                  className="size-6"
                />
              </a>
            </ul>
          </div>
          <p className="flex flex-row items-center gap-[17px] text-xs font-semibold text-[hsla(151,100%,18%,1)] sm:hidden">
            <span className="flex flex-col">
              <span>Proudly</span>
              <span>Supported</span>
              <span>by</span>
            </span>
            <img
              src="/images/fdl.png"
              alt="First Division League"
              className="inline-block"
            />
          </p>
        </div>
        <nav
          aria-label="footer navigation"
          className="flex max-w-[780px] flex-wrap justify-between gap-8 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2"
        >
          <menu className="flex flex-col gap-2 text-sm text-[hsla(206,20%,34%,1)] lg:gap-4 lg:text-base">
            <li>
              <h3 className="text-sm font-medium text-[hsla(201,29%,15%,1)] lg:text-base">
                Site terms and policies
              </h3>
            </li>
            <li>
              <Link to="/">Community standards</Link>
            </li>
            <li>
              <Link to="/">Privacy policy</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Cookies policy</Link>
            </li>
            <li>
              <Link to="/">Cookies settings</Link>
            </li>
          </menu>
          <menu className="flex flex-col gap-2 text-sm text-[hsla(206,20%,34%,1)] lg:gap-4 lg:text-base">
            <li>
              <h3 className="text-sm font-medium text-[hsla(201,29%,15%,1)] lg:text-base">
                About us
              </h3>
            </li>
            <li>
              <Link to="/">About Fasticket</Link>
            </li>
            <li>
              <Link to="/">Brand resources</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Cookies policy</Link>
            </li>
            <li>
              <Link to="/">Cookies settings</Link>
            </li>
          </menu>
          <menu className="flex flex-col gap-2 text-sm text-[hsla(206,20%,34%,1)] lg:gap-4 lg:text-base">
            <li>
              <h3 className="text-sm font-medium text-[hsla(201,29%,15%,1)] lg:text-base">
                By teams
              </h3>
            </li>
            <li>
              <Link to="/">Al-Qadsiah</Link>
            </li>
            <li>
              <Link to="/">Al-Qadsiah</Link>
            </li>
            <li>
              <Link to="/">Al-Qadsiah</Link>
            </li>
            <li>
              <Link to="/">Al-Qadsiah</Link>
            </li>
          </menu>
          <menu className="flex flex-col gap-2 text-sm text-[hsla(206,20%,34%,1)] lg:gap-4 lg:text-base">
            <li>
              <h3 className="text-sm font-medium text-[hsla(201,29%,15%,1)] lg:text-base">
                Competition
              </h3>
            </li>
            <li>
              <Link to="/">FDL leagues</Link>
            </li>
            <li>
              <Link to="/">The King cup</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Cookies policy</Link>
            </li>
            <li>
              <Link to="/">Cookies settings</Link>
            </li>
          </menu>
        </nav>
        <div className="flex flex-row items-center gap-14 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:mx-auto">
          <p className="hidden flex-row items-center gap-[17px] text-xs font-semibold text-[hsla(151,100%,18%,1)] sm:flex">
            <span className="flex flex-col">
              <span>Proudly</span>
              <span>Supported</span>
              <span>by</span>
            </span>
            <img
              src="/images/fdl.png"
              alt="First Division League"
              className="inline-block"
            />
          </p>
          <p className="flex flex-row items-center gap-1">
            We accept
            <img src="/icons/master-card.svg" />
            <img src="/icons/visa.svg" />
            <img src="/icons/master-card.svg" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
