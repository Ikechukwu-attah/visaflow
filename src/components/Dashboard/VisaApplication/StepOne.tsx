import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  fullName: string;
  dob: string;
  passportNumber: string;
  email: string;
  phone: string;
  address: string;
};

const StepOne = ({ nextStep }: { nextStep: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Step 1 Data:", data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <input
          {...register("fullName", { required: "Full name is required" })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter full name"
        />
        {errors.fullName && (
          <span className="text-red-500 text-xs">
            {errors.fullName.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          {...register("dob", { required: "Date of Birth is required" })}
          className="w-full p-3 border rounded-md"
        />
        {errors.dob && (
          <span className="text-red-500 text-xs">{errors.dob.message}</span>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Passport Number</label>
        <input
          {...register("passportNumber", {
            required: "Passport number is required",
          })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter passport number"
        />
        {errors.passportNumber && (
          <span className="text-red-500 text-xs">
            {errors.passportNumber.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          {...register("email", { required: "Email is required" })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter email"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Phone Number</label>
        <input
          {...register("phone", { required: "Phone number is required" })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter phone number"
        />
        {errors.phone && (
          <span className="text-red-500 text-xs">{errors.phone.message}</span>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Residential Address</label>
        <input
          {...register("address", { required: "Address is required" })}
          className="w-full p-3 border rounded-md"
          placeholder="Enter residential address"
        />
        {errors.address && (
          <span className="text-red-500 text-xs">{errors.address.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-md"
      >
        Next
      </button>
    </form>
  );
};

export default StepOne;
