'use client';
import { createSlice } from '@reduxjs/toolkit';
import { useApi } from '../../api';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    initializeTodos: (state, action) => {
      state.todos = action.payload;
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const { initializeTodos, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

// Brian's example:
// const cartItemSlice = createSlice({
//   name: 'item',
//   initialState: {
//     items: [],
//     quantity: 0,
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push(action.payload);
//       state.quantity += 1;
//     },
//   },
// });

// export const { addToCart } = cartItemSlice.actions;
// export default cartItemSlice.reducer;
