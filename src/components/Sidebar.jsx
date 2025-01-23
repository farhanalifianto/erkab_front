import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/authSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const logoutx = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="fixed bg-gray-200 w-[10%] h-screen mt-16 ">
      <div className="flex p-1 w-full items-center ">
        <div className="p-4 items-center justify-start gap-4 ">
          <div className="font-bold">General</div>

          <NavLink to="/dashboard">
            <div className="pl-4 ">Dashboard</div>
          </NavLink>
          <NavLink to="/products">
            <div className="pl-4">Products</div>
          </NavLink>

          {user && user.role === "admin" && (
            <>
              {" "}
              <div className="font-bold">Admin</div>
              <NavLink to="/users">
                <div className="pl-4">Users</div>
              </NavLink>
            </>
          )}

          <div className="font-bold">Settings</div>
          <div className="pl-4">
            <button onClick={() => logoutx()}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
