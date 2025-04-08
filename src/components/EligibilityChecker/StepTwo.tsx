import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  travelPurpose: string;
};

const StepTwo = ({
  nextStep,
  prevStep,
  setTravelPurpose,
}: {
  nextStep: () => void;
  prevStep: () => void;
  setTravelPurpose: (purpose: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setTravelPurpose(data.travelPurpose);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Step 2: Purpose of Travel
      </h2>

      <div className="space-y-4">
        {/* Travel Purpose Dropdown */}
        <div>
          <label className="text-sm font-medium">Select Your Purpose</label>
          <select
            {...register("travelPurpose", {
              required: "Purpose of travel is required",
            })}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select Purpose</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Tourism">Tourism</option>
            <option value="Business">Business</option>
            <option value="Family Sponsorship">Family Sponsorship</option>
            <option value="Other">Other</option>
          </select>
          {errors.travelPurpose && (
            <span className="text-red-500 text-xs">
              {errors.travelPurpose.message}
            </span>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
