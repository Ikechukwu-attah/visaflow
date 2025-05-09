import { useState } from "react";
import apiClient from "../ApiConfig/apiClient";

export const useUserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const userInfo = async () => {
    console.log("error", error);
    setIsLoading(true);
    try {
      console.log("hello it me kudos");
      const res = await apiClient.get("/auth/user");
      console.log("user response", res.data);
      setUserData(res.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.log(error);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { userData, error, isLoading, userInfo };
};
