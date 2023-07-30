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

    vendorLoginAuth: builder.mutation({
      query: (data) => ({
        url: '/vendor/login',
        method: 'POST',
        body: { ...data },
      }),
    }),

    forgotPasswordAuth: builder.mutation({
      query: (data) => ({
        url: 'vendor/forgot-password-token',
        method: 'POST',
        body: { ...data },
      }),
    }),

    resetPasswordAuth: builder.mutation({
      query: (data) => ({
        url: ''
      })
    })

  }),
});


export const { useUserAuthMutation, useLoginAuthMutation, useVendorAuthMutation, useVendorLoginAuthMutation, useForgotPasswordAuthMutation } = authApiSlice;
