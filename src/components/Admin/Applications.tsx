import React, { useState } from "react";

interface Application {
  id: number;
  user: string;
  visaType: string;
  appliedDate: string;
  status: "Pending" | "Approved" | "Rejected";
  assignedExpert?: string;
}

const initialApplications: Application[] = [
  {
    id: 1,
    user: "John Doe",
    visaType: "Work Visa",
    appliedDate: "2025-02-01",
    status: "Pending",
  },
  {
    id: 2,
    user: "Sarah Smith",
    visaType: "Student Visa",
    appliedDate: "2025-02-02",
    status: "Approved",
  },
  {
    id: 3,
    user: "David Lee",
    visaType: "Tourist Visa",
    appliedDate: "2025-02-03",
    status: "Rejected",
  },
];

const Applications: React.FC = () => {
  const [applications, setApplications] =
    useState<Application[]>(initialApplications);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Pending" | "Approved" | "Rejected"
  >("All");

  // Function to change application status
  const updateStatus = (id: number, status: "Approved" | "Rejected") => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  // Function to assign an expert
  const assignExpert = (id: number, expertName: string) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, assignedExpert: expertName } : app
      )
    );
  };

  // Filter applications based on search & status
  const filteredApplications = applications.filter(
    (app) =>
      (filterStatus === "All" || app.status === filterStatus) &&
      (app.user.toLowerCase().includes(search.toLowerCase()) ||
        app.visaType.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Visa Application Management</h2>

      {/* Search & Filter Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by user or visa type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/3"
        />

        <select
          value={filterStatus}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFilterStatus(
              e.target.value as "Pending" | "Approved" | "Rejected" | "All"
            )
          }
          className="p-2 border rounded w-full sm:w-1/4"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border p-3">Application ID</th>
              <th className="border p-3">User</th>
              <th className="border p-3">Visa Type</th>
              <th className="border p-3">Applied Date</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Assigned Expert</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id} className="text-center bg-white">
                <td className="border p-3">{app.id}</td>
                <td className="border p-3">{app.user}</td>
                <td className="border p-3">{app.visaType}</td>
                <td className="border p-3">{app.appliedDate}</td>
                <td className="border p-3">
                  <span
                    className={`px-2 py-1 rounded ${
                      app.status === "Pending"
                        ? "bg-yellow-500 text-white"
                        : app.status === "Approved"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="border p-3">
                  {app.assignedExpert || (
                    <button
                      onClick={() => assignExpert(app.id, "Expert A")}
                      className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      Assign Expert
                    </button>
                  )}
                </td>
                <td className="border p-3 flex justify-center gap-2">
                  {app.status === "Pending" ? (
                    <>
                      <button
                        onClick={() => updateStatus(app.id, "Approved")}
                        className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(app.id, "Rejected")}
                        className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-lg">
                      {app.status === "Approved"
                        ? "✅ Approved"
                        : "❌ Rejected"}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Mobile View */}
      <div className="sm:hidden mt-4">
        {filteredApplications.map((app) => (
          <div
            key={app.id}
            className="bg-white p-4 shadow-md rounded mb-4 text-center border border-gray-300"
          >
            <p>
              <strong>ID:</strong> {app.id}
            </p>
            <p>
              <strong>User:</strong> {app.user}
            </p>
            <p>
              <strong>Visa Type:</strong> {app.visaType}
            </p>
            <p>
              <strong>Applied Date:</strong> {app.appliedDate}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`px-2 py-1 rounded ${
                  app.status === "Pending"
                    ? "bg-yellow-500 text-white"
                    : app.status === "Approved"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {app.status}
              </span>
            </p>
            <div className="mt-3 flex justify-center gap-2">
              {app.status === "Pending" && (
                <>
                  <button
                    onClick={() => updateStatus(app.id, "Approved")}
                    className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(app.id, "Rejected")}
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
