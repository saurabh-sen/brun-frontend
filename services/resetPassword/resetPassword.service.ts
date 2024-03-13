import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IResetRequest {
  email: string;
}

interface IResetResponse {
  statusCode: number;
  data: null;
  message: string;
  success: boolean;
}

const requestResetPasswordApi = createApi({
  reducerPath: "requestResetPasswordApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    requestResetPassword: builder.mutation<IResetResponse, IResetRequest>({
      query: (body) => ({
        url: "/user/forgot-password",
        method: "POST",
        body,
      }),
    }),
  }),
});

const { useRequestResetPasswordMutation } = requestResetPasswordApi;

export { useRequestResetPasswordMutation, requestResetPasswordApi };
