import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum ESortByPrice {
    "ASC" = "ASC",
    "DESC" = "DESC",
}

interface IAdminProductListingInitialState {
    searchQuery: string;
    isSearcheResultsLoading: boolean;
    searchResults: any[];
    isSearchError: boolean;
    isEditAllOpen: boolean;
    productFilters: string;
    colorFilters: string | null;
    sortByPrice: ESortByPrice | null;
    selectedProductIds: string[];
    products: any[];
}

const initialState: IAdminProductListingInitialState = {
    searchQuery: "",
    isSearcheResultsLoading: false,
    searchResults: [],
    isSearchError: false,
    isEditAllOpen: false,
    productFilters: "",
    colorFilters: null,
    sortByPrice: null,
    selectedProductIds: [],
    products: [],
};

const adminAuthSlice = createSlice({
  name: "adminProductListing",
  initialState: initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setIsSearcheResultsLoading(state, action: PayloadAction<boolean>) {
      state.isSearcheResultsLoading = action.payload;
    },
    setSearchResults(state, action: PayloadAction<any[]>) {
      state.searchResults = action.payload;
    },
    setIsSearchError(state, action: PayloadAction<boolean>) {
      state.isSearchError = action.payload;
    },
    setIsEditAllOpen(state, action: PayloadAction<boolean>) {
      state.isEditAllOpen = action.payload;
    },
    setProductFilters(state, action: PayloadAction<string>) {
      state.productFilters = action.payload;
    },
    setColorFilters(state, action: PayloadAction<string | null>) {
      state.colorFilters = action.payload;
    },
    setSortByPrice(state, action: PayloadAction<ESortByPrice | null>) {
      state.sortByPrice = action.payload;
    },
    setSelectedProductIds(state, action: PayloadAction<string[]>) {
      state.selectedProductIds = action.payload;
    },
    setProducts(state, action: PayloadAction<any[]>) {
      state.products = action.payload;
    },
  },
});

export const { setColorFilters, setIsEditAllOpen, setIsSearchError, setIsSearcheResultsLoading, setProductFilters, setProducts, setSearchQuery, setSearchResults, setSelectedProductIds, setSortByPrice } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
