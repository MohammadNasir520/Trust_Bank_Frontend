import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PROVIDER_URL = "/providers";
const providerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    provider: build.mutation({
      query: (data) => ({
        url: `${PROVIDER_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.provider],
    }),

    getProviders: build.query({
      query: () => ({
        url: `${PROVIDER_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.provider],
    }),
  }),
});

export const { useProviderMutation, useGetProvidersQuery } = providerApi;
