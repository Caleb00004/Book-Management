import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['book'],
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
            transformResponse: res => (
                console.log(res)
            )
        }),
        getAuthor: builder.query({
            query: () => '/author',
            transformResponse: res => (
                console.log(res)
            )
        })
    })
})

export const {
    useGetBooksQuery,
    useGetAuthorQuery
} = apiSlice
