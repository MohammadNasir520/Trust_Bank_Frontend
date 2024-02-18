import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const URL = "/personalLoan";

export const personalLoanApi: any = baseApi.injectEndpoints({
    endpoints: (build) => ({

        personalLoans: build.query({
            query: () => {
                return {
                    url: URL,
                    method: "GET",
                };
            },
            providesTags: [tagTypes.personal],
        }),

        personalLoan: build.query({
            query: (id: string) => ({
                url: `${URL}/${id}`,
                method: "GET"

            }),
            providesTags: [tagTypes.personal]
        }),

        addPersonalLoan: build.mutation({
            query: (data: any) => ({
                url: `${URL}`,
                method: "POST",
                data
            }),
            invalidatesTags: [tagTypes.personal]
        }),
        updatePersonalLoan: build.mutation({
            query: ({ data, id }) => {
                return {
                    url: `${URL}/${id}`,
                    method: "PATCH",
                    data: data,
                };
            },
            invalidatesTags: [tagTypes.personal],
        }),
        deletePersonalLoan: build.mutation({
            query: (id: string) => ({
                url: `${URL}/${id}`,
                method: "DELETE"

            }),
            invalidatesTags: [tagTypes.personal]
        }),

    }),
});

export const { useAddPersonalLoanMutation, usePersonalLoansQuery, usePersonalLoanQuery, useUpdatePersonalLoanMutation, useDeletePersonalLoanMutation } = personalLoanApi;
