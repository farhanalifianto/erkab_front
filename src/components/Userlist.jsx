import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Userlist = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getUsers();
  };
  console.log(users);
  return (
    <div className="justify-center mt-6">
      <div>
        <h1 className="text-4xl font-bold">List of User</h1>
      </div>
      <div className="flex items-center justify-end w-[68%] ">
        <button
          onClick={() => navigate("/users/add")}
          className="bg-black text-white px-8 mx-6 py-2 rounded-md"
        >
          Add
        </button>
      </div>
      <table class="table-fixed w-[70%]">
        <thead>
          <tr>
            <th class="px-4 py-2">No</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Role</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td class="border px-4 py-2">{index + 1}</td>
              <td class="border px-4 py-2">{user.name}</td>
              <td class="border px-4 py-2">{user.email}</td>
              <td class="border px-4 py-2">{user.role}</td>
              <td class="border px-4 py-2">
                <div className="flex items-center justify-center w-full">
                  {" "}
                  <Link
                    to={`/users/edit/${user.uuid}`}
                    className="bg-black text-white mr-3 "
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.uuid)}
                    className="bg-red-700 text-white "
                  >
                    delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
