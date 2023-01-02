import React from "react";

function TodoItem({ todo }) {
    return (
        <li>
            <div>
                <input type="checkbox" className="checkbox" />
                {todo}
            </div>
            <button type="button" className="delete">
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
