import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const Profile_URL = "/bankProfile";
const bankProfileApi = baseApi.injectEndpoints({
  //@ts-ignore
  endpoints: (build) => ({
    getAllBankProfiles: build.query({
      query: () => ({
        url: `${Profile_URL}/`,
        method: "GET",
      }),
      providesTags: [tagTypes.account],
    }),
  }),
});

export const { useGetAllBankProfilesQuery } = bankProfileApi;
