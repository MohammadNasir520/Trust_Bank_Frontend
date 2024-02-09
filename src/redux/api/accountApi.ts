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


    }),
    overrideExisting: false,
})

export const { useGetAllAccountsQuery } = accountApi;