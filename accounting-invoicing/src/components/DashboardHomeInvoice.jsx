import React, { useState } from "react";
import { RxBorderDotted } from "react-icons/rx";

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

function DashboardHomeInvoice() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📄 Invoice List</h1>
      </div>

      <div className="overflow-x-auto">
        {/* Table Header for Desktop */}
        <div className="hidden md:grid grid-cols-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg px-6 py-3 shadow-md">
          <span>Invoice ID</span>
          <span>Client</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* Table Rows */}
        <div className="mt-4 flex flex-col gap-4">
          {invoiceData.map((invoice, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-4 md:px-6 md:py-4 shadow hover:shadow-xl transition-all duration-300"
            >
              {/* Mobile Layout */}
              <div className="flex flex-col md:hidden gap-2 text-sm text-gray-700">
                <div>
                  <strong>Invoice ID:</strong> {invoice.id}
                </div>
                <div>
                  <strong>Client:</strong> {invoice.client}
                </div>
                <div>
                  <strong>Amount:</strong>{" "}
                  <span className="text-green-600 font-semibold">
                    {invoice.amount}
                  </span>
                </div>
                <div>
                  <strong>Date:</strong> {invoice.date}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`font-bold ${
                      invoice.status === "Paid"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-6 items-center text-sm text-gray-700">
                <span className="font-medium">{invoice.id}</span>
                <span>{invoice.client}</span>
                <span className="text-green-600 font-semibold">
                  {invoice.amount}
                </span>
                <span>{invoice.date}</span>
                <span
                  className={`font-bold ${
                    invoice.status === "Paid"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {invoice.status}
                </span>

                {/* Action Dropdown */}
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
    </div>
  );
}

export default DashboardHomeInvoice;
