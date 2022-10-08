import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['book'],
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
            transformResponse: res => {
                return res
            }
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
            })
        })
    })
})

export const {
    useGetBooksQuery,
    useGetAuthorQuery
} = apiSlice
