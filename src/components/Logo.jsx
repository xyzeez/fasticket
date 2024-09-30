import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="home" aria-label="Go to Home">
      <img
        src="/logo.svg"
        alt="Fasticket Logo"
        className="h-full max-h-6 w-full max-w-[100px]"
      />
    </Link>
  );
};

export default Logo;
