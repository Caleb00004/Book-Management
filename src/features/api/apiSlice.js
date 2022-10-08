import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['book'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
            transformResponse: res => {
                return res
            },
            providesTags: ['book']
        }),
        getAuthor: builder.query({
            query: () => '/author',
            transformResponse: res => (
                res
            )
        }),
        addBooks: builder.mutation({
            query: (book) => ({
                url: '/books',
                method: 'POST',
                body: book,
            }),
            invalidatesTags: ['book']
        })
    })
})

export const {
    useGetBooksQuery,
    useGetAuthorQuery,
    useAddBooksMutation
} = apiSlice
