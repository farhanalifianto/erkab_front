import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/authSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const logoutx = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <nav className="fixed w-full bg-gray-800 ">
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
            <button onClick={logoutx} className="text-white">
              logout
            </button>
            <h1 className="text-white rounded-2xl border p-2">{user?.name}</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
