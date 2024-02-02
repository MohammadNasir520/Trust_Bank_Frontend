import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';


const ACCOUNT_URL = '/accounts'
const accountApi = baseApi.injectEndpoints({
    //@ts-ignore
    endpoints: (build) => ({
        getAllAccounts: build.query({
            query: () => ({
                url: `${ACCOUNT_URL}/`,
                method: "GET",
            }),
            providesTags: [tagTypes.accounts]
        }),
    }),
    // overrideExisting: false,
})

export const { useGetAllAccountsQuery } = accountApi;