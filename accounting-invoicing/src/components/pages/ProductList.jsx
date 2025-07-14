import React, { useState } from "react";
import { RxBorderDotted } from "react-icons/rx";
import img1 from "../../assets/Casual-jeans.png";
import img2 from "../../assets/Casual-Shirts.png";
import img3 from "../../assets/Chairs.png";

function ProductList() {
  const products = [
    {
      name: "World's most expensive t shirt",
      category: "Fashion",
      stock: "65 / 125",
      price: "$742.00",
      img: img1,
    },
    {
      name: "Urban Ladder Pashe Chair",
      category: "Furniture",
      stock: "122 / 232",
      price: "$852.00",
      img: img2,
    },
    {
      name: "Fabric Dual Tone Living Room Chair",
      category: "Furniture",
      stock: "74 / 100",
      price: "$360.00",
      img: img3,
    },
    {
      name: "350 ml Glass Grocery Container",
      category: "Grocery",
      stock: "14 / 36",
      price: "$125.00",
      img: img1,
    },
    {
      name: "Crux Motorsports Helmet",
      category: "Accessories",
      stock: "32 / 90",
      price: "$230.00",
      img: img2,
    },
    {
      name: "Half Sleeve T-Shirts (Blue)",
      category: "Fashion",
      stock: "320 / 412",
      price: "$652.00",
      img: img3,
    },
  ];

  const [dropdownIndex, setDropdownIndex] = useState(null);
  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-[#f9f9fb] min-h-screen">
      <div className="bg-white rounded-xl shadow-xl p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-bold text-gray-800">📦 Product List</h2>
          <input
            type="text"
            placeholder="Search product..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        <div className="w-full overflow-x-auto">
          <div className="hidden lg:grid grid-cols-5 uppercase text-gray-500 text-sm font-semibold border-b pb-3 mb-3">
            <p>Product Name</p>
            <p>Category</p>
            <p>In Stock</p>
            <p>Price</p>
            <p>Action</p>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-4 bg-white rounded-lg px-4 py-4 shadow hover:shadow-lg transition relative"
              >
                {/* Product Name & Image */}
                <div className="flex items-center gap-3">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-10 w-10 object-cover rounded-md"
                  />
                  <p className="font-medium text-sm text-gray-800">
                    {product.name}
                  </p>
                </div>

                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-sm text-gray-600">{product.stock}</p>
                <p className="text-sm text-green-600 font-semibold">
                  {product.price}
                </p>

                {/* Action Dropdown */}
                <div className="flex justify-end lg:justify-center relative">
                  <RxBorderDotted
                    className="text-xl text-gray-500 hover:text-indigo-600 cursor-pointer transition"
                    onClick={() => toggleDropdown(index)}
                    size={18}
                  />
                  {dropdownIndex === index && (
                    <div className="absolute top-7 right-0 flex flex-col bg-white border rounded-md shadow-md z-50 text-sm w-32">
                      <span className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        View
                      </span>
                      <span className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Edit
                      </span>
                      <span className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
                        Delete
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductList;
