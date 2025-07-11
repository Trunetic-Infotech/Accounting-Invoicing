import React from "react";

function DashboardHomeCards() {
  const stats = [
    {
      title: "Total Invoices",
      amount: "$7,000",
      gradient: "from-[#667eea] to-[#764ba2]",
    },
    {
      title: "Paid Invoices",
      amount: "$4,000",
      gradient: "from-[#43cea2] to-[#185a9d]",
    },
    {
      title: "Unpaid Invoices",
      amount: "$3,000",
      gradient: "from-[#f7971e] to-[#ffd200]",
    },
    {
      title: "Invoices Sent",
      amount: "$5,000",
      gradient: "from-[#f953c6] to-[#b91d73]",
    },
    {
      title: "Total Income",
      amount: "$13,000",
      gradient: "from-[#36d1dc] to-[#5b86e5]",
    },
    {
      title: "Total Expenses",
      amount: "$3,000",
      gradient: "from-[#ff6a00] to-[#ee0979]",
    },
    {
      title: "Added Clients",
      amount: "200",
      gradient: "from-[#11998e] to-[#38ef7d]",
    },
    {
      title: "Contract Signed",
      amount: "1000",
      gradient: "from-[#fc6076] to-[#ff9a44]",
    },
  ];

  return (
    <div className="p-6">
      {/* Search bar */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          📊 Accounting And Invoicing
        </h1>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br ${item.gradient} text-white rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]`}
          >
            {/* Dropdown */}
            <div className="absolute top-4 right-4">
              <select className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1.5 rounded-md shadow-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all duration-300">
                <option className="text-black">Today</option>
                <option className="text-black">Last Week</option>
                <option className="text-black">Last Month</option>
                <option className="text-black">Last Year</option>
              </select>
            </div>

            <h2 className="text-xl font-semibold mb-2 tracking-wide mt-6 drop-shadow-sm">
              {item.title}
            </h2>
            <p className="text-3xl font-extrabold drop-shadow-lg">
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHomeCards;
