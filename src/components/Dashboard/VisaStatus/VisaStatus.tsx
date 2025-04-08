const VisaStatus = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold">Visa Application Status</h2>

      <div className="mt-4">
        <p className="text-gray-700">
          Application Number: <strong>#VISA12345</strong>
        </p>
        <p className="text-gray-700">
          Status:{" "}
          <span className="text-green-600 font-semibold">Processing</span>
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
        <div className="bg-blue-600 h-4 rounded-full w-3/4"></div>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Estimated Completion: 3 Weeks
      </p>
    </div>
  );
};

export default VisaStatus;
