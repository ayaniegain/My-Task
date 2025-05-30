import React from "react";
import { useContextTodo } from "../context/Todo.Context";
import TodoResults from "./TodoResults";

function TodoList() {
  let { todo } = useContextTodo();

  if (!todo || todo.length < 1) {
    return (
      <div className="text-center text-gray-400 mt-4">
        <h2>No Task Found..</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {todo &&
        todo.map(({ id, task, isChecked }, i) => (
          <TodoResults
            id={id}
            task={task}
            isChecked={isChecked}
            key={id}
            index={i}
          />
        ))}
    </div>
  );
}

export default TodoList;
