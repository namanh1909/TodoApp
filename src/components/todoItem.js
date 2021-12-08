import React from "react";

const TodoItem = (props) => {
  const todo = props.todoProps;
  const markComplete = props.markCompleteFunc;
  const deleteTodo = props.deleteTodoFunc;
  const todoItemStyle = {
    fontSize: 20,
    textDecoration: todo.completed ? "line-through" : "none",
  };

  return (
    <div>
      <p style={todoItemStyle}>
        <input
          type="checkbox"
          onChange={markComplete.bind(this, todo.id)}
          checked={todo.completed}
        />
        {todo.title}
        <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
      </p>
    </div>
  );
};
export default TodoItem;
