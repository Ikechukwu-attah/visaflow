import React from "react";

const QuickActions = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

      <button className="w-full  cursor-pointer bg-blue-600 text-white py-3 rounded-md mb-2">
        Apply for Visa
      </button>
      <button className="w-full cursor-pointer bg-green-600 text-white py-3 rounded-md mb-2">
        Upload Documents
      </button>
      <button className="w-full  cursor-pointer bg-purple-600 text-white py-3 rounded-md">
        Book Consultation
      </button>
    </div>
  );
};

export default QuickActions;
