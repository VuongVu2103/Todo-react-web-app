import React,{ useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './App.css';

function App() {
  //State Stuff
  const [txtInput, setTxtInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, serFilteredTodos] = useState([]);
// Use Effect
  useEffect(() => {
    filterHandler();
  },[todos, status]);
// function
  const filterHandler = () =>{
    switch(status){
      case "completed":
        serFilteredTodos(todos.filter((todo) => todo.completed === true ))
        break;
       case "uncompleted":
         serFilteredTodos(todos.filter((todo) => todo.completed === false))
         break; 
         default:
           serFilteredTodos(todos);
           break;
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
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
      
    </div>
  );
}

export default App;
