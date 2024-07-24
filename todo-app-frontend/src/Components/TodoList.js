import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (text.trim()) {
      await axios.post('http://localhost:5000/todos', { text });
      setText('');
      fetchTodos();
    }
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="todo-list">
      <h1>ToDo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
