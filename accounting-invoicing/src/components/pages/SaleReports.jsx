import React from "react";

function SaleReports() {
  const reports = [
    {
      id: "Lec-2152",
      date: "20 Sep, 2022",
      category: "Fashion",
      price: "$240.00",
      discount: "10%",
      amount: "$190.00",
    },
    {
      id: "Lec-2153",
      date: "12 Apr, 2022",
      category: "Accessories",
      price: "$390.00",
      discount: "15%",
      amount: "$280.00",
    },
    {
      id: "Lec-2154",
      date: "28 Mar, 2022",
      category: "Furniture",
      price: "$440.00",
      discount: "25%",
      amount: "$350.00",
    },
    {
      id: "Lec-2155",
      date: "23 Aug, 2022",
      category: "Accessories",
      price: "$520.00",
      discount: "20%",
      amount: "$460.00",
    },
    {
      id: "Lec-2156",
      date: "18 Sep, 2022",
      category: "Fashion",
      price: "$480.00",
      discount: "15%",
      amount: "$390.00",
    },
    {
      id: "Lec-2157",
      date: "12 Feb, 2022",
      category: "Furniture",
      price: "$550.00",
      discount: "30%",
      amount: "$360.00",
    },
    {
      id: "Lec-2158",
      date: "30 Nov, 2022",
      category: "Fashion",
      price: "$170.00",
      discount: "20%",
      amount: "$90.00",
    },
    {
      id: "Lec-2159",
      date: "23 Sep, 2022",
      category: "Accessories",
      price: "$720.00",
      discount: "10%",
      amount: "$620.00",
    },
    {
      id: "Lec-2160",
      date: "16 Aug, 2022",
      category: "Fashion",
      price: "$820.00",
      discount: "15%",
      amount: "$630.00",
    },
    {
      id: "Lec-2161",
      date: "15 Des, 2022",
      category: "Fashion",
      price: "$750.00",
      discount: "10%",
      amount: "	$690.00",
    },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-xl p-6">
        {/* Top: Title + Search Input */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-bold text-gray-800">Sales Report</h2>
          <input
            type="text"
            placeholder="Search invoice or category..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-6 uppercase text-gray-500 text-sm font-semibold border-b pb-3">
          <p>Invoice ID</p>
          <p>Date</p>
          <p>Category</p>
          <p>Price</p>
          <p>Discounts</p>
          <p>Amount</p>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100 mt-2">
          {reports.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 py-4 items-center text-gray-700 text-sm hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition rounded-md px-2"
            >
              <p>{item.id}</p>
              <p>{item.date}</p>
              <p className="font-medium">{item.category}</p>
              <p>{item.price}</p>
              <p className="text-green-600">{item.discount}</p>
              <p className="font-semibold">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SaleReports;
