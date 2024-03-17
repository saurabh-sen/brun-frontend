import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./features/auth/authSlice"
import productListingReducer from "./features/productListing/productListingSlice"
import { signupApi } from '@services';
import { loginApi } from '@services/login/loginUtils';
import { requestResetPasswordApi } from '@services/resetPassword/resetPassword';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      [signupApi.reducerPath]: signupApi.reducer,
      [loginApi.reducerPath]: loginApi.reducer,
      [requestResetPasswordApi.reducerPath]: requestResetPasswordApi.reducer,
      productListing: productListingReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signupApi.middleware, loginApi.middleware, requestResetPasswordApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default makeStore