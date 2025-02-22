import React from "react";
import LandingSection from "../../layouts/LandingSection";

const plans = [
  {
    name: "Free Plan",
    price: "$0/month",
    description: "Basic features for personal use.",
    features: [
      "AI Visa Eligibility Check",
      "Limited Document Verification",
      "General Immigration Tips",
      "Email Support",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-blue-600 text-white",
  },
  {
    name: "Standard Plan",
    price: "$19.99/month",
    description: "Advanced features for businesses & professionals.",
    features: [
      "AI Visa Eligibility Check",
      "Full Document Verification",
      "1-on-1 Consultation Booking",
      "Priority Email Support",
    ],
    buttonText: "Choose Plan",
    buttonStyle: "bg-blue-600 text-white",
  },
  {
    name: "Premium Plan",
    price: "$49.99/month",
    description: "Full access to premium immigration services.",
    features: [
      "AI Visa Eligibility Check",
      "Unlimited Document Verification",
      "Personalized Visa Roadmap",
      "Direct Chat with Immigration Experts",
      "Expedited Support & Priority Access",
    ],
    buttonText: "Upgrade Now",
    buttonStyle: "bg-blue-600 text-white",
  },
];

const Pricing = () => {
  return (
    <LandingSection className="py-20 bg-white" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Pricing Plans</h2>
        <p className="text-gray-600 mt-3">
          Choose a plan that fits your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-8 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-gray-600">{plan.description}</p>
            <h4 className="text-3xl font-bold mt-3">{plan.price}</h4>

            {/* Features List */}
            <ul className="mt-4 space-y-2 text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  ✅ <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`mt-auto py-3 rounded-md ${plan.buttonStyle}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </LandingSection>
  );
};

export default Pricing;
