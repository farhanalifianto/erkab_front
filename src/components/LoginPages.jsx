import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
const LoginPages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);
  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-96 rounded-lg bg-white">
        <h1 className="text-2xl font-bold text-center mt-4">Sign In</h1>
        <form onSubmit={Auth}>
          {isError && (
            <div className="w-full flex items-center justify-center">
              <p className="text-red-500 justify-center items-center">
                {message}
              </p>
            </div>
          )}
          <div className="mt-4 px-6 ">
            <div className="grid">
              <label className="font-bold">Email</label>
              <input
                className="border-2 rounded-md mt-1 p-1"
                placeholder="email@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="font-bold">Password</label>
              <input
                className="border-2 rounded-md mt-1 p-1"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="submit"
              className="bg-black text-white px-8 mx-6 py-2 rounded-md w-full mb-4 "
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPages;
