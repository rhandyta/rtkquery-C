import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "todos",
        }),
    }),
});

export const { useGetTodosQuery } = apiSlice;

export default apiSlice;
