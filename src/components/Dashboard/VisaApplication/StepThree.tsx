import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type AdditionalDetailsForm = {
  travelHistory: string;
  previousVisaRefusals: string;
  occupation: string;
  employer: string;
  employmentDuration: string;
  familyInCanada: string;
  invitationDetails?: string;
};

const StepThree = ({
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
  } = useForm<AdditionalDetailsForm>();

  const onSubmit: SubmitHandler<AdditionalDetailsForm> = (data) => {
    console.log("Step 3 Data:", data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Additional Details</h3>

      {/* Travel History */}
      <div>
        <label className="text-sm font-medium">
          Countries Visited in Last 10 Years
        </label>
        <textarea
          {...register("travelHistory", {
            required: "Travel history is required",
          })}
          className="w-full p-3 border rounded-md"
          placeholder="List countries separated by commas"
        />
        {errors.travelHistory && (
          <span className="text-red-500 text-xs">
            {errors.travelHistory.message}
          </span>
        )}
      </div>

      {/* Previous Visa Refusals */}
      <div>
        <label className="text-sm font-medium">
          Any Previous Visa Refusals?
        </label>
        <select
          {...register("previousVisaRefusals", {
            required: "This field is required",
          })}
          className="w-full p-3 border rounded-md"
        >
          <option value="">Select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {errors.previousVisaRefusals && (
          <span className="text-red-500 text-xs">
            {errors.previousVisaRefusals.message}
          </span>
        )}
      </div>

      {/* Employment Details */}
      <div>
        <label className="text-sm font-medium">Current Occupation</label>
        <input
          {...register("occupation", { required: "Occupation is required" })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter your occupation"
        />
        {errors.occupation && (
          <span className="text-red-500 text-xs">
            {errors.occupation.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Employer Name & Address</label>
        <input
          {...register("employer", {
            required: "Employer details are required",
          })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter employer name & address"
        />
        {errors.employer && (
          <span className="text-red-500 text-xs">
            {errors.employer.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">
          Employment Duration (Years)
        </label>
        <input
          type="number"
          {...register("employmentDuration", {
            required: "Employment duration is required",
          })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter number of years"
        />
        {errors.employmentDuration && (
          <span className="text-red-500 text-xs">
            {errors.employmentDuration.message}
          </span>
        )}
      </div>

      {/* Family Information */}
      <div>
        <label className="text-sm font-medium">
          Do You Have Family in Canada?
        </label>
        <select
          {...register("familyInCanada", {
            required: "This field is required",
          })}
          className="w-full p-3 border rounded-md"
        >
          <option value="">Select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {errors.familyInCanada && (
          <span className="text-red-500 text-xs">
            {errors.familyInCanada.message}
          </span>
        )}
      </div>

      {/* Invitation Details (Optional) */}
      <div>
        <label className="text-sm font-medium">
          Invitation Details (if applicable)
        </label>
        <textarea
          {...register("invitationDetails")}
          className="w-full p-3 border rounded-md"
          placeholder="Provide inviter's details if applicable"
        />
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

export default StepThree;
