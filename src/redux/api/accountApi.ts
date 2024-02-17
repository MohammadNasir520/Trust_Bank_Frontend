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
        currentAccount: build.mutation({
            query: (data: any) => ({
              url: '/current-accounts',
              method: "POST",
              data
            }),
            invalidatesTags: [tagTypes.current]
          }),
        savingAccount: build.mutation({
            query: (data: any) => ({
              url: '/current-accounts',
              method: "POST",
              data
            }),
            invalidatesTags: [tagTypes.saving]
          }),
        studentAccount: build.mutation({
            query: (data: any) => ({
              url: '/current-accounts',
              method: "POST",
              data
            }),
            invalidatesTags: [tagTypes.student]
          }),
        merchantAccount: build.mutation({
            query: (data: any) => ({
              url: '/current-accounts',
              method: "POST",
              data
            }),
            invalidatesTags: [tagTypes.merchant]
          }),

 
    }),
    overrideExisting: false,
})

export const { useGetAllAccountsQuery,useCurrentAccountMutation,useMerchantAccountMutation,useSavingAccountMutation,useStudentAccountMutation } = accountApi;