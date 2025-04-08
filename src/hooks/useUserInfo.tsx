import { useState } from "react";
import apiClient from "../ApiConfig/apiClient";

export const useUserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const userInfo = async () => {
    setIsLoading(true);
    try {
      const res = await apiClient.get("/auth/user");
      setUserData(res.data);
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
  return { userData, error, isLoading, userInfo };
};
