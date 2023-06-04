import React from 'react';
import Todo from './todo';

const Todos = (props) => {
    const { todos, handleComplete, handleDelete } = props;

    return (
    <div className='todos'>
        <h4>My Todo List</h4>
        {todos?.map(todo=>(
        <Todo key={todo.id} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete}/>
        ))}
        
    
    </div>
  );
};

export default Todos;