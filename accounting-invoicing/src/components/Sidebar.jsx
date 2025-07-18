import React, { useState } from "react";
import {
  MdDashboard,
  MdPayment,
  MdProductionQuantityLimits,
  MdOutlineSettings,
} from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaFileInvoiceDollar, FaUser } from "react-icons/fa";
import { SiExpensify } from "react-icons/si";
import { BiSolidReport } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = ({ setShowComponent, showSidebar, setShowSidebar }) => {
  const [invoiceDropdownOpen, setInvoiceDropdownOpen] = useState(false);
  const [reportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [expenseDropdownOpen, setExpenseDropdownOpen] = useState(false);
  const [settingDropdownOpen, setSettingDropdownOpen] = useState(false);

  const toggleInvoiceDropdown = () => {
    setInvoiceDropdownOpen(!invoiceDropdownOpen);
  };

  const toggleReportsDropdown = () => {
    setReportsDropdownOpen(!reportsDropdownOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  const toggleExpenseDropdown = () => {
    setExpenseDropdownOpen(!expenseDropdownOpen);
  };

  const toggleSettingDropdown = () => {
    setSettingDropdownOpen(!settingDropdownOpen);
  };

  return (
    <div className={`fixed md:static top-0 left-0 z-50 w-72 min-h-screen p-6 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500 text-white shadow-2xl transition-transform duration-300 ease-in-out ${showSidebar ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}>
      {/* Logo/Header */}
      <div className="flex items-center gap-3 mb-10 animate-fade-in">
        <MdDashboard className="text-4xl text-white drop-shadow-lg" />
        <h1 className="text-2xl font-extrabold uppercase tracking-wider drop-shadow-sm">
          Dashboard
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        {/* Home */}
        <SidebarItem
          onClick={() => {
            setShowComponent("Home");
          }}
          icon={<IoHomeOutline />}
          label="Home"
        />

        {/* Invoices Dropdown */}
        <div>
          <div
            onClick={toggleInvoiceDropdown}
            className="flex items-center justify-between px-5 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl">
                <FaFileInvoiceDollar />
              </span>
              <span className="text-base font-medium tracking-wide">
                Invoices
              </span>
            </div>
            {invoiceDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {invoiceDropdownOpen && (
            <div className="ml-10 mt-2 flex flex-col gap-2 text-sm text-white">
              <div
                onClick={() => {
                  setShowComponent("Invoices");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Invoice
              </div>
              <div
                onClick={() => {
                  setShowComponent("AddInvoices");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Add New Invoice
              </div>
              <div
                onClick={() => {
                  setShowComponent("InvoiceUserDetails");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Invoice User Details
              </div>
            </div>
          )}
        </div>

        <SidebarItem
          onClick={() => {
            setShowComponent("Clients");
          }}
          icon={<FaUser />}
          label="Clients"
        />

        {/* Expense Dropdown */}

        <SidebarItem
          onClick={() => {
            setShowComponent("Expenses");
          }}
          icon={<SiExpensify />}
          label="Expenses"
        />
        <SidebarItem
          onClick={() => {
            setShowComponent("Payments");
          }}
          icon={<MdPayment />}
          label="Payments"
        />

        {/* Reports Dropdown */}
        <div>
          <div
            onClick={toggleReportsDropdown}
            className="flex items-center justify-between px-5 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl">
                <BiSolidReport />
              </span>
              <span className="text-base font-medium tracking-wide">
                Reports
              </span>
            </div>
            {reportsDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {reportsDropdownOpen && (
            <div className="ml-10 mt-2 flex flex-col gap-2 text-sm text-white">
              <div
                onClick={() => {
                  setShowComponent("PaymentSummary");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Payment Summary
              </div>
              <div
                onClick={() => {
                  setShowComponent("SaleReports");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Sales Reports
              </div>
            </div>
          )}
        </div>

        {/* Products Dropdown */}
        <div>
          <div
            onClick={toggleProductDropdown}
            className="flex items-center justify-between px-5 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl">
                <MdProductionQuantityLimits />
              </span>
              <span className="text-base font-medium tracking-wide">
                Product
              </span>
            </div>
            {productDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {productDropdownOpen && (
            <div className="ml-10 mt-2 flex flex-col gap-2 text-sm text-white">
              <div
                onClick={() => {
                  setShowComponent("AddProduct");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Add Products
              </div>
              <div
                onClick={() => {
                  setShowComponent("ProductList");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Product List
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            onClick={toggleSettingDropdown}
            className="flex items-center justify-between px-5 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl">
                <MdOutlineSettings />
              </span>
              <span className="text-base font-medium tracking-wide">
                Setting
              </span>
            </div>
            {settingDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {settingDropdownOpen && (
            <div className="ml-10 mt-2 flex flex-col gap-2 text-sm text-white">
              <div
                onClick={() => {
                  setShowComponent("CompanyDetails");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Company Details
              </div>
              <div
                onClick={() => {
                  setShowComponent("ChangePassword");
                }}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow"
              >
                Change Password
              </div>
              <div className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow">
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

// Reusable Sidebar Item
const SidebarItem = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-4 px-5 py-3 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow hover:shadow-lg"
  >
    <span className="text-xl">{icon}</span>
    <span className="text-base font-medium tracking-wide">{label}</span>
  </div>
);

export default Sidebar;
