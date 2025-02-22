import EligibilityForm from "../../components/EligibilityChecker/EligibilityForm";
import MainLayout from "../../layouts/MainLayout";

const VisaEligibility: React.FC = () => {
  return (
    <MainLayout>
      {/* Background with a dark futuristic gradient */}
      <div className="min-h-screen bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] flex items-center justify-center px-6 py-12 relative">
        {/* Soft Glowing Effects */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 opacity-30 blur-3xl"></div>

        {/* Eligibility Form Container */}
        <div className="relative w-full max-w-4xl p-8 bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20">
          <EligibilityForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default VisaEligibility;
