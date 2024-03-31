import { loginValidationSchema, loginApi } from "./login/login.service";
import { singupValidationSchema, signupApi } from "./signup/signup.service";
import { useGetProductDetailsQuery } from "./productDetailedView/productDetailedView.service";
import {
  getAccessTokenFromStorage,
  getRefreshTokenFromStorage,
  saveAccessTokenToStorage,
  saveRefreshTokenToStorage,
  clearTokensFromStorage,
} from "./tokens/tokens.service";

import {
  deliveryInitialValues,
  deliveryValidationSchema,
  handleDeliverySubmit,
} from "./deliveryAddress/deliveryAddress.service";

import useMakeUnauthenticatedAPICall from './customHooks/useMakeUnauthenticatedAPICall'

export {
  loginValidationSchema,
  singupValidationSchema,
  signupApi,
  useGetProductDetailsQuery,
  deliveryInitialValues,
  deliveryValidationSchema,
  handleDeliverySubmit,
  getAccessTokenFromStorage,
  getRefreshTokenFromStorage,
  saveAccessTokenToStorage,
  saveRefreshTokenToStorage,
  clearTokensFromStorage,
  loginApi,
  useMakeUnauthenticatedAPICall
};
