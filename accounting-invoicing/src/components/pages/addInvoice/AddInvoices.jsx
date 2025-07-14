import React from "react";
import InvoiceBilling from "./InvoiceBilling";
import InvoiceBillingShipping from "./InvoiceBillingShipping";
import InvoiceProductTable from "./InvoiceProductTable";

function AddInvoices() {
  return (
    <>
      <InvoiceBilling />
      <InvoiceBillingShipping />
      <InvoiceProductTable />
    </>
  );
}

export default AddInvoices;
