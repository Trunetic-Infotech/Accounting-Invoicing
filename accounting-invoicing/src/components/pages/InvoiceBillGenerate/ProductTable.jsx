import React from "react";

function ProductTable() {
  const products = [
    {
      id: "01",
      name: "Sweatshirt for Men (Pink)",
      description: "Graphic Print Men & Women Sweatshirt",
      rate: "$119.99",
      quantity: "02",
      amount: "$239.98",
    },
    {
      id: "02",
      name: "Noise NoiseFit Endure Smart Watch",
      description: "32.5mm (1.28 Inch) TFT Color Touch Display",
      rate: "$94.99",
      quantity: "01",
      amount: "$94.99",
    },
    {
      id: "03",
      name: "350 ml Glass Grocery Container",
      description: "Glass Grocery Container (Pack of 3, White)",
      rate: "$24.99",
      quantity: "01",
      amount: "$24.99",
    },
    {
      id: "04",
      name: "Fabric Dual Tone Living Room Chair",
      description: "Chair (White)",
      rate: "$340.00",
      quantity: "01",
      amount: "$340.00",
    },
  ];

  return (
    <div className="w-full px-6 bg-white  shadow-md">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700 border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-gray-100 text-xs text-gray-600 uppercase">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Product Details</th>
              <th className="px-4 py-2">Rate</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                className="bg-white hover:shadow-md transition duration-200 rounded-xl"
              >
                <td className="px-4 py-3 font-semibold">{item.id}</td>
                <td className="px-4 py-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </td>
                <td className="px-4 py-3">{item.rate}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3 font-semibold">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
              Discount
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
  );
}

export default ProductTable;
