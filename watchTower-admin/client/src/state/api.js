import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers", "Citizens"],
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
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["Customers"]
        }),
        
        getTransactions: build.query ({
            query: ({page, pageSize, sort, search  }) => ({
                url: "client/transactions",
                method: "GET",
                params: {page, pageSize, sort, search},
            }),

            providesTags: ["Transactions"]
        }),
        
        
        ////////// WatchTower ///////
        getCitizens: build.query({
            query: () => "client/citizens",
            providesTags: ["Citizens"]
        }),
        getReports: build.query ({
            query: ({page, pageSize, sort, search  }) => ({
                url: "client/reports",
                method: "GET",
                params: {page, pageSize, sort, search},
            }),

            providesTags: ["Reports"]
        }),
    }),
});


export const {
     useGetUserQuery, 
     useGetProductsQuery, 
     useGetAccountQuery, 
     useGetCustomersQuery, 
     useGetTransactionsQuery,



     //// WatchTower
     useGetCitizensQuery, useGetReportsQuery
    } = api;
