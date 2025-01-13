import React from "react";

const FormAddUser = () => {
  return (
    <div className="flex justify-center mt-6 ">
      <div className=" w-[912px]   p-6 rounded-md">
        <div>
          <h1 className="text-4xl font-bold">Users</h1>
          <h2 className="text-lg">Add new user</h2>
        </div>
        <div className="">
          <form>
            <div className="mt-4 px-6 ">
              <div className="grid">
                <label className="font-bold">Name</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  placeholder="John Doe"
                  type="email"
                />
                <label className="font-bold">Email</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  placeholder="email@example.com"
                  type="email"
                />
                <label className="font-bold">Password</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  type="password"
                  placeholder="********"
                />
                <label className="font-bold">Confirm Password</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  type="password"
                  placeholder="********"
                />
                <label className="font-bold">Role</label>
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              <button className="bg-black text-white px-8 mx-6 py-2 rounded-md w-full mb-4 ">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
