import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        price: price,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="flex justify-center mt-6 ">
      <div className=" w-[912px]   p-6 rounded-md">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
          <h2 className="text-lg">Add new Product</h2>
          {msg && <p className="text-red-500">{msg}</p>}
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="mt-4 px-6 ">
              <div className="grid">
                <label className="font-bold">Product Name</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  placeholder="John Doe"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="font-bold">Price</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  placeholder="000000000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                type="submit"
                className="bg-black text-white px-8 mx-6 py-2 rounded-md w-full mb-4 "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
