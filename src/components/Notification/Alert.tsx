import React, { useState } from "react";

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg">
      {message}
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 text-white font-bold"
      >
        X
      </button>
    </div>
  );
};

export default Alert;
