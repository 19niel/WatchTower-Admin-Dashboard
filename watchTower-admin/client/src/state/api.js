import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Citizen"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`, // Make sure this matches your API
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"],
        }),
        getAccount: build.query({
            query: (id) => `general/account/${id}`, // Make sure this matches your API
            providesTags: ["Citizen"],
        })
    }),
});


export const {
     useGetUserQuery, useGetProductsQuery, useGetAccountQuery
    } = api;
