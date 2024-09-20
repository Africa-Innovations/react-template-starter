import axios from "axios";
import { getCookie } from "./cookie";
import { VITE_API_BASE_URL } from "./utils";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
  // timeout: 10000, // Set a request timeout (optional)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { access } = getCookie();
    console.log(access, "this is the access");
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error, "from the axios instance");
    // Handle errors globally (like refreshing tokens, logging out, etc.)
    // if (error.response && error.response.status === 401) {
    //   // Handle unauthorized access (e.g., redirect to login)
    //   console.error("Unauthorized, redirecting to login...");
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
