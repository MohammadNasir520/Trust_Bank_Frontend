
import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'


const loanApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAgricultureLoan: build.query({
            query: (data) => ({
                url: `/agricultureLoan`,
                method: "GET",
            }),
            providesTags: [tagTypes.agricultureLoan]
        }),
        getPersonalLoan: build.query({
            query: (data) => ({
                url: `/personalLoan`,
                method: "GET",
            }),
            providesTags: [tagTypes.personalLoan]
        }),
        getCorporateLoan: build.query({
            query: (data) => ({
                url: `/corporateLoan`,
                method: "GET",
            }),
            providesTags: [tagTypes.corporateLoan]
        }),
        getEducationLoan: build.query({
            query: (data) => ({
                url: `/educationLoan`,
                method: "GET",
            }),
            providesTags: [tagTypes.educationLoan]
        }),
    }),
    overrideExisting: false,
})

export const {
    useGetAgricultureLoanQuery,
    useGetCorporateLoanQuery,
    useGetEducationLoanQuery,
    useGetPersonalLoanQuery } = loanApi;