import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function DashboardHomeCharts() {
  const data = [
    { name: "Jan", income: 10000 },
    { name: "Feb", income: 30000 },
    { name: "Mar", income: 5000 },
    { name: "Apr", income: 3000 },
    { name: "May", income: 100000 },
    { name: "Jun", income: 50000 },
  ];

  const COLORS = [
    "url(#barGradient)",
    "#22c55e",
    "#facc15",
    "#f97316",
    "#ec4899",
    "#0ea5e9",
  ];

  const pieColors = [
    "#6366f1",
    "#10b981",
    "#fbbf24",
    "#f97316",
    "#ec4899",
    "#3b82f6",
  ];

  return (
    <div className="flex justify-between flex-wrap gap-6 px-6 py-6 bg-gradient-to-br from-[#f9fafb] to-[#eef2ff]">
      {/* Bar Chart */}
      <div className="w-full md:w-[48%] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          📊 Payment Activity
        </h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.7} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#4b5563", fontWeight: 500 }}
              />
              <Legend />
              <Bar
                dataKey="income"
                fill="url(#barGradient)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full md:w-[48%] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          🧁 Structure
        </h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="income"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={45}
                label
                isAnimationActive
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardHomeCharts;
