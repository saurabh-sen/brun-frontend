import {
  EProductHomepageFlags,
  IAdminAddProductInitialState,
  IProductCategory,
  IProductSubCategory,
  ISizeSpecsAction,
} from "@modals/admin";
import { EProductSizeEnum } from "@modals/productListing/productListing.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IAdminAddProductInitialState = {
  categories: [],
  subCategories: [],
  selectedCategory: "",
  selectedSubCategory: "",
  sizes: [],
  completeTheLookProductId: "",
  homepageProduct: [],
};

const adminAddProductSlice = createSlice({
  name: "adminAddProduct",
  initialState: initialState,
  reducers: {
    setCategories(state, action: PayloadAction<IProductCategory[]>) {
      state.categories = action.payload;
    },
    setSubCategories(state, action: PayloadAction<IProductSubCategory[]>) {
      state.subCategories = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setSelectedSubCategory(state, action: PayloadAction<string>) {
      state.selectedSubCategory = action.payload;
    },
    setSelectedSizes(state, action: PayloadAction<EProductSizeEnum>) {
      // if already exists, remove it
      const index = state.sizes.findIndex(
        (size) => size.size === action.payload
      );
      if (index !== -1) {
        state.sizes.splice(index, 1);
      } else {
        state.sizes.push({
          size: action.payload,
          quantity: "",
          weight: "",
          length: "",
          breadth: "",
          height: "",
          sku: "",
        });
      }
    },
    setSizeSpecs(state, action: PayloadAction<ISizeSpecsAction>) {
      const { size, key, value } = action.payload;
      const index = state.sizes.findIndex((s) => s.size === size);
      state.sizes[index][key] = value;
    },
    setCompleteTheLookProductId(state, action: PayloadAction<string>) {
      state.completeTheLookProductId = action.payload;
    },
    setHomepageProduct(state, action: PayloadAction<EProductHomepageFlags>) {
      const index = state.homepageProduct.findIndex(
        (flag) => flag === action.payload
      );
      if (index !== -1) {
        state.homepageProduct.splice(index, 1);
      } else {
        state.homepageProduct.push(action.payload);
      }
    },    
  },
});

export const { setCategories, setSubCategories, setSelectedCategory, setCompleteTheLookProductId, setHomepageProduct, setSelectedSizes, setSelectedSubCategory, setSizeSpecs } = adminAddProductSlice.actions;

export default adminAddProductSlice.reducer;
