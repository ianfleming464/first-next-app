'use client';
import { createContext } from 'react';

const defaultContextValue = {
  todos: [],
  updateTodo: () => {},
};

export const TodoContext = createContext(defaultContextValue);

// Default context value to match the returned object from the useApi hook
