import { Outlet } from "react-router-dom";

// UIs
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-[auto_1fr_auto] font-gilroy font-normal">
      <Header relativeClasses="col-start-1 col-end-2 row-start-1 row-end-2 z-10" />
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 min-h-screen lg:row-start-2">
        <Outlet />
      </div>
      <Footer relativeClasses="col-start-1 col-end-2 row-start-3 row-end-4" />
    </div>
  );
};

export default Layout;
