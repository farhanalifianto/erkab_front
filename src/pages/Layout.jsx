import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="mt-24 ml-14 px-6 pl-[10%] w-[90%]">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
