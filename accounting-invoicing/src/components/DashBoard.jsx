import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import Invoices from "./pages/Invoices";
import DashboardHomeCards from "./DashboardHomeCards";
import AddInvoices from "./pages/addInvoice/AddInvoices";
import InvoiceDetails from "./pages/InvoiceBillGenerate/InvoiceDetails";
import InvoiceUserDetails from "../components/pages/InvoiceBillGenerate/InvoiceUserDetails";
import PaymentSummary from "./pages/PaymentSummary";
import SaleReports from "./pages/SaleReports";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import CompanyDetails from "./pages/CompanyDetails";
import ChangePassword from "./pages/ChangePassword";

function DashBoard() {
  const [showComponent, setShowComponent] = useState("");
  const componentMap = {
    Invoices: <Invoices setShowComponent={setShowComponent} />,
    Home: <DashboardHome />,
    AddInvoices: <AddInvoices />,
    InvoiceUserDetails: <InvoiceUserDetails />,
    PaymentSummary: <PaymentSummary />,
    SaleReports: <SaleReports />,
    AddProduct: <AddProduct />,
    ProductList: <ProductList />,
    CompanyDetails: <CompanyDetails />,
    ChangePassword: <ChangePassword />,
  };

  return (
    <>
      <div className="flex  w-[100%]">
        <div className="">
          <Sidebar setShowComponent={setShowComponent} />
        </div>
        <div className="w-[85%]">
          {componentMap[showComponent] || componentMap["Home"]}
        </div>
      </div>
    </>
  );
}

export default DashBoard;
