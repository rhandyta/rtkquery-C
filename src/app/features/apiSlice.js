import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "todos",
            providesTags: ["Todos"],
        }),
        addTodos: builder.mutation({
            query: (body) => ({
                url: "todos",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Todos"],
        }),
        destroyTodos: builder.mutation({
            query: ({ id }) => ({
                url: `todos/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["Todos"],
        }),
    }),
});

export const {
    useGetTodosQuery,
    useAddTodosMutation,
    useDestroyTodosMutation,
} = apiSlice;

export default apiSlice;
