import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string | string[];
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
        <h2 className="text-xl font-bold text-green-600">Success!</h2>
        {Array.isArray(message) ? (
          <ul className="list-disc list-inside text-gray-800 text-left space-y-1 mb-6">
            {message.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-red-600 mt-2 text-sm">{message}</p>
        )}

        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
