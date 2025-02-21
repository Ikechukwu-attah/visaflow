import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import UserSidebar from "../../components/Dashboard/UserSidebar/UserSidebar";

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <UserSidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
