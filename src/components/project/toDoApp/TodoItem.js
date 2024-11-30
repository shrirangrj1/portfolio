// src/components/TodoItem.js
import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, TextField, Box } from '@mui/material';
import { Edit, Delete, Save } from '@mui/icons-material';

const TodoItem = ({ todo, updateTodo, deleteTodo, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {isEditing ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <IconButton color="primary" onClick={handleUpdate}>
            <Save />
          </IconButton>
        </Box>
      ) : (
        <ListItemText
          primary={todo.text}
          primaryTypographyProps={{
            style: { textDecoration: todo.completed ? 'line-through' : 'none' },
          }}
          onClick={() => toggleCompletion(todo.id)}
          sx={{ cursor: 'pointer', flex: 1 }}
        />
      )}
      <Box> 
        {!isEditing && (
          <IconButton color="warning" onClick={() => setIsEditing(true)}>
            <Edit />
          </IconButton>
        )}
        <IconButton color="error" onClick={() => deleteTodo(todo.id)}>
          <Delete />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
