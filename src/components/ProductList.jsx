import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };
  const deleteProduct = async (uuid) => {
    await axios.delete(`http://localhost:5000/products/${uuid}`);
    getProducts();
  };
  return (
    <div className="justify-center ">
      <div className="mt-2 mb-6">
        <h1 className="text-4xl">List of Products</h1>
      </div>
      <div className="flex items-center justify-end w-[68%] ">
        <button
          onClick={() => navigate("/product/add")}
          className="bg-black text-white px-8 mx-6 py-2 rounded-md"
        >
          Add
        </button>
      </div>
      <table class="table-fixed w-[70%]">
        <thead>
          <tr>
            <th class="px-4 py-2">No</th>
            <th class="px-4 py-2">Product Name</th>
            <th class="px-4 py-2">Price</th>
            <th class="px-4 py-2">Created By</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td class="border px-4 py-2">{index + 1}</td>
              <td class="border px-4 py-2">{product.name}</td>
              <td class="border px-4 py-2">{product.price}</td>
              <td class="border px-4 py-2">{product.user.name}</td>
              <td class="border px-4 py-2">
                <div className="flex items-center justify-center w-full">
                  {" "}
                  <Link
                    to={`/products/edit/${product.uuid}`}
                    className="bg-black text-white mr-3 "
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.uuid)}
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

export default ProductList;
