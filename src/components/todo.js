import React from 'react'


  
const Todo = (props) => {
    const { todo, handleComplete, handleDelete } = props;
  return (
    
        <div className={`todo ${todo.status}`}>
        <span>{todo.task}</span>
        <div className="actions">
        <i className="fal fa-check" onClick={() => handleComplete(todo.id)}></i>
        <i className="fas fa-trash delete" onClick={() => handleDelete(todo.id)}></i>
       
        </div>
    </div>
    
  );
};

export default Todo;