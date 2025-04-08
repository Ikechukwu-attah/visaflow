import React, { useEffect, useState } from "react";
import { useGetVisaType } from "../../hooks/auth/useGetVisaType";
import Spinner from "../Spinner/Spinner";
import SuccessModal from "../modal/SuccessModal";
import { useGetRequiredDoc } from "../../hooks/usegetRequiredDoc";

type ResultsProps = {
  userResponses: {
    personalInfo: {
      name: string;
      age: string;
      nationality: string;
    };
    travelPurpose: string;
    travelHistory: {
      visitedCanada: string;
      visaDenied: string;
    };
    employmentDetails: {
      jobOffer: string;
      highestEducation: string;
      workExperience: string;
    };
    genderDetails: {
      gender: string;
      facingDiscrimination: string;
      countryDiscriminates: string;
    };
    refugeeStatus: {
      fleeingPersecution: string;
      persecutionType: string;
      previousRefugeeApplication: string;
    };
  };
};

const Results: React.FC<ResultsProps> = ({ userResponses }) => {
  const { visaType, getVisaType, isLoading, error } = useGetVisaType();
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    getRequiredDoc,
    isLoading: isLoadingDoc,
    requiredData,
  } = useGetRequiredDoc();

  useEffect(() => {
    getVisaType(userResponses);
  }, [userResponses]);

  console.log("vias type", visaType);
  console.log("required document", requiredData);

  const getVisaRecommendation = () => {
    const { travelPurpose, travelHistory, employmentDetails } = userResponses;

    if (travelPurpose === "Study") {
      return {
        visa: "Student Visa",
        reason:
          "You selected 'Study' as your purpose of travel. A student visa is required to study in Canada.",
      };
    }
    if (travelPurpose === "Work" && employmentDetails.jobOffer === "Yes") {
      return {
        visa: "Work Visa",
        reason:
          "You have a job offer in Canada, making you eligible for a Work Visa.",
      };
    }
    if (travelPurpose === "Business") {
      return {
        visa: "Business Visa",
        reason:
          "Since you selected 'Business', a Business Visa may be the best option for you.",
      };
    }
    if (travelPurpose === "Family Sponsorship") {
      return {
        visa: "Family Sponsorship Visa",
        reason:
          "You may be eligible for a Family Sponsorship Visa based on your selection.",
      };
    }
    if (travelHistory.visaDenied === "Yes") {
      return {
        visa: "Consultation Recommended",
        reason:
          "Due to your visa denial history, we recommend consulting with an immigration expert.",
      };
    }

    return {
      visa: "Tourist Visa",
      reason:
        "Based on your responses, a Tourist Visa may be suitable for your visit to Canada.",
    };
  };

  const recommendation = getVisaRecommendation();

  return (
    <div>
      {/* Step Progress Bar */}
      <div className="mb-4">
        <div className="text-gray-600">Step 5 of 5</div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        AI Eligibility Results
      </h2>

      {/* Visa Recommendation Section */}
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-gray-100 p-5 rounded-lg">
          <p className="text-lg font-semibold">Recommended Visa:</p>
          <p className="text-xl font-bold text-blue-600">
            {visaType?.bestVisaType}
          </p>
          <p className="text-lg font-semibold">Reason:</p>
          <p className="text-gray-700 mt-2">{visaType?.reasoning}</p>
          <p className="text-lg font-semibold">Score:</p>
          <p className="text-gray-700 mt-2">{visaType?.confidence}</p>
        </div>
      )}

      {/* Next Steps */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">
          Proceed to Visa Application
        </button>
        <button
          onClick={() => {
            setIsSuccess(true);
            getRequiredDoc(visaType?.bestVisaType || null);
          }}
          className="w-full bg-gray-600 text-white p-3 rounded-md hover:bg-gray-700 transition"
        >
          See Required Documents
        </button>
      </div>
      <SuccessModal
        message={requiredData?.requiredDocuments || ""}
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
      />
    </div>
  );
};

export default Results;
