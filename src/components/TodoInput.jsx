import React from "react";
import { useContextTodo } from "../context/Todo.Context";

function TodoInput() {
  let { handleTextChange, createTodo,inputText,toggleEdit,updateTodo } = useContextTodo();

  // console.log(toggleEdit)

  return (
    <form onSubmit={toggleEdit? updateTodo:createTodo}>
      <input
      value={inputText}
        type="text"
        placeholder="add todo"
        className="border-1 px-2"
        onChange={(e) => handleTextChange(e.target.value)}
      />
{
toggleEdit?

<button type="submit" className="border-1 bg-orange-700 text-white p-1">
Edit
</button>
:
<button type="submit" className="border-1 bg-green-700 text-white p-1">
submit
</button>
}
     
    </form>
  );
}

export default TodoInput;
