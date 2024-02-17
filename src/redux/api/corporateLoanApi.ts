import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const URL = "/corporateLoan";

export const corporateLoanApi: any = baseApi.injectEndpoints({
    endpoints: (build) => ({

        corporateLoans: build.query({
            query: () => {
                return {
                    url: URL,
                    method: "GET",
                };
            },
            providesTags: [tagTypes.corporate],
        }),

        corporateLoan: build.query({
            query: (id: string) => ({
                url: `${URL}/${id}`,
                method: "GET"

            }),
            providesTags: [tagTypes.corporate]
        }),

        addCorporateLoan: build.mutation({
            query: (data: any) => ({
                url: `${URL}`,
                method: "POST",
                data
            }),
            invalidatesTags: [tagTypes.corporate]
        }),
        updateCorporateLoan: build.mutation({
            query: ({ data, id }) => {
                return {
                    url: `${URL}/${id}`,
                    method: "PATCH",
                    data: data,
                };
            },
            invalidatesTags: [tagTypes.corporate],
        }),
        deleteCorporateLoan: build.mutation({
            query: (id: string) => ({
                url: `${URL}/${id}`,
                method: "DELETE"

            }),
            invalidatesTags: [tagTypes.corporate]
        }),

    }),
});

export const { useAddCorporateLoanMutation, useCorporateLoansQuery, useCorporateLoanQuery, useUpdateCorporateLoanMutation, useDeleteCorporateLoanMutation } = corporateLoanApi;
