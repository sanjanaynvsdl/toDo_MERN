
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './TodoItem.css';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <FaTrash onClick={() => onDelete(todo._id)} className="delete-icon" />
    </div>
  );
};

export default TodoItem;
