import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isPasswordResetRequested: false,
  },
  reducers: {
    setIsPasswordResetRequested: (state, action: PayloadAction<boolean>) => {
      state.isPasswordResetRequested = action.payload;
    },
  },
});

export const { setIsPasswordResetRequested } = authSlice.actions;

export default authSlice.reducer;
