import { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Product Submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-xl space-y-6 mt-10"
    >
      <h2 className="text-2xl font-bold text-indigo-700">Add New Product</h2>

      {[
        { label: "Product Name", name: "name", type: "text" },
        { label: "Product Brand", name: "brand", type: "text" },
        { label: "Product Price", name: "price", type: "number" },
        { label: "Product Image", name: "image", type: "file" },
        { label: "Product Category", name: "category", type: "text" },
        { label: "Product Description", name: "description", type: "text" },
        { label: "Product Quantity", name: "quantity", type: "number" },
      ].map(({ label, name, type }) => (
        <div key={name} className="flex flex-col">
          <label htmlFor={name} className="mb-1 font-semibold text-gray-700">
            {label}
          </label>
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={`Enter ${label}`}
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 hover:shadow-md"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md"
      >
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;
