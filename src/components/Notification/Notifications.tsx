import { useState } from "react";
import { FaBell } from "react-icons/fa";

const notifications = [
  { id: 1, message: "Your visa application has been received." },
  { id: 2, message: "Your consultation booking is confirmed." },
  { id: 3, message: "Your payment for Premium Plan was successful." },
];

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
          console.log("notification status", isOpen);
        }}
        className="relative cursor-pointer"
      >
        <FaBell className="text-xl text-gray-700" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 ">
          <h4 className="text-sm font-semibold">Notifications</h4>
          <ul className="mt-2 text-sm">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="p-2 border-b last:border-none"
              >
                {notification.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
