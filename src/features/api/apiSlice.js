import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const globalState = {
    bookData: [],
    AuthorsData: []
}

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['book'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/books',
            transformResponse: res => {
                globalState.bookData = res
                return res
            },
            providesTags: ['book']
        }),
        getAuthor: builder.query({
            query: () => '/author',
            transformResponse: res => (
                globalState.AuthorsData = res,
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
        }),
        deleteBook: builder.mutation({
            query: (book) => {
                console.log(book)
                const {id} = book
                return {
                    url: `/books/${id}`,
                    method: 'DELETE',
                    body: id,
                }
            },
            invalidatesTags: ['book']
        }),
        editBook: builder.mutation({
            query: (newBook) => {
                console.log(newBook)
                return {
                    url: `/books/${newBook.id}`,
                    method: 'PATCH',
                    body: newBook
                }
            },
            invalidatesTags: ['book']
        })
    })
})

export const {
    useGetBooksQuery,
    useGetAuthorQuery,
    useAddBooksMutation,
    useDeleteBookMutation,
    useEditBookMutation
} = apiSlice
