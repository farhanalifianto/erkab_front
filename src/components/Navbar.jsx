import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink
              to="/dashboard"
              className="text-white text-lg font-semibold"
            >
              Brand
            </NavLink>
          </div>
          <div className="flex space-x-6">
            <NavLink
              to="/login"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
