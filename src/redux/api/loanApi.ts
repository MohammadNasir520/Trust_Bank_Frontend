import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const loanApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAgricultureLoan: build.query({
      query: () => ({
        url: `/agricultureLoan`,
        method: "GET",
      }),
      providesTags: [tagTypes.agriculture],
    }),
    updateAgricultureLoan: build.mutation({
      query: ({ data, id }) => {
        console.log("data", data, id);
        return {
          url: `/agricultureLoan/${id}`,
          method: "PATCH",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.agriculture],
    }),
    getPersonalLoan: build.query({
      query: (data) => ({
        url: `/personalLoan`,
        method: "GET",
      }),
      // providesTags: [tagTypes.personalLoan]
    }),
    getCorporateLoan: build.query({
      query: (data) => ({
        url: `/corporateLoan`,
        method: "GET",
      }),
      // providesTags: [tagTypes.corporateLoan]
    }),
    getEducationLoan: build.query({
      query: (data) => ({
        url: `/educationLoan`,
        method: "GET",
      }),
      // providesTags: [tagTypes.educationLoan]
    }),
  }),
  // overrideExisting: false,
});

export const {
  useGetAgricultureLoanQuery,
  useGetCorporateLoanQuery,
  useGetEducationLoanQuery,
  useUpdateAgricultureLoanMutation,
  useGetPersonalLoanQuery,
} = loanApi;
