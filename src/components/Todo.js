import React from "react";

function Todo({ text, todo, todos, setTodos }){
    const deleteHandler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        )
    }
  return (
    <div className="todo-item">
      <input onClick={completedHandler} type="checkbox" />
      <p className={`${todo.completed ? "completed" :'' }`}>{text}</p>
      <button onClick={deleteHandler} className="item-button"> 
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
}
export default Todo;
