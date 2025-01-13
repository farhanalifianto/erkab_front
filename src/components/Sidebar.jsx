import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed bg-gray-200 w-[10%] h-screen">
      <div className="flex p-1 w-full items-center ">
        <div className="p-4 items-center justify-start gap-4 ">
          <div className="font-bold">General</div>

          <NavLink to="/dashboard">
            <div className="pl-4 ">Dashboard</div>
          </NavLink>
          <NavLink to="/products">
            <div className="pl-4">Products</div>
          </NavLink>

          <div className="font-bold">Admin</div>
          <NavLink to="/users">
            <div className="pl-4">Users</div>
          </NavLink>

          <div className="font-bold">Settings</div>
          <div className="pl-4">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
