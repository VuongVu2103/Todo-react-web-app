import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./App.css";

function App() {
  //State Stuff
  const [txtInput, setTxtInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, serFilteredTodos] = useState([]);


  // Use Effect
  useEffect(()=>{
    getLocalTodos();
  }, []);
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Filter function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        serFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        serFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        serFilteredTodos(todos);
        break;
    }
  };

  // Save to local
   const saveLocalTodos = () =>{
       localStorage.setItem('todos', JSON.stringify(todos))
   } ;

   const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
   }

  return (
    <div className="todo">
      <header>
        <h1>Vuong Vu's ToDo App </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        txtInput={txtInput}
        setTxtInput={setTxtInput}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
