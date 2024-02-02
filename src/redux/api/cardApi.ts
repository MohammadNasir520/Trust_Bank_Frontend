import {  IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/cards";

export const cardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    cards: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
      providesTags: [tagTypes.card],
    }),

    card: build.query({
      query: (id : string) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.card]
    }), 

    addCard: build.mutation({
        query: (data : any) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.card]
      }),

    updateCard: build.mutation({
      query: (data : any) => ({
        url : `${URL}/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.card]
    }),

    
    deleteCard: build.mutation({
      query: (id : string) => ({
        url : `${URL}/${id}`,
        method: "DELETE"
       
      }),
      invalidatesTags:[tagTypes.card]
    }),

  }),
});

export const {useCardsQuery,useCardQuery,useAddCardMutation,useUpdateCardMutation,useDeleteCardMutation } = cardApi;
