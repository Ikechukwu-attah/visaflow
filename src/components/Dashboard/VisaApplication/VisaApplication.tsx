import React, { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
const VisaApplication = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 md:px-32 lg:px-56">
      <h2 className="text-3xl font-bold text-gray-900">Visa Application</h2>

      {/* Progress Indicator */}
      <div className="w-full max-w-lg mt-6 flex justify-between">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${
                step >= s
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Render Different Steps */}
      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg mt-6">
        {step === 1 && <StepOne nextStep={nextStep} />}
        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <StepFour prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default VisaApplication;
