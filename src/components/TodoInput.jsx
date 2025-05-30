import React from "react";
import { useContextTodo } from "../context/Todo.Context";

function TodoInput() {
  let { handleTextChange, createTodo, inputText, toggleEdit, updateTodo } = useContextTodo();

  return (
    <form
      onSubmit={toggleEdit ? updateTodo : createTodo}
      className="flex gap-2 mb-6"
    >
      <input
        value={inputText}
        type="text"
        placeholder="Add todo"
        className="border border-gray-600 rounded-lg px-3 py-2 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        onChange={(e) => handleTextChange(e.target.value)}
      />
      {toggleEdit ? (
        <button
          type="submit"
          className="rounded-lg bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 font-semibold transition"
        >
          Edit
        </button>
      ) : (
        <button
          type="submit"
          className="rounded-lg bg-green-700 hover:bg-green-800 text-white px-4 py-2 font-semibold transition"
        >
          Submit
        </button>
      )}
    </form>
  );
}

export default TodoInput;
