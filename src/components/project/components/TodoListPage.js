// src/App.js
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: updatedText } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        React To-Do List
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
        toggleCompletion={toggleCompletion} 
      />
    </Container>
  );
};

export default TodoListPage;
