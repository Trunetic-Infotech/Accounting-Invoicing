import React, { useState } from "react";
import InvoiceDetails from "./InvoiceDetails";

function InvoiceUserDetails() {
  const [showComponent, setShowComponent] = useState("");

  const invoiceData = [
    {
      id: "INV-0001",
      client: "Donald Risher",
      email: "donaldrisher@gmail.com",
      contact: "9876543210",
    },
    {
      id: "INV-0002",
      client: "Brody Holman",
      email: "brodyholman@gmail.com",
      contact: "9876543210",
    },
    {
      id: "INV-0003",
      client: "Jolie Hood",
      email: "joliehood@gmail.com",
      contact: "9876543210",
    },
    {
      id: "INV-0004",
      client: "Howard Lyons",
      email: "howardlyons@gmail.com",
      contact: "9876543210",
    },
  ];

  return (
    <div className="relative w-full p-6 bg-[#f9f9fb] min-h-screen z-0">
      {showComponent === "InvoiceDetails" && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-6 relative">
            <InvoiceDetails onClose={() => setShowComponent("")} />
          </div>
        </div>
      )}

      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">👤 Invoice Users</h1>
        <input
          type="text"
          placeholder="Search by client or email..."
          className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="hidden lg:grid grid-cols-12 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow">
        <p className="col-span-2">Invoice ID</p>
        <p className="col-span-3">Client Name</p>
        <p className="col-span-3">Email</p>
        <p className="col-span-2">Contact</p>
        <p className="col-span-2 text-center">Action</p>
      </div>

      <div className="mt-4 space-y-4">
        {invoiceData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-y-2 lg:gap-4 bg-white rounded-xl px-6 py-4 shadow hover:shadow-lg transition-all duration-300"
          >
            <p className="text-sm font-medium text-gray-800 col-span-2">
              {item.id}
            </p>
            <p className="text-sm text-gray-800 col-span-3">{item.client}</p>
            <p className="text-sm text-gray-600 col-span-3">{item.email}</p>
            <p className="text-sm text-gray-600 col-span-2">{item.contact}</p>
            <div className="col-span-2 flex justify-start lg:justify-center">
              <button
                onClick={() => setShowComponent("InvoiceDetails")}
                className="text-sm font-medium text-indigo-600 border border-indigo-600 px-4 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvoiceUserDetails;
