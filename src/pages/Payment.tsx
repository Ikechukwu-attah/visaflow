import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SuccessModal from "../components/modal/SuccessModal";

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "$19.99",
    features: ["Visa Consultation", "AI Assistance"],
  },
  {
    id: 2,
    name: "Premium",
    price: "$39.99",
    features: ["All Basic Features", "Priority Support", "Document Review"],
  },
  {
    id: 3,
    name: "Elite",
    price: "$59.99",
    features: ["All Premium Features", "Dedicated Immigration Consultant"],
  },
];

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (plan: string) => {
    setSelectedPlan(plan);
    setIsSuccess(true);
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 md:px-32 lg:px-56">
        <h2 className="text-3xl font-bold text-gray-900">Choose a Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-2xl font-semibold text-blue-600">
                {plan.price}
              </p>
              <ul className="mt-4 text-sm text-gray-700">
                {plan.features.map((feature, index) => (
                  <li key={index}>✔ {feature}</li>
                ))}
              </ul>
              <button
                onClick={() => handlePayment(plan.name)}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* Success Modal */}
        <SuccessModal
          isOpen={isSuccess}
          onClose={() => setIsSuccess(false)}
          message={`You have successfully subscribed to the ${selectedPlan} plan!`}
        />
      </div>
    </MainLayout>
  );
};

export default Payment;
