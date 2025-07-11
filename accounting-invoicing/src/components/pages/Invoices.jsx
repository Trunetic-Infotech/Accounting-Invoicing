import React, { useState } from "react";
import { RxBorderDotted } from "react-icons/rx";

function Invoices({ setShowComponent }) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const stats = [
    {
      title: "Invoices Sent",
      amount: "$500k",
      gradient: "from-blue-100 to-blue-300",
      text: "text-blue-800",
    },
    {
      title: "Paid Invoices",
      amount: "$200k",
      gradient: "from-green-100 to-green-300",
      text: "text-green-800",
    },
    {
      title: "Unpaid Invoices",
      amount: "$600k",
      gradient: "from-yellow-100 to-yellow-300",
      text: "text-yellow-800",
    },
    {
      title: "Cancel Invoices",
      amount: "$70k",
      gradient: "from-red-100 to-red-300",
      text: "text-red-800",
    },
  ];

  const invoiceData = [
    {
      id: "INV-0001",
      client: "Donald Risher",
      amount: "$1,200",
      date: "20 Sep, 2022",
      status: "Paid",
    },
    {
      id: "INV-0002",
      client: "Brody Holman",
      amount: "$500",
      date: "28 Sep, 2022",
      status: "Unpaid",
    },
    {
      id: "INV-0003",
      client: "Jolie Hood",
      amount: "$2,000",
      date: "20 Nov, 2022",
      status: "Paid",
    },
    {
      id: "INV-0004",
      client: "Howard Lyons",
      amount: "$2,200",
      date: "20 Aug, 2022",
      status: "Unpaid",
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-[#f9f9fb] min-h-auto">
      {/* Header + Search */}
      <div className="mb-6 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <h1 className="text-2xl font-bold text-gray-800">📊 Invoices</h1>
        <input
          type="text"
          placeholder="Search invoices..."
          className="w-full md:w-auto max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300`}
          >
            <h2 className={`text-3xl font-bold mb-2 ${item.text}`}>
              {item.amount}
            </h2>
            <p className={`text-base font-medium tracking-wide ${item.text}`}>
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📄 Invoice List</h1>
      </div>

      <div className="hidden md:grid grid-cols-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg px-6 py-3 shadow-md">
        <span>Invoice ID</span>
        <span>Client</span>
        <span>Amount</span>
        <span>Date</span>
        <span>Status</span>
        <span>Action</span>
      </div>

      {/* Invoice Rows */}
      <div className="mt-4 flex flex-col gap-4">
        {invoiceData.map((invoice, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl p-4 md:px-6 md:py-4 shadow hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:hidden gap-1 text-sm text-gray-700">
              <div>
                <strong>Invoice ID:</strong> {invoice.id}
              </div>
              <div>
                <strong>Client:</strong> {invoice.client}
              </div>
              <div>
                <strong>Amount:</strong>
                <span className="text-green-600 font-semibold">
                  {invoice.amount}
                </span>
              </div>
              <div>
                <strong>Date:</strong> {invoice.date}
              </div>
              <div>
                <strong>Status:</strong>
                <span
                  className={`${
                    invoice.status === "Paid"
                      ? "text-green-600"
                      : "text-red-500"
                  } font-bold`}
                >
                  {invoice.status}
                </span>
              </div>
              <div className="flex justify-end mt-2">
                <RxBorderDotted
                  className="text-xl text-gray-500 hover:text-indigo-600 cursor-pointer transition"
                  onClick={() => toggleDropdown(index)}
                />
                {openDropdownIndex === index && (
                  <div className="absolute top-full mt-2 right-4 flex flex-col bg-white border rounded-md shadow-md z-50 text-sm w-32">
                    <span className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      View
                    </span>
                    <span className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Edit
                    </span>
                    <span className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Download
                    </span>
                    <span className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
                      Delete
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-6 items-center text-sm text-gray-700">
              <span className="font-medium">{invoice.id}</span>
              <span>{invoice.client}</span>
              <span className="text-green-600 font-semibold">
                {invoice.amount}
              </span>
              <span>{invoice.date}</span>
              <span
                className={`${
                  invoice.status === "Paid" ? "text-green-600" : "text-red-500"
                } font-bold`}
              >
                {invoice.status}
              </span>
              <div className="flex justify-center relative">
                <RxBorderDotted
                  className="text-xl text-gray-500 hover:text-indigo-600 cursor-pointer transition"
                  onClick={() => toggleDropdown(index)}
                />
                {openDropdownIndex === index && (
                  <div className="absolute top-7 right-0 flex flex-col bg-white border rounded-md shadow-md z-50 text-sm w-32">
                    <span className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      View
                    </span>
                    <span className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Edit
                    </span>
                    <span className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Download
                    </span>
                    <span className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
                      Delete
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invoices;
