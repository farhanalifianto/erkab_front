import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const FormEditUser = () => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confirmPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="flex justify-center">
      <div className=" w-[912px]   p-6 rounded-md">
        <div>
          <h1 className="text-4xl font-bold">Users</h1>
          <h2 className="text-lg">Edit User</h2>
          {msg && <p className="text-red-500">{msg}</p>}
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="mt-4 px-6 ">
              <div className="grid">
                <label className="font-bold">Name</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  placeholder="John Doe"
                  type="email"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="font-bold">Email</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  placeholder="email@example.com"
                  type="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="font-bold">Password</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  type="password"
                  placeholder="********"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="font-bold">Confirm Password</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  type="password"
                  placeholder="********"
                  defaultValue={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label className="font-bold">Role</label>
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  defaultValue={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-black text-white px-8 mx-6 py-2 rounded-md w-full mb-4 "
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditUser;
