import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IHomepageState {
    isSearchBarOpen: boolean;
    isHomepageRoute: boolean;
    isSidebarOpen: boolean;
}

const initialState: IHomepageState = {
    isHomepageRoute: true,
    isSearchBarOpen: false,
    isSidebarOpen: false,
};

const homepageSlice = createSlice({
  name: "homepageSlice",
  initialState: initialState,
  reducers: {
    setIsSearchBarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchBarOpen = action.payload;
    },
    setIsHomepageRoute: (state, action: PayloadAction<boolean>) => {
      state.isHomepageRoute = action.payload;
    },
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setIsHomepageRoute, setIsSearchBarOpen, setIsSidebarOpen } = homepageSlice.actions;

export default homepageSlice.reducer;
