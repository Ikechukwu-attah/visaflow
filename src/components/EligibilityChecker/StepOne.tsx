import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface StepProps {
  nextStep: () => void;
  setPersonalInfo: (info: {
    name: string;
    age: string;
    nationality: string;
  }) => void;
}

type FormInputs = {
  name: string;
  age: string;
  nationality: string;
};

const StepOne: React.FC<StepProps> = ({ nextStep, setPersonalInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setPersonalInfo(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Full Name */}
      <div>
        <input
          {...register("name", { required: "Full Name is required" })}
          placeholder="Full Name"
          className="w-full p-3 border rounded-md"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Age */}
      <div>
        <input
          type="number"
          {...register("age", { required: "Age is required" })}
          placeholder="Age"
          className="w-full p-3 border rounded-md"
        />
        {errors.age && (
          <p className="text-red-500 text-sm">{errors.age.message}</p>
        )}
      </div>

      {/* Nationality */}
      <div>
        <select
          {...register("nationality", { required: "Nationality is required" })}
          className="w-full p-3 border rounded-md"
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

      {/* Submit Button (No extra buttons) */}
      <div className="flex justify-end mt-6">
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
