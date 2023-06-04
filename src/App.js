
import './App.css';
import Todos from './components/todos';
import { todolist } from './components/data';
import { useState } from 'react';
import NewTodo from './components/newTodo';


function App() {
  const [todos, setTodos] = useState(todolist());

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: 'completed' } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo setTodos={setTodos} todos={todos} />
      <Todos todos={todos} handleComplete={handleComplete} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
