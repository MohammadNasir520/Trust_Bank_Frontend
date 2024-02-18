import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const USER_URL = "/users";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({

    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: USER_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),

    loggedUser: build.query({
      query: () => {
        return {
          url: "/profile",
          method: "GET"
        };
      },
      providesTags: [tagTypes.user],
    }),

    userById: build.query({
      query: (id: string) => ({
        url: `${USER_URL}/${id}`,
        method: "GET"

      }),
      providesTags: [tagTypes.user]
    }),

    updateUser: build.mutation({
      query: (data: any) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body
      }),
      invalidatesTags: [tagTypes.user]
    }),


    deleteUser: build.mutation({
      query: (id: string) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE"

      }),
      invalidatesTags: [tagTypes.user]
    }),

  }),
});

export const { useUsersQuery, useUserByIdQuery, useUpdateUserMutation, useDeleteUserMutation, useLoggedUserQuery } = adminApi;
