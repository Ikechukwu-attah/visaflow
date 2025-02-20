import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MainLayout from "../../../layouts/MainLayout";

type Inputs = {
  email: string;
};

const ForgotPassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) =>
    console.log({ data });

  return (
    <MainLayout>
      <div
        className="flex flex-col justify-center items-center min-h-[90vh] px-6 sm:px-12 md:px-32 lg:px-56 
          bg-gradient-to-br from-[#1E3A8A] to-[#111827]"
      >
        {/* Forgot Password Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Forgot Password?
          </h2>
          <p className="text-center text-gray-600 text-sm">
            Enter your email address and we'll send you instructions to reset
            your password.
          </p>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Reset Password
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-sm text-gray-600">
          <p className="text-center">
            Remember your password?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotPassword;
