import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const ACCOUNT_URL = '/accounts'
const accountApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllAccounts: build.query({
            query: () => ({
                url: `${ACCOUNT_URL}`,
                method: "GET",
            }),
            providesTags: [tagTypes.account]
        }),

        currentAccounts: build.query({
            query: () => ({
                url: '/current-accounts',
                method: "GET",
            }),
            providesTags: [tagTypes.account]
        }),


        currentAccount: build.mutation({
            query: (data: any) => ({
              url: '/current-accounts',
              method: "POST",
              data
            }),
            invalidatesTags: [tagTypes.current]
          }),

          
        savingAccounts: build.query({
          query: () => ({
              url: '/saving-accounts',
              method: "GET",
          }),
          providesTags: [tagTypes.saving]
      }),
       
        savingAccount: build.mutation({
            query: (data: any) => ({
              url: '/saving-accounts',
              method: "POST",
              data
            }),
            invalidatesTags: [tagTypes.saving]
          }),

        studentAccounts: build.query({
            query: () => ({
                url: "/student-accounts",
                method: "GET",
            }),
            providesTags: [tagTypes.student]
        }),

        studentAccount: build.mutation({
            query: (data: any) => ({
              url: '/student-accounts',
              method: "POST",
              data
            }),
            invalidatesTags: [tagTypes.student]
          }),
          
        
        merchantAccounts: build.query({
            query: () => ({
                url: '/merchant-accounts',
                method: "GET",
            }),
            providesTags: [tagTypes.merchant]
        }),

        merchantAccount: build.mutation({
            query: (data: any) => ({
              url: '/merchant-accounts',
              method: "POST",
              data
            }),
            invalidatesTags: [tagTypes.merchant]
          }),

 
    }),
    overrideExisting: false,
})

export const { useGetAllAccountsQuery,useCurrentAccountMutation,useMerchantAccountMutation,useSavingAccountMutation,useStudentAccountMutation,useCurrentAccountsQuery,useStudentAccountsQuery,useSavingAccountsQuery,useMerchantAccountsQuery } = accountApi;