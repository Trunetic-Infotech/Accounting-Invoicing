import React, { useState } from "react";

function InvoiceProductTable() {
  const [items, setItems] = useState([
    { name: "", details: "", rate: 0, quantity: 0 },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] =
      field === "rate" || field === "quantity" ? Number(value) : value;
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { name: "", details: "", rate: 0, quantity: 0 }]);
  };

  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const increment = (index) => {
    handleChange(index, "quantity", items[index].quantity + 1);
  };

  const decrement = (index) => {
    if (items[index].quantity > 0) {
      handleChange(index, "quantity", items[index].quantity - 1);
    }
  };

  return (
    <>
      <div className="p-6 bg-white shadow-md rounded-lg w-full">
        {/* Header Row */}
        <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-md">
          <span className="col-span-1">#</span>
          <span className="col-span-4">Product Details</span>
          <span className="col-span-2">Rate ($)</span>
          <span className="col-span-2">Quantity</span>
          <span className="col-span-2">Amount</span>
          <span className="col-span-1 text-right">Action</span>
        </div>

        {/* Items */}
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 items-start px-4 py-4 border-b border-gray-200"
          >
            <span className="col-span-1 pt-2 text-gray-600">{index + 1}</span>

            {/* Product Name & Details */}
            <div className="col-span-4 space-y-2">
              <input
                type="text"
                placeholder="Product Name"
                value={item.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                rows="2"
                placeholder="Product Details"
                value={item.details}
                onChange={(e) => handleChange(index, "details", e.target.value)}
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Rate */}
            <input
              type="number"
              min="0"
              step="0.01"
              value={item.rate}
              onChange={(e) => handleChange(index, "rate", e.target.value)}
              className="col-span-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Quantity Control */}
            <div className="col-span-2 flex items-center gap-2">
              <button
                onClick={() => decrement(index)}
                className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 text-xl font-bold"
              >
                -
              </button>
              <span className="w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => increment(index)}
                className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 text-xl font-bold"
              >
                +
              </button>
            </div>

            {/* Amount */}
            <div className="col-span-2 pt-2 text-gray-700 font-semibold">
              ${(item.rate * item.quantity).toFixed(2)}
            </div>

            {/* Delete Button */}
            <div className="col-span-1 text-right">
              <button
                onClick={() => removeItem(index)}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Add Item Button */}
        <div className="mt-6">
          <button
            onClick={addItem}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium px-3 py-2 bg-indigo-50 rounded-md"
          >
            <span className="text-xl font-bold">+</span> Add Item
          </button>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md space-y-4">
            {/* Sub Total */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Sub Total</span>
              <input
                type="text"
                value="$0.00"
                readOnly
                className="text-right px-4 py-2 w-40 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            {/* Estimated Tax */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                Estimated Tax (12.5%)
              </span>
              <input
                type="text"
                value="$0.00"
                readOnly
                className="text-right px-4 py-2 w-40 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            {/* Discount */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">
                Discount{" "}
                <span className="text-sm text-gray-500">(Invoika15)</span>
              </span>
              <input
                type="text"
                value="$0.00"
                readOnly
                className="text-right px-4 py-2 w-40 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            {/* Shipping Charge */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Shipping Charge</span>
              <input
                type="text"
                value="$0.00"
                readOnly
                className="text-right px-4 py-2 w-40 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <hr className="my-2 border-t border-dashed border-gray-300" />

            {/* Total Amount */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                Total Amount
              </span>
              <input
                type="text"
                value="$0.00"
                readOnly
                className="text-right px-4 py-2 w-40 bg-gray-100 border border-gray-400 rounded-md font-bold focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceProductTable;
