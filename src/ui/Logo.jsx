import { Link } from "react-router-dom";

const Logo = ({ relativeClasses }) => {
  return (
    <div
      className={`${relativeClasses} flex w-fit flex-row items-center gap-9`}
    >
      <Link to="home">
        <img
          src="/logo.svg"
          alt="Fasticket"
          className="h-full max-h-6 w-full max-w-[100px]"
        />
      </Link>
      <p className="hidden text-sm/[14px] font-medium lg:block">
        Ticket your event
      </p>
    </div>
  );
};

export default Logo;
