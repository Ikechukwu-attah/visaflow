import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-16 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/assets/hero.jpeg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/80 to-[#6366F1]/80"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
          Simplify Your Immigration Journey with AI
        </h1>

        <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl">
          AI-powered visa guidance, document verification, and expert
          consultations.
        </p>

        <Link to={"/eligibility-check"}>
          <button className="mt-6 text-lg md:text-xl rounded-full px-6 py-3 bg-white text-blue-800 font-semibold shadow-lg hover:bg-gray-200 transition">
            Check Your Eligibility
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
