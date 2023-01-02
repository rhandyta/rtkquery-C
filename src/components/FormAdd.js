import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useAddTodosMutation } from "../app/features/apiSlice";

function FormAdd() {
    const [inputTodo, setInputTodo] = useState("");
    const [todos] = useAddTodosMutation();

    const submitHandler = (e) => {
        e.preventDefault();
        todos({ id: nanoid(), title: inputTodo, completed: false });
        setInputTodo("");
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="text"
                    value={inputTodo}
                    onChange={(e) => setInputTodo(e.target.value)}
                />
                <button type="submit" className="add">
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default FormAdd;
