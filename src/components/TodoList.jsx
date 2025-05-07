import React from "react";
import { useContextTodo } from "../context/Todo.Context";
import TodoResults from "./TodoResults";

function TodoList() {
  let { todo } = useContextTodo();

  console.log(todo);

  if (todo < 1) {
    return (
      <div>
        <h2>No Task Found..</h2>
      </div>
    );
  }

  return (
    <div>
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
