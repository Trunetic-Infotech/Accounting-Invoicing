import React, { useState } from "react";
import { RxBorderDotted } from "react-icons/rx";

function PaymentSummary() {
  const payments = [
    {
      date: "20 Sep, 2022",
      invoiceId: "Lec-2152",
      client: "Donald Risher",
      billed: "$240.00",
      type: "Google Pay",
    },
    {
      date: "12 Apr, 2022",
      invoiceId: "Lec-2153",
      client: "Brody Holman",
      billed: "$390.00",
      type: "Cash",
    },
    {
      date: "28 Mar, 2022",
      invoiceId: "Lec-2154",
      client: "Jolie Hood",
      billed: "$440.00",
      type: "Google Pay",
    },
    {
      date: "23 Aug, 2022",
      invoiceId: "Lec-2155",
      client: "Buckminster Wong",
      billed: "	$520.00",
      type: "Google Pay",
    },
    {
      date: "18 Sep, 2022",
      invoiceId: "Lec-2156",
      client: "Howard Lyons",
      billed: "$480.00",
      type: "Cash",
    },
    {
      date: "12 Feb, 2022",
      invoiceId: "Lec-2157",
      client: "Howard Oneal",
      billed: "$550.00",
      type: "Google Pay",
    },
    {
      date: "30 Nov, 2022",
      invoiceId: "Lec-2158",
      client: "Jena Hall",
      billed: "	$170.00",
      type: "Credit Card",
    },
    {
      date: "23 Sep, 2022",
      invoiceId: "Lec-2159",
      client: "Paki Edwards",
      billed: "$720.00",
      type: "Credit Card",
    },
    {
      date: "16 Aug, 2022",
      invoiceId: "Lec-2160",
      client: "James Diaz",
      billed: "$820.00",
      type: "Google Pay",
    },
  ];

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow-xl rounded-xl p-6">
        {/* Top Section: Title + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
          <h2 className="text-xl font-bold text-gray-800">Payment Summary</h2>
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-6 text-sm font-semibold text-gray-600 border-b pb-3">
          <p>Date</p>
          <p>Invoice ID</p>
          <p>Client</p>
          <p>Billed</p>
          <p>Payment Type</p>
          <p>Action</p>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100 mt-2">
          {payments.map((payment, index) => (
            <div
              key={index}
              className="grid grid-cols-6 py-3 items-center text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition rounded-md px-2"
            >
              <p>{payment.date}</p>
              <p>{payment.invoiceId}</p>
              <p>{payment.client}</p>
              <p className="font-medium">{payment.billed}</p>
              <p className="text-indigo-600 font-medium">{payment.type}</p>
              <div className="flex justify-center relative">
                <RxBorderDotted
                  onClick={() => toggleDropdown(index)}
                  className="text-xl text-gray-500 hover:text-indigo-600 cursor-pointer"
                />
                {openDropdownIndex === index && (
                  <div className="absolute top-7 right-0 flex flex-col bg-white border rounded-md shadow-md z-50 text-sm w-32 ">
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentSummary;
