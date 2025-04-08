import { useState } from "react";

const SecuritySettings = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enable2FA, setEnable2FA] = useState(false);

  const handlePasswordChange = () => {
    if (password === confirmPassword && password !== "") {
      alert("Password successfully updated!");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match.");
    }
  };

  const handleDeleteAccount = () => {
    const confirmation = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmation) {
      alert("Account deleted.");
      // Here, you would call an API to delete the account.
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Security Settings</h2>

      {/* Change Password */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Change Password</h3>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
        />
        <button
          onClick={handlePasswordChange}
          className="bg-blue-600 text-white py-2 px-4 rounded-md w-full"
        >
          Update Password
        </button>
      </div>

      {/* Two-Factor Authentication */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Two-Factor Authentication
        </h3>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={enable2FA}
            onChange={() => setEnable2FA(!enable2FA)}
            className="h-5 w-5"
          />
          <span>
            {enable2FA ? "Enabled" : "Enable Two-Factor Authentication"}
          </span>
        </label>
      </div>

      {/* Delete Account */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-red-600 mb-2">
          Delete Account
        </h3>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-600 text-white py-2 px-4 rounded-md w-full"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;
