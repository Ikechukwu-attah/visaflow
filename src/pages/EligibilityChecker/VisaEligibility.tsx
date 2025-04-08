import EligibilityForm from "../../components/EligibilityChecker/EligibilityForm";
import MainLayout from "../../layouts/MainLayout";

const VisaEligibility: React.FC = () => {
  return (
    <MainLayout>
      {/* Clean White Background */}
      <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-12">
        <EligibilityForm />
      </div>
    </MainLayout>
  );
};

export default VisaEligibility;
