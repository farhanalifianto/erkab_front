import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const FormEditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
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
          <h2 className="text-lg">Edit Product</h2>
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
                  placeholder="email@example.com"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-black text-white px-8 mx-6 py-2 rounded-md w-full mb-4 "
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;
