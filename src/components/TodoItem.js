import React from "react";
import { useDestroyTodosMutation } from "../app/features/apiSlice";

function TodoItem({ todo }) {
    const [destroyTodos] = useDestroyTodosMutation();
    return (
        <li>
            <div>
                <input type="checkbox" className="checkbox" />
                {todo.title}
            </div>
            <button
                type="button"
                className="delete"
                onClick={() => destroyTodos({ id: todo.id })}
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
