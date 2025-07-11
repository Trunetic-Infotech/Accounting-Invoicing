import React from "react";

function InvoiceBilling() {
  return (
    <>
      <div className="px-6 pt-6 bg-gray-50 min-h-auto w-full">
        <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Left Side */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Invoice No
              </label>
              <div className="bg-gray-100 px-4 py-2 rounded text-gray-800 font-semibold">
                #VL99196667
              </div>
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Date
              </label>
              <input
                type="datetime-local"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Select Date"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Payment Status
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none bg-white text-gray-700">
                <option value="">Select Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Refund">Refund</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Total Amount
              </label>
              <div className="bg-gray-100 px-4 py-2 rounded text-gray-800 font-semibold">
                $0.00
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Address
              </label>
              <textarea
                rows="3"
                placeholder="Company Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>

            <input
              type="text"
              placeholder="Enter Postal Code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              placeholder="Website"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Contact No"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceBilling;
