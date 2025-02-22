import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  gender: string;
  facingDiscrimination: string;
  countryDiscriminates: string;
};

const StepFive = ({
  nextStep,
  prevStep,
  setGenderDetails,
}: {
  nextStep: () => void;
  prevStep: () => void;
  setGenderDetails: (data: FormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setGenderDetails(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">
        Step 5: Gender & LGBTQ+
      </h2>

      <label className="text-sm font-medium">What is your gender?</label>
      <select
        {...register("gender", { required: true })}
        className="w-full p-3 border rounded-md"
      >
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non-Binary">Non-Binary</option>
        <option value="Other">Other</option>
      </select>
      {errors.gender && (
        <span className="text-red-500 text-xs">This field is required.</span>
      )}

      <label className="text-sm font-medium">
        Have you faced discrimination due to your gender or sexual orientation?
      </label>
      <select
        {...register("facingDiscrimination")}
        className="w-full p-3 border rounded-md"
      >
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <label className="text-sm font-medium">
        Does your country have laws discriminating against LGBTQ+ individuals?
      </label>
      <select
        {...register("countryDiscriminates")}
        className="w-full p-3 border rounded-md"
      >
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

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

export default StepFive;
