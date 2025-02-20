import Home from "../pages/Home";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/SignUp/Signup";
import ForgotPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import VisaApplication from "../pages/VisaApplication";
import DocumentUpload from "../pages/DocumentUpload";

type RouteProps = {
  id: number;
  path: string;
  element: React.ReactNode;
};

export const protectedRoute: RouteProps[] = [
  { id: 1, path: "/", element: <Home /> },
];

export const publicRoute: RouteProps[] = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/login", element: <Login /> },
  { id: 3, path: "/signup", element: <Signup /> },
  { id: 4, path: "/forgot-password", element: <ForgotPassword /> },
  { id: 4, path: "/dashboard", element: <Dashboard /> },
  { id: 5, path: "/visa-application", element: <VisaApplication /> },
  { id: 5, path: "/document-upload", element: <DocumentUpload /> },
];
