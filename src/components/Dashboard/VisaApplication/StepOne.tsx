import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface StepProps {
  nextStep: () => void;
  setPersonalInfo?: (info: {
    name: string;
    age: string;
    nationality: string;
  }) => void;
}

type FormValues = {
  name: string;
  age: string;
  nationality: string;
};

const StepOne: React.FC<StepProps> = ({ nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (_data) => {
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 shadow-lg rounded-lg w-full max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900">
        Step 1: Personal Information
      </h2>

      {/* Full Name */}
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <input
          {...register("name", { required: "Full Name is required" })}
          placeholder="Enter Full Name"
          className="w-full p-4 border rounded-md"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Age */}
      <div>
        <label className="text-sm font-medium">Age</label>
        <input
          type="number"
          {...register("age", { required: "Age is required" })}
          placeholder="Enter Age"
          className="w-full p-4 border rounded-md"
        />
        {errors.age && (
          <p className="text-red-500 text-sm">{errors.age.message}</p>
        )}
      </div>

      {/* Nationality */}
      <div>
        <label className="text-sm font-medium">Nationality</label>
        <select
          {...register("nationality", { required: "Nationality is required" })}
          className="w-full p-4 border rounded-md"
        >
          <option value="">Select Nationality</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="Others">Others</option>
        </select>
        {errors.nationality && (
          <p className="text-red-500 text-sm">{errors.nationality.message}</p>
        )}
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepOne;
