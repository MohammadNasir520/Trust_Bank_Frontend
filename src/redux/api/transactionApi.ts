import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const URL = "/transactions/deposit_withdraw";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getAllDeposit: build.query({
            query: () => {
                return {
                    url: `${URL}/deposit`,
                    method: "GET",
                };
            },
            providesTags: [tagTypes.deposit],
        }),
        getAllWithdraw: build.query({
            query: () => {
                return {
                    url: `${URL}/withdraw`,
                    method: "GET",
                };
            },
            providesTags: [tagTypes.withdraw],
        }),
    }),
});

export const { useGetAllDepositQuery, useGetAllWithdrawQuery } = transactionApi;