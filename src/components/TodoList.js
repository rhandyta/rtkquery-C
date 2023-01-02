import React from "react";
import { useGetTodosQuery } from "../app/features/apiSlice";
import FormAdd from "./FormAdd";
import TodoItem from "./TodoItem";

function TodoList() {
    const { isLoading, isSuccess, isError, data } = useGetTodosQuery();
    return (
        <div>
            <FormAdd />
            <ul>
                {isLoading && <p>Loading...</p>}
                {isSuccess &&
                    data.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
                {isError && <p>Error</p>}
            </ul>
        </div>
    );
}

export default TodoList;
