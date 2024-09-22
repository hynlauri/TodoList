import React, { useState } from 'react';
import './App.css';
import TodoTable from './TodoTable';

function App() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const addTodo = () => {
    if (!description || !date) return; 
    const newTodo = { description, date };
    setTodos([newTodo, ...todos]); 
    setDescription('');
    setDate(''); 
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index)); 
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <TodoTable todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
