import {  IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/currency-exchanges"

export const cardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({


    exchangeCurrency: build.mutation({
        query: (data : any) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.currency]
      }),

 

  }),
});

export const {useExchangeCurrencyMutation} = cardApi;
