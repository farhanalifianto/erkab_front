import React from "react";

const ProductList = () => {
  return (
    <div className="flex justify-center mt-6">
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
          <tr>
            <td class="border px-4 py-2">Intro to CSS</td>
            <td class="border px-4 py-2">Adam</td>
            <td class="border px-4 py-2">858</td>
            <td class="border px-4 py-2">858</td>
            <td class="border px-4 py-2">858</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">Intro to CSS</td>
            <td class="border px-4 py-2">Adam</td>
            <td class="border px-4 py-2">858</td>
            <td class="border px-4 py-2">858</td>
            <td class="border px-4 py-2">858</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
