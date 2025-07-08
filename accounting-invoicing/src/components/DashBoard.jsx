import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import Invoices from "./pages/Invoices";

function DashBoard() {
  const [showComponent, setShowComponent] = useState("");
  const componentMap = {
    Invoices: <Invoices />,
    Home: <DashboardHome />,
  };

  return (
    <>
      <div className="flex  gap-[20px] w-[100%]">
        <div className="w-[15%]">
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
