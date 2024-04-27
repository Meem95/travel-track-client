import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-full bg-yellow-50 mx-auto font-poppins ">
        <Navbar></Navbar>
      
      </div>
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <div className="max-w-full bg-yellow-50 mx-auto font-poppins">
      <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Root;
