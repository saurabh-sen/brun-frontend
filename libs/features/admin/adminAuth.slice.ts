import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAdminAuthInitialState {
  isLoading: boolean;
  isAuthenticated: boolean;
}

const initialState: IAdminAuthInitialState = {
  isLoading: false,
  isAuthenticated: false,
}

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated, setIsLoading } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
