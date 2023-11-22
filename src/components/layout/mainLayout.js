import React from "react";
import "./layout.css";
import SideBar from "./sideBar";
import NavBar from "./navBar";

const MainLayout = ({ children }) => {
  return (
    <div className="row gx-0 vh_100">
      <div className="col-2 sideBar">
        <SideBar />
      </div>
      <div className="col-10">
        <NavBar />
        <div className=" border_radius_20 m-3 vh_85 main_conatiner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
