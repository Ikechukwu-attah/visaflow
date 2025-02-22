import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#1E3A8A] to-[#6366F1] w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-16">
      <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
        Simplify Your Immigration Journey with AI
      </h1>

      <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl">
        AI-powered visa guidance, document verification, and expert
        consultations.
      </p>

      <button className="mt-6 text-lg md:text-xl rounded-full px-6 py-3 bg-white text-blue-800 font-semibold shadow-lg hover:bg-gray-200 transition">
        <Link to={"/eligibility-check"}>Check Your Eligibility</Link>
      </button>
    </div>
  );
};

export default HeroSection;
