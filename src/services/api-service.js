import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

// Create an Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${authToken}`,
    'Access-Control-Allow-Origin': '*',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  },
);

export default axiosInstance;
