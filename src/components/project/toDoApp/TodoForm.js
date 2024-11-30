import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3, display: 'flex', gap: 1 }}>
      <TextField
        fullWidth 
        variant="outlined"
        label="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" type="submit" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
