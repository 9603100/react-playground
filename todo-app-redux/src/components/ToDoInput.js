import { useDispatch } from "react-redux";
import { ADD_TODO } from "../store";
import React, { useState } from "react";

let toDoId = 0;

function ToDoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      text,
      id: toDoId,
      completed: false,
    });
    toDoId++;
    setText("");
  }

  function onChange(event) {
    setText(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        value={text}
        placeholder="write to-do"
      />
      <button>+</button>
    </form>
  );
}

export default ToDoInput;
