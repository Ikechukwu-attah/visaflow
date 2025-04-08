import { FaBolt, FaClock, FaShieldAlt } from "react-icons/fa";
import LandingSection from "../../layouts/LandingSection";

const features = [
  {
    id: 1,
    title: "AI-Driven Immigration",
    icon: <FaBolt />,
    desc: "Faster & smarter visa processing with AI-powered insights.",
  },
  {
    id: 2,
    title: "Real-Time Visa Tracking",
    icon: <FaClock />,
    desc: "Stay updated on your application status in real-time.",
  },
  {
    id: 3,
    title: "Legal Expert Support",
    icon: <FaShieldAlt />,
    desc: "Get guidance from licensed professionals and immigration lawyers.",
  },
];

const WhyChooseUs = () => {
  return (
    <LandingSection
      id=""
      className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Why Choose Us?</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center hover:scale-105 transition-transform border border-gray-300 dark:border-gray-700"
          >
            <span className="text-4xl text-indigo-600 dark:text-indigo-400">
              {feature.icon}
            </span>
            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </LandingSection>
  );
};

export default WhyChooseUs;
