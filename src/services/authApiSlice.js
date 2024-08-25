import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hiring.reachinbox.xyz/api/v1/auth/",
  }),
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: (redirectTo) => ({
        url: `google-login`,
        method: "GET",
        params: {
          redirect_to: redirectTo,
        },
      }),
      transformResponse: (response) => response.token,
    }),
  }),
});

export const { useGoogleLoginMutation } = authApiSlice;
