import React from "react";

function Form({ txtInput, setTxtInput, todos, setTodos, setStatus }) {
  /*
  * Get value from input tag and if something change on input 
  * it will add new value into set state function setTxtInput back to App.js
  * when submit function add new value into todo state setTodos back to App.js
  * and clear the value of input field,
  * the same with status 
  * */ 
 
  const textInputHandle = (e) => {
    setTxtInput(e.target.value);
  };
  const submitTodoHandle = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: txtInput, completed: false, id: Math.random() },
    ]);
    setTxtInput("");
  };
  const statusHandler = (e)=>{
        setStatus(e.target.value);
  }
  return (
    <form>
      <input value={txtInput} onChange={textInputHandle} type="text" />
      <button type="submit" onClick={submitTodoHandle}>
        <i className="fa fa-plus" aria-hidden="true"></i>
        Add
      </button>
      <div className="select">
        <select onChange={statusHandler} name="slct" id="slct">         
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
