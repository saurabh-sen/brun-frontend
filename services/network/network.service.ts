import axios from "axios";
import { getAccessTokenFromStorage, getRefreshTokenFromStorage, saveAccessTokenToStorage } from "@services";

const network = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// Add a request interceptor
network.interceptors.request.use(
  (config) => {
    const token = getAccessTokenFromStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("request error", error);
    Promise.reject(error);
  }
);

// Add a response interceptor
network.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error?.response?.status === 401) {

      // try {
      //   const refreshToken = getRefreshTokenFromStorage();
      //   if(!refreshToken) {
      //     return Promise.reject(error);
      //   }
      //   const response = await axios.post("/user/refresh", { refresh_token: refreshToken });
      //   const { token } = response.data;
      //   console.log(response)
      //   saveAccessTokenToStorage(token);

      //   // Retry the original request with the new token
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   return axios(originalRequest);
      // } catch (error) {
      //   // Handle refresh token error or redirect to login
      //   console.log("refresh token error", error);
      // }
    }

    return Promise.reject(error);
  }
);

export default network;
