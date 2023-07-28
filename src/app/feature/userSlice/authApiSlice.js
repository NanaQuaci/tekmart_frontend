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
    loginAuth: builder.mutation({
      query: (data) => ({
        url: '/user/login',
        method: 'POST',
        body: { ...data },  //for destructuring
      }),
    }),
    vendorAuth: builder.mutation({
      query: (data) => ({
        url: '/vendor/register',
        method: 'POST',
        body: { ...data },
      }),
    }),


  }),
});


export const { useUserAuthMutation, useLoginAuthMutation, useVendorAuthMutation } = authApiSlice;
