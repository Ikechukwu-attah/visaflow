import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        Get in Touch
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Have questions? Fill out the form, and we'll get back to you soon.
      </p>
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
          <span className="text-red-500 text-xs">{errors.name.message}</span>
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
          <span className="text-red-500 text-xs">{errors.email.message}</span>
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
          <span className="text-red-500 text-xs">{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
