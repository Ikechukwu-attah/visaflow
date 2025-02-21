import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const userLinks = [
  { id: 1, name: "Profile", path: "/dashboard/profile" },
  { id: 2, name: "Security Settings", path: "/dashboard/security" },
  { id: 3, name: "Visa Application Status", path: "/dashboard/visa-status" },
  { id: 4, name: "Apply for Visa", path: "/dashboard/visa-application" },
  { id: 5, name: "Upload Documents", path: "/dashboard/document-upload" },
  { id: 6, name: "Book Consultation", path: "/dashboard/book-consultation" },
];

const UserSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar - Responsive */}
      <aside
        className={`fixed md:relative top-0 left-0 w-64 bg-gray-900 text-white min-h-screen p-6 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex md:flex-col md:w-64 z-40`}
      >
        <h2 className="text-xl font-bold mb-6">User Dashboard</h2>
        <ul className="space-y-4">
          {userLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md ${
                    isActive ? "bg-blue-600" : "hover:bg-gray-700"
                  }`
                }
                onClick={() => setIsOpen(false)} // Close on click (Mobile)
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default UserSidebar;
