import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          todo={todo}
          setTodos={setTodos}
          todos={todos}
          text={todo.text}
          key={todo.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
