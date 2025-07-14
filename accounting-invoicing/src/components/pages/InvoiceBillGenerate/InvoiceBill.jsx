import React from "react";
import { FiEdit } from "react-icons/fi";

function InvoiceBill() {
  return (
    <>
      <div className="relative w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Invoice: Lezeco-00335
          </h1>
        </div>

        {/* Invoice Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <p className="text-xs text-gray-500 mb-1">INVOICE NO</p>
            <p className="font-medium">#VL25000355</p>

            <p className="text-xs text-gray-500 mt-4 mb-1">PAYMENT STATUS</p>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
              Paid
            </span>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">DATE</p>
            <p className="font-medium">23 Nov, 2021 02:36PM</p>

            <p className="text-xs text-gray-500 mt-4 mb-1">TOTAL AMOUNT</p>
            <p className="font-medium">$755.96</p>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">ADDRESS</p>
            <p className="font-medium">California, United States</p>
            <p className="font-medium">Zip-code: 90201</p>

            <p className="mt-3 text-xs text-gray-500 mb-1">CONTACT</p>
            <p className="text-sm text-gray-700">
              Email:{" "}
              <a
                href="mailto:Invoika@themesbrand.com"
                className="text-blue-500"
              >
                Invoika@themesbrand.com
              </a>
            </p>
            <p className="text-sm text-gray-700">
              Website:{" "}
              <a
                href="https://www.themesbrand.com"
                className="text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                www.themesbrand.com
              </a>
            </p>
            <p className="text-sm text-gray-700">Contact No: +(01) 234 6789</p>
          </div>
        </div>

        {/* Billing and Shipping Info */}
        <div className="grid grid-cols-1 py-8 md:grid-cols-3 gap-6 text-gray-700 text-sm">
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">
              Billing Address
            </p>
            <p className="font-medium">David Nichols</p>
            <p>305 S San Gabriel Blvd</p>
            <p>Phone: +(123) 456-7890</p>
            <p className="text-gray-500">Tax: 12-3456789</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">
              Shipping Address
            </p>
            <p className="font-medium">David Nichols</p>
            <p>305 S San Gabriel Blvd</p>
            <p>Phone: +(123) 456-7890</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">
              Total Amount
            </p>
            <p className="text-2xl font-bold text-gray-800">$755.96</p>
            <span className="mt-2 inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
              Due Date: 23 Dec, 2022
            </span>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200">
            <FiEdit className="text-base" />
            Edit Invoice
          </button>
        </div>
      </div>
    </>
  );
}

export default InvoiceBill;
