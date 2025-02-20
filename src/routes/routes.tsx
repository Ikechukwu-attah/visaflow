import Home from "../pages/Home";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/SignUp/Signup";

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
];
