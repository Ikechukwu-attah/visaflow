import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  fleeingPersecution: string;
  persecutionType: string;
  previousRefugeeApplication: string;
};

const StepSix = ({
  nextStep,
  prevStep,
  setRefugeeStatus,
}: {
  nextStep: () => void;
  prevStep: () => void;
  setRefugeeStatus: (data: FormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setRefugeeStatus(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">
        Step 6: Refugee & Asylum Information
      </h2>

      <label className="text-sm font-medium">
        Are you fleeing persecution?
      </label>
      <select
        {...register("fleeingPersecution", { required: true })}
        className="w-full p-3 border rounded-md"
      >
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      {errors.fleeingPersecution && (
        <span className="text-red-500 text-xs">This field is required.</span>
      )}

      <label className="text-sm font-medium">
        If yes, what type of persecution?
      </label>
      <select
        {...register("persecutionType")}
        className="w-full p-3 border rounded-md"
      >
        <option value="">Select an option</option>
        <option value="Religious Persecution">Religious Persecution</option>
        <option value="Political Persecution">Political Persecution</option>
        <option value="Gender-Based Persecution">
          Gender-Based Persecution
        </option>
        <option value="War/Armed Conflict">War / Armed Conflict</option>
        <option value="Human Rights Violations">Human Rights Violations</option>
        <option value="Other">Other</option>
      </select>

      <label className="text-sm font-medium">
        Have you applied for refugee status in another country before?
      </label>
      <select
        {...register("previousRefugeeApplication")}
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

export default StepSix;
