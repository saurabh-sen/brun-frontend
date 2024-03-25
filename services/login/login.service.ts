import { ILoginValues } from "@modals/login/login.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as Yup from "yup";

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required"),
  password: Yup.string()
    .required("Please enter a password")
});

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    loginMe: builder.mutation<ILoginValues, ILoginValues>({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

const { useLoginMeMutation } = loginApi;

export { useLoginMeMutation, loginApi };