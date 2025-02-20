import React from "react";
import MainLayout from "../../layouts/MainLayout";
import UserProfile from "../../components/Dashboard/UserProfile/UserProfile";
import QuickActions from "../../components/Dashboard/QuickAction/Quicktion";
import VisaStatus from "../../components/Dashboard/VisaStatus/VisaStatus";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 px-6 sm:px-12 md:px-16 lg:px-24 py-10">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

        {/* Grid Layout for Desktop, Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <UserProfile />
            <QuickActions />
          </div>

          {/* Right Section - Visa Application Status */}
          <div className="md:col-span-2">
            <VisaStatus />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
