import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img
        src="/assets/profile.webp"
        alt="User Avatar"
        className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-xl font-bold mt-4">John Doe</h2>
      <p className="text-gray-500 text-sm">john.doe@example.com</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;
