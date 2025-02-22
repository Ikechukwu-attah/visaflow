import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        Contact Information
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Reach us via email, phone, or visit our office.
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-xl text-blue-600" />
          <p className="text-gray-800 dark:text-white">info@visflow.com</p>
        </div>

        <div className="flex items-center gap-4">
          <FaPhone className="text-xl text-blue-600" />
          <p className="text-gray-800 dark:text-white">+1 234 567 8900</p>
        </div>

        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-xl text-blue-600" />
          <p className="text-gray-800 dark:text-white">
            123 AI Street, Toronto, Canada
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
