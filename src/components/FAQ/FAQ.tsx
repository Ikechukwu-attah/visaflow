import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import LandingSection from "../../layouts/LandingSection";

const faqData = [
  {
    question: "How does the AI visa eligibility checker work?",
    answer:
      "Our AI analyzes your provided details and matches them with the latest immigration policies to suggest the best visa options.",
  },
  {
    question: "Is this service free to use?",
    answer:
      "Yes, the basic eligibility check is free. However, for premium services like expert consultations, a fee applies.",
  },
  {
    question: "Can I apply for a visa directly through your platform?",
    answer:
      "No, we provide expert guidance and AI-driven insights to assist your application but do not process visas directly.",
  },
  {
    question: "What makes this platform different?",
    answer:
      "Unlike traditional agencies, we leverage AI to provide instant recommendations, reducing time and effort for users.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <LandingSection
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-20"
      id="faq"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
          >
            {/* Question Button */}
            <button
              className="w-full flex justify-between items-center text-left font-semibold text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Smooth Expanding Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  );
};

export default FAQ;
