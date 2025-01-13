import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="mt-6 px-6 ml-[10%] ">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
