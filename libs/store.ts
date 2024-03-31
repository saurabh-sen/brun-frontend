import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productListingReducer from "./features/productListing/productListingSlice";
import productDetailedViewReducer from "./features/productDetailedView/ProductDetailedViewSlice";
import cartReducer from "./features/cart/cartSlice";
import homepageReducer from "./features/homepage/homepageSlice";
import tabsReducer from "./features/tabs/tabsSlice";
// import { requestResetPasswordApi } from "@services/resetPassword/resetPassword.service";
import { productDetailApi } from "@services/productDetailedView/productDetailedView.service";

export const makeStore = () => {
  return configureStore({
    reducer: {
      homepage: homepageReducer,
      auth: authReducer,
      productListing: productListingReducer,
      productDetailedView: productDetailedViewReducer,
      cart: cartReducer,
      tabs: tabsReducer,
      // [requestResetPasswordApi.reducerPath]: requestResetPasswordApi.reducer,
      [productDetailApi.reducerPath]: productDetailApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        // requestResetPasswordApi.middleware,
        productDetailApi.middleware
      ),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default makeStore;
