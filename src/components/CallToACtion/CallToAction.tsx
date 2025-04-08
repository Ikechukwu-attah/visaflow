import LandingSection from "../../layouts/LandingSection";

const CallToAction = () => {
  return (
    <LandingSection
      id=""
      className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Start Your Visa Process Today!</h2>
        <p className="text-lg mt-4 opacity-90">
          Join thousands of successful applicants who have used our AI-driven
          immigration services.
        </p>

        {/* Trust Badge */}
        <div className="mt-6 text-sm font-medium bg-white text-blue-600 px-4 py-2 rounded-md inline-block">
          ✅ Trusted by 10,000+ users
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </LandingSection>
  );
};

export default CallToAction;
