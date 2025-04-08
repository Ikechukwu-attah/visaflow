import { useState } from "react";
import SuccessModal from "../../modal/SuccessModal";

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedExpert, setSelectedExpert] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const immigrationExperts = [
    "John Smith (Visa Expert)",
    "Sarah Johnson (Immigration Lawyer)",
    "Michael Lee (Consultant)",
  ];

  const handleSubmit = () => {
    if (selectedDate && selectedExpert) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 md:px-32 lg:px-56">
      <h2 className="text-3xl font-bold text-gray-900">Book a Consultation</h2>

      {/* Select Date & Time */}
      <div className="w-full max-w-lg mt-6">
        <label className="text-sm font-medium">Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-3 border rounded-md"
        />
      </div>

      {/* Select Immigration Expert */}
      <div className="w-full max-w-lg mt-4">
        <label className="text-sm font-medium">Select Immigration Expert</label>
        <select
          value={selectedExpert}
          onChange={(e) => setSelectedExpert(e.target.value)}
          className="w-full p-3 border rounded-md"
        >
          <option value="">Select an Expert</option>
          {immigrationExperts.map((expert, index) => (
            <option key={index} value={expert}>
              {expert}
            </option>
          ))}
        </select>
      </div>

      {/* Confirm Booking */}
      <button
        onClick={handleSubmit}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md"
      >
        Confirm Booking
      </button>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        message={`Your consultation with ${selectedExpert} has been booked for ${selectedDate}!`}
      />
    </div>
  );
};

export default ConsultationBooking;
