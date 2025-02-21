import React from "react";

import MainLayout from "../../layouts/MainLayout";
import Sidebar from "../../components/Admin/Sidebar";
import { Outlet } from "react-router";

const AdminDashboard: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />{" "}
        </main>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
