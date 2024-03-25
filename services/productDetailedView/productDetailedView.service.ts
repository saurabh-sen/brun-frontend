import { IProductDetailsResponse } from "@modals/productDetailedView/productDetailedView.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productDetailApi = createApi({
  reducerPath: "productDetailApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProductDetails: builder.query<IProductDetailsResponse, string>({
      query: (slug) => `/product/${slug}`
    }),
  }),
});

const { useGetProductDetailsQuery } = productDetailApi;

export { useGetProductDetailsQuery, productDetailApi };
