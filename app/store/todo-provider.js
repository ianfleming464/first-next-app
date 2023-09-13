'use client';
import { TodoContext } from './todo-context';
import { useApi } from '../api';

export function TodoProvider({ children }) {
  const { todos, updateTodo } = useApi();

  return <TodoContext.Provider value={{ todos, updateTodo }}>{children}</TodoContext.Provider>;
}
