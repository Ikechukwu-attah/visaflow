import { howItWorkData } from "./data";
import LandingSection from "../../layouts/LandingSection";

const HowItWorks = () => {
  return (
    <LandingSection className="py-20 bg-gray-900 text-white" id="how-it-works">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">How It Works</h2>
      </div>

      {/* ✅ Keeping the diagonal layout */}
      <div className="relative flex flex-col items-center gap-8">
        {howItWorkData.map((data, index) => (
          <div
            key={data.id}
            className={`relative p-6 w-72 text-center bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-xl shadow-xl hover:scale-105 transition-transform
            ${
              index === 0
                ? "lg:self-start"
                : index === 1
                ? "lg:self-center"
                : "lg:self-end"
            }
            sm:self-center"
            `}
          >
            <span className="text-4xl text-white">{<data.icon />}</span>
            <h2 className="text-2xl font-semibold mt-3">{data.title}</h2>
            <p className="text-gray-200 mt-2">{data.desc}</p>
          </div>
        ))}
      </div>
    </LandingSection>
  );
};

export default HowItWorks;
