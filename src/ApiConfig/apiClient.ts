import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  withCredentials: true,
});

console.log("base url", import.meta.env.VITE_APP_API_BASE_URL);

apiClient.interceptors.response.use(
  (response) => {
    // Check if response is HTML (e.g., from Vite fallback)
    const contentType = response.headers["content-type"];
    if (contentType?.includes("text/html")) {
      throw new Error("Received HTML instead of API response");
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized");
    }
    return Promise.reject(error);
  }
);
export default apiClient;
