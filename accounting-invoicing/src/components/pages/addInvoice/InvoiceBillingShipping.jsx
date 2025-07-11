import React from "react";

function InvoiceBillingShipping() {
  return (
    <>
      <div className="px-6 bg-gray-50 min-h-auto w-full">
        <div className="w-full pt-6 bg-gray-50">
          <div className="w-full bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Billing Address */}
            <div className="space-y-4 w-full">
              <h2 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
                Billing Address
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <textarea
                rows="3"
                placeholder="Address"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
              <input
                type="tel"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                placeholder="Tax Number"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Shipping Address */}
            <div className="space-y-4 w-full">
              <h2 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
                Shipping Address
              </h2>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <textarea
                rows="3"
                placeholder="Address"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
              <input
                type="tel"
                placeholder="(123) 456-7890"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                placeholder="Tax Number"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceBillingShipping;
