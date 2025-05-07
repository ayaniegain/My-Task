import React, { createContext, useContext, useEffect, useState } from "react";

export let MyTodoContext = createContext("");

function TodoContext({ children }) {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [eId, setEid] = useState(null);
  const [toggleEdit, setToggleEdit] = useState(false);


  
  useEffect(()=>{
    let getTodo=JSON.parse( localStorage.getItem("TODOS"))||[]

    setTodo(getTodo)
  },[])

  
  useEffect(()=>{

    localStorage.setItem("TODOS",JSON.stringify(todo))
    
  },[todo])

  function handleTextChange(text) {
    setInputText(text);
  }

  function createTodo(e) {
    e.preventDefault();

    if (todo && todo.find((e) => e.task === inputText)) {
      alert("Task Already present ");
      return;
    }

    setTodo([...todo, { id: Date.now(), task: inputText, isChecked: false }]);

    setInputText("");
  }

  function deleteTodo(id) {
    if (id) {
      setTodo(todo.filter((e) => e.id !== id));
    }
  }
  function getUpdatedId(id) {
    if (id) {
      let updateText = todo.find((e) => e.id === id);
      setInputText(updateText?.task);
      setEid(id);
      setToggleEdit(true);
    }
  }
  function updateTodo(e) {
    e.preventDefault();

    setTodo(
      todo.map((item) =>
        item.id === eId ? { ...item, task: inputText,isChecked: false } : item
      )
    );

      setEid(null)
      setToggleEdit(false);
    setInputText("");

  }
  function completeTodo(id) {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );


  }


  return (
    <MyTodoContext.Provider
      value={{
        handleTextChange,
        createTodo,
        deleteTodo,
        updateTodo,
        completeTodo,
        getUpdatedId,
        inputText,
        toggleEdit,
        todo,
        eId
      }}
    >
      {children}
    </MyTodoContext.Provider>
  );
}

export default TodoContext;

export function useContextTodo() {
  return useContext(MyTodoContext);
}
