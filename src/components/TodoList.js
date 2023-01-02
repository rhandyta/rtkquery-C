import React from "react";
import FormAdd from "./FormAdd";

function TodoList() {
    return (
        <div>
            <FormAdd />
            <ul>
                <li>
                    <div>
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            className="checkbox"
                        />
                        Todos
                    </div>
                    <button type="button" className="delete">
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default TodoList;
