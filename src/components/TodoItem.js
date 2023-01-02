import React from "react";

function TodoItem({ todo, isLoading, isSuccess, isError }) {
    return (
        <li>
            <div>
                <input type="checkbox" name="" id="" className="checkbox" />
                Todos
            </div>
            <button type="button" className="delete">
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
