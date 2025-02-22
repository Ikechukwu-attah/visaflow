import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Results from "./Results";

const EligibilityForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    age: "",
    nationality: "",
  });
  const [travelPurpose, setTravelPurpose] = useState("");
  const [travelHistory, setTravelHistory] = useState({
    visitedCanada: "",
    visaDenied: "",
  });
  const [employmentDetails, setEmploymentDetails] = useState({
    jobOffer: "",
    highestEducation: "",
    workExperience: "",
  });

  // ✅ Prevent Progress Bar from Increasing Beyond Step 4
  const nextStep = () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {/* ✅ Fixed Progress Bar */}
      <div className="mb-4 text-center text-gray-600">
        Step {Math.min(step, 4)} of 4
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
        ></div>
      </div>

      {/* ✅ Render Step Components (No extra card) */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        {step === 1 && (
          <StepOne nextStep={nextStep} setPersonalInfo={setPersonalInfo} />
        )}
        {step === 2 && (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            setTravelPurpose={setTravelPurpose}
          />
        )}
        {step === 3 && (
          <StepThree
            nextStep={nextStep}
            prevStep={prevStep}
            travelPurpose={travelPurpose}
            setTravelHistory={setTravelHistory}
          />
        )}
        {step === 4 && (
          <StepFour
            nextStep={nextStep}
            prevStep={prevStep}
            setEmploymentDetails={setEmploymentDetails}
          />
        )}
        {step === 5 && (
          <Results
            userResponses={{
              personalInfo,
              travelPurpose,
              travelHistory,
              employmentDetails,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EligibilityForm;
