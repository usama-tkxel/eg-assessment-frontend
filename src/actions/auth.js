/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { loginApi, logoutApi, signUpApi } from 'src/apis/auth';
import { LOGIN } from 'src/constants/routes';
import { authParser } from 'src/parsers/auth';
import { setUser, logoutUser } from 'src/redux-slices/auth';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    const response = await loginApi({ email, password });
    const parsedAuthData = authParser(response);
    thunkAPI.dispatch(setUser(parsedAuthData));
    return parsedAuthData;
  },
);

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (userData = {}, thunkAPI) => {
    const response = await signUpApi(userData);
    const parsedAuthData = authParser(response);
    thunkAPI.dispatch(setUser(parsedAuthData));
    return parsedAuthData;
  },
);

export const logout = createAsyncThunk('', async (data, thunkAPI) => {
  // const response = await logoutApi(data);
  thunkAPI.dispatch(logoutUser());
  localStorage.clear();
  return response;
});
