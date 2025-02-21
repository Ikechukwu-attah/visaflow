import React, { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    profileImage: "/assets/profile.webp", // Default profile picture
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Convert file to a local URL for preview
      const fileURL = URL.createObjectURL(file);

      setUserData({ ...userData, profileImage: fileURL });

      // Clean up memory to avoid performance issues
      return () => URL.revokeObjectURL(fileURL);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      {/* Profile Picture Upload */}
      <div className="relative w-24 h-24 mx-auto">
        <img
          src={userData.profileImage}
          alt="User Avatar"
          className="w-full h-full rounded-full border-4 border-blue-500 object-cover"
        />
        {isEditing && (
          <label className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-md cursor-pointer">
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* User Info */}
      {!isEditing ? (
        <>
          <h2 className="text-xl font-bold mt-4">{userData.name}</h2>
          <p className="text-gray-500 text-sm">{userData.email}</p>
          <p className="text-gray-500 text-sm">{userData.phone}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Edit Profile
          </button>
        </>
      ) : (
        <form className="mt-4 space-y-3">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />

          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
