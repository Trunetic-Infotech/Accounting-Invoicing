import React, { useState } from "react";
import InvoiceBill from "./InvoiceBill";
import ProductTable from "./ProductTable";
import { X } from "lucide-react";

function InvoiceDetails({ onClose }) {
  return (
    <>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 z-50 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <X size={22} />
        </button>
      </div>
      <InvoiceBill />
      <ProductTable />
    </>
  );
}

export default InvoiceDetails;
