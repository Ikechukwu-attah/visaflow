import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import MainLayout from "../../../layouts/MainLayout";
import { LoginResponse, useUserAuth } from "../../../hooks/auth/useUserAuth";
import { useNavigate } from "react-router";
import Spinner from "../../../components/Spinner/Spinner";
import { useAuth } from "../../../context/Auth/AuthContext";

type Inputs = {
  email: string;
  password: string;
};

type DecodedToken = {
  email: string;
  username: string;
  role: "user" | "admin";
  iat: number;
  exp: number;
};
const Login: React.FC = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const { userAuth, isLoading, error, userData } = useUserAuth();
  const navigate = useNavigate();
  const [token, setToken] = useState({});
  const { setUser } = useAuth();
  console.log({ userData });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log({ data });
    await userAuth("login", data);
  };

  let data;
  console.log(data);

  console.log(userData);
  useEffect(() => {
    if (userData && "accessToken" in userData) {
      setToken(userData);
      navigate("/dashboard");
    }
  }, [userData]);

  useEffect(() => {
    if (token && "accessToken" in token) {
      const { accessToken } = token as LoginResponse;

      const decodedData = jwtDecode<DecodedToken>(accessToken);
      const formattedData = {
        email: decodedData?.email,
        username: decodedData?.username,
        role: decodedData?.role,
      };

      console.log("formatted data", formattedData);
      console.log("ikkkkk", decodedData);

      setUser(decodedData);
    }
  }, [token, userData]);
  return (
    <MainLayout>
      <div
        className="flex flex-col justify-center items-center min-h-[90vh] px-6 sm:px-12 md:px-32 lg:px-56 
          bg-gradient-to-br from-[#1E3A8A] to-[#111827]"
      >
        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 ">
            Login to VisFlow
          </h2>

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
              placeholder="Enter your password"
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
              Login
            </button>
            {!isLoading && <Spinner />}
          </div>
        </form>

        {/* Footer Links */}
        <div className="mt-4 text-sm text-gray-600">
          <p className="text-center">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgotten Password?
            </a>
          </p>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
