import { products } from "@contants/product.constant";
import {
  IProductListingState,
  EProductCategoryEnum,
  EProductListingLayoutEnum,
  EProductSizeEnum,
} from "@modals/productListing/productListing.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IProductListingState = {
  productListing: products,
  layout: EProductListingLayoutEnum.TWO_COLUMN,
  categorySelected: EProductCategoryEnum.ALL_PRODUCTS,
  sizeSelected: null,
  colorSelected: null,
  priceSelected: null,
};

const productListingSlice = createSlice({
  name: "productListing",
  initialState: initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<EProductListingLayoutEnum.ONE_COLUMN | EProductListingLayoutEnum.TWO_COLUMN | EProductListingLayoutEnum.FIVE_COLUMN>) => {
      state.layout = action.payload;
    },
    setProductCategory: (state, action: PayloadAction<EProductCategoryEnum>) => {
      state.categorySelected = action.payload;
    },
    setSizeSelected: (state, action: PayloadAction<EProductSizeEnum>) => {
      state.sizeSelected = action.payload;
    },
    setColorSelected: (state, action: PayloadAction<string>) => {
      state.colorSelected = action.payload;
    },
    setPriceSelected: (state, action: PayloadAction<[number, number]>) => {
      state.priceSelected = action.payload;
    },
  },
});

export const { setLayout, setProductCategory, setSizeSelected, setColorSelected, setPriceSelected } = productListingSlice.actions;

export default productListingSlice.reducer;
