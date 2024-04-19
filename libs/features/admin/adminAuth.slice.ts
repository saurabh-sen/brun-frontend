import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAdminAuthInitialState {
  isLoading: boolean;
  isAuthenticated: boolean;
  isAuthError: boolean;
}

const initialState: IAdminAuthInitialState = {
  isLoading: false,
  isAuthenticated: false,
  isAuthError: false,
};

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
    setIsAuthError(state, action: PayloadAction<boolean>) {
      state.isAuthError = action.payload;
    },
  },
});

export const { setIsAuthenticated, setIsLoading } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
