import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const URL = "/agricultureloan";

export const agricultureLoanApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({

    agricultureLoans: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.agriculture],
    }),

    agricultureLoan: build.query({
      query: (id: string) => ({
        url: `${URL}/${id}`,
        method: "GET"

      }),
      providesTags: [tagTypes.agriculture]
    }),

    addAgricultureLoan: build.mutation({
      query: (data: any) => ({
        url: `${URL}`,
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.agriculture]
    }),
    updateAgricultureLoan: build.mutation({
      query: ({ data, id }) => {
        return {
          url: `${URL}/${id}`,
          method: "PATCH",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.agriculture],
    }),
    deleteAgricultureLoan: build.mutation({
      query: (id: string) => ({
        url: `${URL}/${id}`,
        method: "DELETE"

      }),
      invalidatesTags: [tagTypes.agriculture]
    }),

  }),
});

export const { useAddAgricultureLoanMutation, useAgricultureLoansQuery, useAgricultureLoanQuery, useUpdateAgricultureLoanMutation, useDeleteAgricultureLoanMutation } = agricultureLoanApi;
