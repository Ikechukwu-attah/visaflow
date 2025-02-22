import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  jobOffer: string;
  highestEducation: string;
  workExperience: string;
};

const StepFour = ({
  nextStep,
  prevStep,
  setEmploymentDetails,
}: {
  nextStep: () => void;
  prevStep: () => void;
  setEmploymentDetails: (details: FormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setEmploymentDetails(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Step 4: Employment & Education
      </h2>

      <div className="space-y-4">
        {/* Do you have a job offer in Canada? */}
        <div>
          <label className="text-sm font-medium">
            Do you have a job offer in Canada?
          </label>
          <select
            {...register("jobOffer", { required: "This field is required" })}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.jobOffer && (
            <span className="text-red-500 text-xs">
              {errors.jobOffer.message}
            </span>
          )}
        </div>

        {/* Highest Level of Education */}
        <div>
          <label className="text-sm font-medium">
            What is your highest level of education?
          </label>
          <select
            {...register("highestEducation", {
              required: "This field is required",
            })}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select</option>
            <option value="High School">High School</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor’s Degree">Bachelor’s Degree</option>
            <option value="Master’s Degree">Master’s Degree</option>
            <option value="PhD">PhD</option>
          </select>
          {errors.highestEducation && (
            <span className="text-red-500 text-xs">
              {errors.highestEducation.message}
            </span>
          )}
        </div>

        {/* Work Experience */}
        <div>
          <label className="text-sm font-medium">
            How many years of work experience do you have?
          </label>
          <select
            {...register("workExperience", {
              required: "This field is required",
            })}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select</option>
            <option value="0-1 Year">0-1 Year</option>
            <option value="1-3 Years">1-3 Years</option>
            <option value="3-5 Years">3-5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>
          {errors.workExperience && (
            <span className="text-red-500 text-xs">
              {errors.workExperience.message}
            </span>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
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

export default StepFour;
