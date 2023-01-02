import React, { useState } from "react";
import {
    useDestroyTodosMutation,
    useUpdateTodosMutation,
} from "../app/features/apiSlice";

function TodoItem({ todo }) {
    const [destroyTodos] = useDestroyTodosMutation();
    const [updateTodos] = useUpdateTodosMutation();
    const [isCompleted, setIsCompleted] = useState(todo.completed);

    const completedHandler = (todo) => {
        setIsCompleted(!isCompleted);
        updateTodos({ ...todo, completed: !todo.completed });
    };

    return (
        <li>
            <div style={{ textDecoration: isCompleted && "line-through" }}>
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={isCompleted}
                    onChange={() => completedHandler(todo)}
                />
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
