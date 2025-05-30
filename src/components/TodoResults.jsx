import React from "react";
import { useContextTodo } from "../context/Todo.Context";

function TodoResults({ id, isChecked, task, index }) {
  let { deleteTodo, completeTodo, getUpdatedId, eId } = useContextTodo();

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700 shadow border border-gray-600">
      <span className="font-bold text-blue-400">{index + 1})</span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => completeTodo(id)}
        className="accent-blue-500 w-5 h-5"
      />
      <h2 className={`flex-1 ml-2 text-lg ${isChecked ? "line-through text-gray-400" : "text-gray-100"}`}>
        {task}
      </h2>
      <div className="flex gap-2">
        <button
          onClick={() => getUpdatedId(id)}
          className="px-3 py-1 rounded bg-yellow-600 hover:bg-yellow-700 text-white font-semibold transition"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(id)}
          disabled={eId === id}
          className={`px-3 py-1 rounded bg-red-700 hover:bg-red-800 text-white font-semibold transition ${eId === id ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoResults;
