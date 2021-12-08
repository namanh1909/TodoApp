import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const addTodo = props.addTodoFunc;
  const ChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const AddSingleTodo = (event) => {
    event.preventDefault();
    if (title !== "") {
      addTodo(title);
    }
  };
  return (
    <form onSubmit={AddSingleTodo}>
      <input type="text" onChange={ChangeTitle} />
    </form>
  );
};
export default AddTodo;
