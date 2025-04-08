import { useState } from "react";
import apiClient from "../ApiConfig/apiClient";

export const useGetRequiredDoc = () => {
  const [requiredData, setRequiredData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRequiredDoc = async (visaType: string | null) => {
    console.log("error", error);
    setIsLoading(true);
    try {
      const res = await apiClient.get(
        `/document-requirements/list?visaType=${visaType}`
      );

      setRequiredData(res.data);
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
  return { requiredData, error, isLoading, getRequiredDoc };
};
