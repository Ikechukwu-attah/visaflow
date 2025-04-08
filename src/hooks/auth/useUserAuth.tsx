import { useState } from "react";
import apiClient from "../../ApiConfig/apiClient";

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

type RegisterResponse = {
  message: string;
};

type AuthResponse = LoginResponse | RegisterResponse;
export const useUserAuth = () => {
  const [userData, setUserData] = useState<AuthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const userAuth = async (path: string, data: object) => {
    setIsLoading(true);
    try {
      const response = await apiClient.post(`/auth/${path}`, data);
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { userAuth, userData, isLoading, error };
};
