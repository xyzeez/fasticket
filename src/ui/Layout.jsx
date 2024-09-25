import { Outlet } from "react-router-dom";

// UIs
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="font-gilroy mx-auto grid w-full max-w-screen-xl grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
