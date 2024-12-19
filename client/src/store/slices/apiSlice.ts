import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface RowData {
    id: number;
    name: string;
    price: number;
  }
  

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080'}),
    endpoints: (builder) => ({
        getRow: builder.query<RowData, number>({
            query: (id) => `/api/row/${id}`,
        })
    })
})

export const {
    useGetRowQuery
} = apiSlice;