import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import LandingSection from "../../layouts/LandingSection";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <LandingSection
      className="py-20 bg-gradient-to-r from-blue-50  to-blue-100 dark:from-gray-800 dark:to-gray-900"
      id="contact"
    >
      {/* ✅ Heading Outside the Card for Consistency */}
      <div className="text-center mb-12" id="how-it-works">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions? Send us a message, and we’ll get back to you as soon
          as possible.
        </p>
      </div>

      {/* ✅ Contact Form Card */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Message
            </label>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              className="w-full p-3 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white h-32"
              placeholder="Type your message here..."
            />
            {errors.message && (
              <span className="text-red-500 text-xs">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </LandingSection>
  );
};

export default ContactUs;
