import React, { useState } from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { GlobalProvider } from "../context/GlobalState";
import AddTransaction from "../expenseTracker/AddTransaction";
import TransactionList from "../expenseTracker/TransactionList";
import Charts from "../expenseTracker/Charts";
import "./tracker.css";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);

  // Todo List functions
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: updatedText } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>

      {/* Accordion for Todo List */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>To-Do List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" align="center" gutterBottom>
            To-Do List
          </Typography>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleCompletion={toggleCompletion}
          />
        </AccordionDetails>
      </Accordion>

      {/* Accordion for Expense Tracker */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Expense Tracker</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GlobalProvider>
            <div className="app">
              <Typography variant="h5" align="center" gutterBottom>
                Expense Tracker
              </Typography>
              <AddTransaction />
              <Charts />
              <TransactionList />
            </div>
          </GlobalProvider>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default TodoListPage;
