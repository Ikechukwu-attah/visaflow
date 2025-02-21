import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const adminLinks = [
  { id: 1, name: "Users", path: "/admin/users" },
  { id: 2, name: "Applications", path: "/admin/applications" },
  { id: 3, name: "Analytics", path: "/admin/analytics" },
  { id: 4, name: "Payment", path: "/admin/payment" },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar - Always visible on desktop, toggle on mobile */}
      <aside
        className={`fixed md:relative top-0 left-0 w-64 bg-gray-900 text-white min-h-screen p-6 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          {adminLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)} // Close sidebar when clicking a link
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
