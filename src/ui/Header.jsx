// UIs
import UserMenu from "./UserMenu";
import MainMenu from "./MainMenu";
import Logo from "../components/Logo";
import SearchForm from "./SearchForm";
import CategoriesSlider from "./CategoriesSlider";

const Header = ({ relativeClasses }) => {
  return (
    <header
      className={`${relativeClasses} relative flex flex-col border-b border-[hsla(0,2%,34%,1)] bg-transparent lg:border-none lg:bg-white`}
    >
      <div className="inner grid max-w-[1328px] grid-cols-3 grid-rows-1 items-center gap-x-6 px-4 py-3 md:px-8 md:py-4 lg:relative lg:grid-cols-[auto_1fr_auto_auto] lg:px-8 lg:py-[14px]">
        <div
          className={`col-start-2 col-end-3 row-start-1 row-end-2 mx-auto flex w-fit flex-row items-center gap-9 lg:col-start-1 lg:col-end-2 lg:mx-0 lg:mr-auto`}
        >
          <Logo />
          <p className="hidden text-sm/[14px] font-medium lg:block">
            Ticket your event
          </p>
        </div>
        <div className="hidden w-full lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:mx-auto lg:block">
          <SearchForm />
        </div>
        <MainMenu relativeClasses="col-start-3 lg:col-start-3 lg:col-end-4 col-end-4 row-start-1 row-end-2 ml-auto" />
        <UserMenu relativeClasses="col-start-1 lg:col-start-4 lg:col-end-5 col-end-2 row-start-1 row-end-2 mr-auto lg:mr-0 lg:ml-auto" />
      </div>
      <div className="hidden items-center justify-center lg:flex lg:border-t lg:border-b-[hsla(0,0%,92%,1)] lg:px-8 lg:py-[13.5px]">
        <CategoriesSlider />
      </div>
    </header>
  );
};

export default Header;
