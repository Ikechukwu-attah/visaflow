import { createContext, useContext, useState, useEffect } from "react";

import { useUserInfo } from "../../hooks/useUserInfo";

interface User {
  email: string;
  username: string;
  role: "user" | "admin";
}

interface AuthContextType {
  user: User | null;
  // login: (email: string, password: string) => Promise<void>;
  // logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be within AuthProvider");
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  const { userData, userInfo, error, isLoading: loading } = useUserInfo();

  console.log("userData", userData);
  console.log("user", user);

  useEffect(() => {
    userInfo();
    setUser(userData);
    if (userData) {
      console.log("loading....");
    }
  }, []);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  // const logout = () => {
  //   apiClient.post("/auth/logout");
  //   setUser(null);
  // };

  const isAuthenticated = !!user;
  return (
    <AuthContext.Provider value={{ user, setUser, loading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
