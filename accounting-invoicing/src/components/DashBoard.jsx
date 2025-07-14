import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import Invoices from "./pages/Invoices";
import Clients from "./pages/Clients";
import Payments from "./pages/Payments";
import Expenses from "./pages/Expenses";

function DashBoard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showComponent, setShowComponent] = useState("");
  const componentMap = {
    Invoices: <Invoices />,
    Home: <DashboardHome />,
    Clients: <Clients />,
    Payments:<Payments/>, 
    Expenses:<Expenses/>,
    
  };

  return (
    <>
     <>
  {/* Hamburger toggle on mobile */}
  <button
    className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded shadow"
    onClick={() => setShowSidebar((prev) => !prev)}
  >
    ☰
  </button>

  {/* Backdrop for mobile */}
  {showSidebar && (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
      onClick={() => setShowSidebar(false)}
    ></div>
  )}

  <div className="flex w-full">
    {/* Sidebar */}
    <Sidebar
      setShowComponent={setShowComponent}
      showSidebar={showSidebar}
      setShowSidebar={setShowSidebar}
    />

    {/* Main Content */}
    <div className="flex-1 p-4 overflow-auto">
      {componentMap[showComponent] || componentMap["Home"]}
    </div>
  </div>
</>

    </>
  );
}

export default DashBoard;
