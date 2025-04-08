import { useAuth } from "../context/Auth/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const { isAuthenticated, loading, user } = useAuth();
  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AdminRoute;
