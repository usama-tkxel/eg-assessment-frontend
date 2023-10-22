import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from 'src/actions/auth'; // Import the action type as a string

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...initialState, ...action.payload };
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutUser: (state) => {
      state.user = { ...initialState };
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     // Add extra reducers here for other actions if needed
  //     .addCase(loginUser.pending.toString(), (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(loginUser.fulfilled.toString(), (state, action) => {
  //       state.loading = false;
  //       state.error = null;
  //     })
  //     .addCase(loginUser.rejected.toString(), (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // },
});

export const { setUser, setLoading, setError, logoutUser } = authSlice.actions;
export default authSlice.reducer;
