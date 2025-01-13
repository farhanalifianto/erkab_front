import React from "react";

const FormEditProduct = () => {
  return (
    <div className="flex justify-center mt-6 ">
      <div className=" w-[912px]   p-6 rounded-md">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
          <h2 className="text-lg">Edit Product</h2>
        </div>
        <div className="">
          <form>
            <div className="mt-4 px-6 ">
              <div className="grid">
                <label className="font-bold">Product Name</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  placeholder="John Doe"
                  type="text"
                  name="name"
                />
                <label className="font-bold">Price</label>
                <input
                  className="border-2 rounded-md mt-1 p-1"
                  placeholder="email@example.com"
                  type="number"
                  name="price"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              <button className="bg-black text-white px-8 mx-6 py-2 rounded-md w-full mb-4 ">
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
