import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  visitedCanada: string;
  visaDenied: string;
};

const StepThree = ({
  nextStep,
  prevStep,
  travelPurpose,
  setTravelHistory,
}: {
  nextStep: () => void;
  prevStep: () => void;
  travelPurpose: string;
  setTravelHistory: (history: {
    visitedCanada: string;
    visaDenied: string;
  }) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setTravelHistory(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Step 3: Travel & Work History
      </h2>
      <p className="text-gray-600 mb-4">
        Since you selected{" "}
        <span className="font-semibold text-blue-600">{travelPurpose}</span>,
        please answer the following questions.
      </p>

      <div className="space-y-4">
        {/* Have you visited Canada before? */}
        <div>
          <label className="text-sm font-medium">
            Have you visited Canada before?
          </label>
          <select
            {...register("visitedCanada", {
              required: "This field is required",
            })}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.visitedCanada && (
            <span className="text-red-500 text-xs">
              {errors.visitedCanada.message}
            </span>
          )}
        </div>

        {/* Have you ever been denied a visa? */}
        <div>
          <label className="text-sm font-medium">
            Have you ever been denied a visa?
          </label>
          <select
            {...register("visaDenied", { required: "This field is required" })}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.visaDenied && (
            <span className="text-red-500 text-xs">
              {errors.visaDenied.message}
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

export default StepThree;
