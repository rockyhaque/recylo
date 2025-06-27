// import { Outlet, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import TopNavbar from "../pages/Shared/TopNavbar/TopNavbar";
import BottomNavbar from "./../pages/Shared/BottomNavbar/BottomNavbar";

const Main = () => {
  return (
    <div className="relative font-poppins">
      {/* Centered fixed nav */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow">
        <div className="">
          <TopNavbar />
          <Navbar />
          <BottomNavbar />
        </div>
      </div>

      {/* Main content offset to account for fixed header */}
      <div className="pt-[250px]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};


export default Main;
