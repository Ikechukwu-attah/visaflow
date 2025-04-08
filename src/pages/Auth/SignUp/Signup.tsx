import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MainLayout from "../../../layouts/MainLayout";
import { useUserAuth } from "../../../hooks/auth/useUserAuth";
import { useNavigate } from "react-router";
import Spinner from "../../../components/Spinner/Spinner";

type Inputs = {
  fullname: string;
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const { userData, userAuth, isLoading, error } = useUserAuth();
  console.log({ userData });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await userAuth("register", data);
  };

  useEffect(() => {
    if (userData) {
      navigate("/login");
    }
  }, [userData]);

  console.log("base url", import.meta.env.VITE_APP_API_BASE_URL);

  return (
    <MainLayout>
      <div
        className="flex flex-col justify-center items-center min-h-[90vh] px-6 sm:px-12 md:px-32 lg:px-56 
          bg-gradient-to-br from-[#1E3A8A] to-[#111827]"
      >
        {/* Signup Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Create an Account
          </h2>

          {/* Full Name Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("fullname", { required: "Full name is required" })}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullname && (
              <span className="text-red-500 text-xs">
                {errors.fullname.message}
              </span>
            )}
          </div>

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

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition  flex gap-4 justify-center items-center">
            <button type="submit" className="">
              Sign Up
            </button>
            {!isLoading && <Spinner />}
          </div>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-sm text-gray-600">
          <p className="text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Signup;
