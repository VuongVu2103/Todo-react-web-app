import React from "react";

function Form({ txtInput, setTxtInput, todos, setTodos }) {
  const textInputHandle = (e) => {
    console.log(e.target.value);
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
        console.log(e.target.value);
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
