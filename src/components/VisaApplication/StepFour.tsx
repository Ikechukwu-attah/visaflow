import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type DocumentUploadForm = {
  passport: FileList;
  proofOfFunds: FileList;
  invitationLetter?: FileList;
  consent: boolean;
};

const StepFour = ({ prevStep }: { prevStep: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DocumentUploadForm>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<DocumentUploadForm> = (data) => {
    console.log("Step 4 Data:", data);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Upload Documents</h3>

      {/* Passport Upload */}
      <div>
        <label className="text-sm font-medium">Passport (Scanned Copy)</label>
        <input
          type="file"
          {...register("passport", { required: "Passport upload is required" })}
          className="w-full p-3 border rounded-md"
        />
        {errors.passport && (
          <span className="text-red-500 text-xs">
            {errors.passport.message}
          </span>
        )}
      </div>

      {/* Proof of Funds Upload */}
      <div>
        <label className="text-sm font-medium">
          Proof of Funds (Bank Statement)
        </label>
        <input
          type="file"
          {...register("proofOfFunds", {
            required: "Proof of funds is required",
          })}
          className="w-full p-3 border rounded-md"
        />
        {errors.proofOfFunds && (
          <span className="text-red-500 text-xs">
            {errors.proofOfFunds.message}
          </span>
        )}
      </div>

      {/* Invitation Letter Upload (Optional) */}
      <div>
        <label className="text-sm font-medium">
          Invitation Letter (if applicable)
        </label>
        <input
          type="file"
          {...register("invitationLetter")}
          className="w-full p-3 border rounded-md"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          {...register("consent", {
            required: "You must agree before submitting",
          })}
          className="w-4 h-4"
        />
        <label className="ml-2 text-sm">
          I confirm that all information provided is accurate.
        </label>
      </div>
      {errors.consent && (
        <span className="text-red-500 text-xs">{errors.consent.message}</span>
      )}

      {/* Submission Message */}
      {submitted && (
        <p className="text-green-600 text-sm">
          Application submitted successfully!
        </p>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default StepFour;
