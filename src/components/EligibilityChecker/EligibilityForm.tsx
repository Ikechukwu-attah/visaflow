import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive"; // Gender & LGBTQ+ Questions
import StepSix from "./StepSix"; // Refugee Status Questions
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

  // ✅ Correct Gender Details
  const [genderDetails, setGenderDetails] = useState({
    gender: "",
    facingDiscrimination: "",
    countryDiscriminates: "",
  });

  // ✅ Correct Refugee Status
  const [refugeeStatus, setRefugeeStatus] = useState({
    fleeingPersecution: "",
    persecutionType: "",
    previousRefugeeApplication: "",
  });

  // ✅ Prevent Progress Bar from Increasing Beyond Step 6
  const nextStep = () => {
    if (step < 7) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className=" w-full max-w-3xl mx-auto mt-10">
      {/* ✅ Fixed Progress Bar */}
      <div className="mb-4 text-center text-gray-600">
        Step {Math.min(step, 6)} of 6
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(Math.min(step, 6) / 6) * 100}%` }}
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
          <StepFive
            nextStep={nextStep}
            prevStep={prevStep}
            setGenderDetails={setGenderDetails}
          />
        )}
        {step === 6 && (
          <StepSix
            nextStep={nextStep}
            prevStep={prevStep}
            setRefugeeStatus={setRefugeeStatus}
          />
        )}
        {step === 7 && (
          <Results
            userResponses={{
              personalInfo,
              travelPurpose,
              travelHistory,
              employmentDetails,
              genderDetails,
              refugeeStatus,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EligibilityForm;
