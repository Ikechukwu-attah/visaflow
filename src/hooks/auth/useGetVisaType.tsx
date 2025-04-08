import { useState } from "react";
import apiClient from "../../ApiConfig/apiClient";

type VisaTypeResponse = {
  bestVisaType: string;
  reasoning: string;
  confidence: string;
};
export const useGetVisaType = () => {
  const [visaType, setVisaType] = useState<VisaTypeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getVisaType = async (userResponse) => {
    console.log("error", error);
    setIsLoading(true);
    try {
      console.log("hello it me kudos");
      const res = await apiClient.post(
        "/visa-recommendation/determine",
        userResponse
      );
      console.log("user response", res.data);
      setVisaType(res.data);
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
  return { visaType, error, isLoading, getVisaType };
};
