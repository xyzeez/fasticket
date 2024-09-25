import { Outlet } from "react-router-dom";

// UIs
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
