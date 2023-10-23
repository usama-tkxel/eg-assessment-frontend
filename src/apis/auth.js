// authService.js
import axios from 'axios';
import apiService from 'src/services/api-service';

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const BASE_AUTH_URL = `${API_BASE_URL}/auth`;

export const loginApi = async ({ email, password } = {}) => {
  return axios
    .post(`${BASE_AUTH_URL}/signin`, {
      email,
      password,
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const signUpApi = async (userData = {}) => {
  return axios
    .post(`${BASE_AUTH_URL}/signup`, {
      ...userData,
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const logoutApi = async () => {
  const response = await apiService.post('/logout');
  return response;
};
