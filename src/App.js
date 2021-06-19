import React,{ useState } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './App.css';

function App() {
  const [txtInput, setTxtInput] = useState("");
  const [todos, setTodos] = useState([])

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
        />
      <TodoList setTodos={setTodos} todos={todos} />
      
    </div>
  );
}

export default App;
