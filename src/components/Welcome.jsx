import React from "react";
import { useSelector } from "react-redux";
const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="text-4xl">Dashboard</h1>
      <h2 className="text-2xl mt-2">
        Welcome Back <a className="font-bold capitalize">{user?.name}</a>
      </h2>
    </div>
  );
};

export default Welcome;
