import { apiSlice } from '../../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userAuth: builder.mutation({
      query: (data) => ({
        url: '/user/register',
        method: 'POST',
        body: { ...data },
      }),
    }),
  }),
});

export const { useUserAuthMutation } = authApiSlice;
