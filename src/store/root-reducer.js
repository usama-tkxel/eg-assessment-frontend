import { combineReducers } from '@reduxjs/toolkit';
import authSlice from 'src/redux-slices/auth';

export default combineReducers({
  auth: authSlice,
});
