import React from "react";
import { useContextTodo } from "../context/Todo.Context";

function TodoResults({ id, isChecked, task, index }) {
  let { deleteTodo, completeTodo, getUpdatedId,eId } = useContextTodo();
console.log(eId)
  return (
    <div className="flex gap-4 ">
      <span>
        {index + 1}
        {")"}
      </span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => completeTodo(id)}
      />
      <h2 className={`${isChecked ? "line-through":"" }`}>{task}</h2>
      <div>
        <button onClick={() => getUpdatedId(id)}>EDIT</button>
        <button onClick={() => deleteTodo(id)} disabled={eId==id} >DELETE</button>
      </div>
    </div>
  );
}

export default TodoResults;
