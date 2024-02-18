import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const URL = "/loanScheme";

export const loanSchemeApi: any = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllLoanScheme: build.query({
            query: () => {
                return {
                    url: URL,
                    method: "GET",
                };
            },
            providesTags: [tagTypes.loanScheme],
        }),

        getLoanSchemeById: build.query({
            query: (id: string) => ({
                url: `${URL}/${id}`,
                method: "GET"

            }),
            providesTags: [tagTypes.loanScheme]
        }),
        getLoanSchemeByCategory: build.query({
            query: (category: string) => ({
                url: `${URL}/scheme_category/${category}`,
                method: "GET"
            }),
            providesTags: [tagTypes.loanScheme]
        }),

        createLoanScheme: build.mutation({
            query: (data: any) => ({
                url: `${URL}`,
                method: "POST",
                data
            }),
            invalidatesTags: [tagTypes.loanScheme]
        }),
        updateLoanScheme: build.mutation({
            query: ({ data, id }) => {
                return {
                    url: `${URL}/${id}`,
                    method: "PATCH",
                    data: data,
                };
            },
            invalidatesTags: [tagTypes.loanScheme],
        }),
        deleteLoanScheme: build.mutation({
            query: (id: string) => ({
                url: `${URL}/${id}`,
                method: "DELETE"

            }),
            invalidatesTags: [tagTypes.loanScheme]
        }),

    }),
});

export const {
    useGetAllLoanSchemeQuery,
    useGetLoanSchemeByCategoryQuery,
    useCreateLoanSchemeMutation
} = loanSchemeApi;
