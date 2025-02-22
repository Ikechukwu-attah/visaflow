import Home from "../pages/Home";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/SignUp/Signup";
import ForgotPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import VisaApplication from "../components/Dashboard/VisaApplication/VisaApplication";

import Payment from "../pages/Payment";
import AdminDashboard from "../pages/Admin/AdminDashboard";

import UserList from "../components/Admin/UserList";
import Applications from "../components/Admin/Applications";
import Analytics from "../components/Admin/Analytics";
import UserProfile from "../components/Dashboard/UserProfile/UserProfile";
import SecuritySettings from "../components/Dashboard/Security/SecuritySettings";
import VisaStatus from "../components/Dashboard/VisaStatus/VisaStatus";
import ConsultationBooking from "../components/Dashboard/Consultation/ConsultationBooking";
import DocumentUpload from "../components/Dashboard/DocumentUpload/DocumentUpload";
import Payments from "../components/Admin/Payment";
import VisaEligibility from "../pages/EligibilityChecker/VisaEligibility";

type RouteProps = {
  id: number;
  index?: boolean;
  path?: string; // Optional because index routes won't have a path
  element: React.ReactNode;
  children?: RouteProps[]; // ✅ Fix: Allow nesting of routes
};

export const protectedRoute: RouteProps[] = [
  { id: 1, path: "/", element: <Home /> },
];

export const publicRoute: RouteProps[] = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/login", element: <Login /> },
  { id: 3, path: "/signup", element: <Signup /> },
  { id: 4, path: "/forgot-password", element: <ForgotPassword /> },
  { id: 5, path: "/dashboard", element: <Dashboard /> },
  { id: 6, path: "/visa-application", element: <VisaApplication /> },
  { id: 7, path: "/document-upload", element: <DocumentUpload /> },
  { id: 8, path: "/book-consultation", element: <ConsultationBooking /> },
  { id: 9, path: "/payment", element: <Payment /> },
  { id: 16, path: "/eligibility-check", element: <VisaEligibility /> },
  {
    id: 10,
    path: "/admin",
    element: <AdminDashboard />, // Parent route
    children: [
      { id: 11, index: true, element: <UserList /> }, // Default route
      { id: 12, path: "users", element: <UserList /> },
      { id: 13, path: "applications", element: <Applications /> },
      { id: 14, path: "analytics", element: <Analytics /> },
      { id: 15, path: "payment", element: <Payments /> },
    ],
  },
];

export const userRoutes: RouteProps = {
  id: 20,
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    { id: 21, index: true, element: <UserProfile /> }, // Default page
    { id: 22, path: "profile", element: <UserProfile /> },
    { id: 23, path: "security", element: <SecuritySettings /> },
    { id: 24, path: "visa-status", element: <VisaStatus /> },
    { id: 25, path: "visa-application", element: <VisaApplication /> },
    { id: 26, path: "document-upload", element: <DocumentUpload /> },
    { id: 27, path: "book-consultation", element: <ConsultationBooking /> },
  ],
};

export const adminRoute: RouteProps = {
  id: 10,
  path: "/admin-dashboard",
  element: <AdminDashboard />,
  children: [
    { id: 11, index: true, element: <UserList /> },
    { id: 12, path: "users", element: <UserList /> },
    { id: 13, path: "applications", element: <Applications /> },
    { id: 14, path: "analytics", element: <Analytics /> },
  ],
};
