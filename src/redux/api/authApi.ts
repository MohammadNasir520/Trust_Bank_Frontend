import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const AUTH_URL = '/auth'
const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation({
      query: (data) => ({
        url : `${AUTH_URL}/signin`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),
    signup: build.mutation({
      query: (data) => ({
        url : `${AUTH_URL}/signup`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),

    account: build.mutation({
      query: (data) => ({
        url : `/accounts`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.account]
    }),

  }),
  overrideExisting: false,
})

export const { useSigninMutation,useSignupMutation ,useAccountMutation} = authApi;