import { products } from "@contants/productConstant";
import {
  IProductListingState,
  ProductAvailabilityEnum,
  ProductCategoryEnum,
  ProductListingLayoutEnum,
  ProductSizeEnum,
} from "@enumsAndTypes/productListing/productListing.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IProductListingState = {
  productListing: products,
  layout: ProductListingLayoutEnum.TWO_COLUMN,
  categorySelected: ProductCategoryEnum.ALL_PRODUCTS,
  inStockSelected: null,
  sizeSelected: null,
};

const productListingSlice = createSlice({
  name: "productListing",
  initialState: initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<ProductListingLayoutEnum.ONE_COLUMN | ProductListingLayoutEnum.TWO_COLUMN | ProductListingLayoutEnum.FIVE_COLUMN>) => {
      state.layout = action.payload;
    },
    setProductCategory: (state, action: PayloadAction<ProductCategoryEnum>) => {
      state.categorySelected = action.payload;
    },
    setInStock: (state, action: PayloadAction<ProductAvailabilityEnum>) => {
      state.inStockSelected = action.payload;
    },
    setSizeSelected: (state, action: PayloadAction<ProductSizeEnum>) => {
      state.sizeSelected = action.payload;
    },
  },
});

export const { setLayout, setProductCategory, setInStock, setSizeSelected } = productListingSlice.actions;

export default productListingSlice.reducer;
