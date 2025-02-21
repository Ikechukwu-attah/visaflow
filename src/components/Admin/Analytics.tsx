import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const Analytics: React.FC = () => {
  // Dummy Data
  const userMetrics = {
    totalUsers: 250,
    totalApplications: 120,
    pendingApplications: 30,
    approvedApplications: 70,
    rejectedApplications: 20,
  };

  // Pie Chart Data (Application Status)
  const applicationStatusData = [
    {
      name: "Pending",
      value: userMetrics.pendingApplications,
      color: "#FACC15",
    },
    {
      name: "Approved",
      value: userMetrics.approvedApplications,
      color: "#22C55E",
    },
    {
      name: "Rejected",
      value: userMetrics.rejectedApplications,
      color: "#EF4444",
    },
  ];

  // Bar Chart Data (Visa Applications)
  const visaTypeData = [
    { name: "Work Visa", applications: 50 },
    { name: "Student Visa", applications: 40 },
    { name: "Tourist Visa", applications: 30 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">System Analytics</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(userMetrics).map(([key, value]) => (
          <div
            key={key}
            className="p-4 bg-white shadow-md rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </h3>
            <p className="text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Application Status Pie Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Application Status Breakdown
          </h3>
          <div className="flex justify-center">
            <PieChart width={350} height={350}>
              <Pie
                data={applicationStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {applicationStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Visa Applications Bar Chart */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Visa Applications Overview
          </h3>
          <BarChart width={350} height={350} data={visaTypeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="applications" fill="#3B82F6" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
