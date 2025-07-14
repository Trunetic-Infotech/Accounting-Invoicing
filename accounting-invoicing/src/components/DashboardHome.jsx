import React from "react";
import DashboardHomeCards from "./DashboardHomeCards";
import DashboardHomeCharts from "./DashboardHomeCharts";
import DashboardHomeInvoice from "./DashboardHomeInvoice";

function DashboardHome() {
  return (
    <>
      <DashboardHomeCards />
      <DashboardHomeCharts />
      <DashboardHomeInvoice />
    </>
  );
}

export default DashboardHome;
