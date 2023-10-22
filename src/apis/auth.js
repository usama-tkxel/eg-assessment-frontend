// authService.js
import axios from 'axios';
import apiService from 'src/services/api-service';

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
export const loginApi = async ({ email, password } = {}) => {
  return axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });
};

export const resetPasswordApi = async (data = {}) => {
  const response = await axios.post(`${API_BASE_URL}/reset-password`, {
    ...data,
  });
  return response.data;
};

export const changePasswordApi = async (data = {}) => {
  const response = await apiService.post(`/change-password`, {
    ...data,
  });
  return response.data;
};

export const forgotPasswordApi = async (email = '') => {
  return axios.post(`${API_BASE_URL}/forget-password`, {
    email,
  });
};

export const logoutApi = async () => {
  const response = await apiService.post('/logout');
  return response;
};
