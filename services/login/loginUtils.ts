import { ILoginValues } from "@enumsAndTypes/login/login.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as Yup from "yup";

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email addresss")
    .required("Email is required"),
  password: Yup.string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    // different error messages for different requirements
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
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