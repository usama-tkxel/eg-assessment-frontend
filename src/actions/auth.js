/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import {
  changePasswordApi,
  forgotPasswordApi,
  loginApi,
  logoutApi,
  resetPasswordApi,
} from 'src/apis/auth';
import { LOGIN } from 'src/constants/routes';
import { authParser } from 'src/parsers/auth';
import { setUser, logoutUser } from 'src/redux-slices/auth';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    const response = await loginApi({ email, password });
    const parsedAuthData = authParser(response?.data);
    thunkAPI.dispatch(setUser(parsedAuthData));
    return parsedAuthData;
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data, thunkAPI) => {
    const response = await resetPasswordApi(data);
    // thunkAPI.dispatch(setUser(response.user));
    console.log(response);
    return response;
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (data, thunkAPI) => {
    const response = await changePasswordApi(data);
    // thunkAPI.dispatch(setUser(response.user));
    console.log(response);
    return response;
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgetPassword',
  async (email, thunkAPI) => {
    const response = await forgotPasswordApi(email);
    // thunkAPI.dispatch(setUser(response.user));
    return response;
  }
);

export const logout = createAsyncThunk('', async (data, thunkAPI) => {
  const response = await logoutApi(data);
  thunkAPI.dispatch(logoutUser());
  localStorage.clear();
  return response;
});
