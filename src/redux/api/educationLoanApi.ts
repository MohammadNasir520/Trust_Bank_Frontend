import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const URL = "/educationLoan";

export const educationLoanApi: any = baseApi.injectEndpoints({
    endpoints: (build) => ({

        educationLoans: build.query({
            query: () => {
                return {
                    url: URL,
                    method: "GET",
                };
            },
            providesTags: [tagTypes.education],
        }),

        educationLoan: build.query({
            query: (id: string) => ({
                url: `${URL}/${id}`,
                method: "GET"

            }),
            providesTags: [tagTypes.education]
        }),

        addEducationLoan: build.mutation({
            query: (data: any) => ({
                url: `${URL}`,
                method: "POST",
                data
            }),
            invalidatesTags: [tagTypes.education]
        }),
        updateEducationLoan: build.mutation({
            query: ({ data, id }) => {
                return {
                    url: `${URL}/${id}`,
                    method: "PATCH",
                    data: data,
                };
            },
            invalidatesTags: [tagTypes.education],
        }),
        deleteEducationLoan: build.mutation({
            query: (id: string) => ({
                url: `${URL}/${id}`,
                method: "DELETE"

            }),
            invalidatesTags: [tagTypes.education]
        }),

    }),
});

export const { useAddEducationLoanMutation, useEducationLoansQuery, useEducationLoanQuery, useUpdateEducationLoanMutation, useDeleteEducationLoanMutation } = educationLoanApi;
