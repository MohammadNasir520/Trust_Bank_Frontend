import {  IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/userbalances/"


export const cardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({


    deposit: build.mutation({
        query: (data : any) => ({
          url : `${URL}/user-deposit`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.deposit]
      }),

    withdraw: build.mutation({
        query: (data : any) => ({
          url : `${URL}/user-withdraw`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.withdraw]
      }),

 

  }),
});

export const {useDepositMutation,useWithdrawMutation} = cardApi;
