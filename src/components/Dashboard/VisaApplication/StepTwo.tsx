import { useForm, SubmitHandler } from "react-hook-form";

type VisaTypeForm = {
  purpose: string;
  duration: string;
  arrivalDate: string;
  funds: string;
};

const StepTwo = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VisaTypeForm>();

  const onSubmit: SubmitHandler<VisaTypeForm> = (data) => {
    console.log("Step 2 Data:", data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Visa Type Selection</h3>

      {/* Purpose of Visit */}
      <div>
        <label className="text-sm font-medium">Purpose of Visit</label>
        <select
          {...register("purpose", { required: "Purpose of visit is required" })}
          className="w-full p-3 border rounded-md"
        >
          <option value="">Select Purpose</option>
          <option value="Work">Work Visa</option>
          <option value="Study">Study Visa</option>
          <option value="Tourism">Tourist Visa</option>
          <option value="Business">Business Visa</option>
          <option value="Family">Family Visit Visa</option>
        </select>
        {errors.purpose && (
          <span className="text-red-500 text-xs">{errors.purpose.message}</span>
        )}
      </div>

      {/* Duration of Stay */}
      <div>
        <label className="text-sm font-medium">
          Intended Duration of Stay (in weeks)
        </label>
        <input
          type="number"
          {...register("duration", {
            required: "Duration of stay is required",
          })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter duration in weeks"
        />
        {errors.duration && (
          <span className="text-red-500 text-xs">
            {errors.duration.message}
          </span>
        )}
      </div>

      {/* Planned Arrival Date */}
      <div>
        <label className="text-sm font-medium">Planned Date of Arrival</label>
        <input
          type="date"
          {...register("arrivalDate", { required: "Arrival date is required" })}
          className="w-full p-3 border rounded-md"
        />
        {errors.arrivalDate && (
          <span className="text-red-500 text-xs">
            {errors.arrivalDate.message}
          </span>
        )}
      </div>

      {/* Funds Available for Visit */}
      <div>
        <label className="text-sm font-medium">Funds Available (in CAD)</label>
        <input
          type="number"
          {...register("funds", { required: "Funds amount is required" })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter amount in CAD"
        />
        {errors.funds && (
          <span className="text-red-500 text-xs">{errors.funds.message}</span>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
