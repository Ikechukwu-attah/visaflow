import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: "User" | "Admin";
  isSuspended: boolean;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    isSuspended: false,
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Admin",
    isSuspended: false,
  },
  {
    id: 3,
    name: "David Lee",
    email: "david@example.com",
    role: "User",
    isSuspended: true,
  },
];

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");

  // Function to change role
  const toggleRole = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, role: user.role === "User" ? "Admin" : "User" }
          : user
      )
    );
  };

  // Function to toggle suspension status
  const toggleSuspend = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isSuspended: !user.isSuspended } : user
      )
    );
  };

  // Function to delete user
  const deleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  // Filter users based on search input
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full sm:w-1/3"
      />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border p-3">ID</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Role</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="text-center bg-white">
                <td className="border p-3">{user.id}</td>
                <td className="border p-3">{user.name}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3">
                  <button
                    onClick={() => toggleRole(user.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    {user.role}
                  </button>
                </td>
                <td className="border p-3">
                  {user.isSuspended ? (
                    <span className="text-red-500">Suspended</span>
                  ) : (
                    <span className="text-green-500">Active</span>
                  )}
                </td>
                <td className="border p-3 flex justify-center gap-2">
                  <button
                    onClick={() => toggleSuspend(user.id)}
                    className={`px-3 py-1 rounded ${
                      user.isSuspended
                        ? "bg-green-500 hover:bg-green-700"
                        : "bg-yellow-500 hover:bg-yellow-700"
                    } text-white`}
                  >
                    {user.isSuspended ? "Activate" : "Suspend"}
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Mobile View */}
      <div className="sm:hidden mt-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 shadow-md rounded mb-4 text-center border border-gray-300"
          >
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong>{" "}
              <button
                onClick={() => toggleRole(user.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                {user.role}
              </button>
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {user.isSuspended ? (
                <span className="text-red-500">Suspended</span>
              ) : (
                <span className="text-green-500">Active</span>
              )}
            </p>
            <div className="mt-3 flex justify-center gap-2">
              <button
                onClick={() => toggleSuspend(user.id)}
                className={`px-3 py-1 rounded ${
                  user.isSuspended
                    ? "bg-green-500 hover:bg-green-700"
                    : "bg-yellow-500 hover:bg-yellow-700"
                } text-white`}
              >
                {user.isSuspended ? "Activate" : "Suspend"}
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
