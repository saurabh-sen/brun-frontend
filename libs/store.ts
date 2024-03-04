import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth/authSlice"
import { signupApi } from '@services'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      [signupApi.reducerPath]: signupApi.reducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default makeStore