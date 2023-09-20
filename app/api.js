'use client';
import { useEffect, useState } from 'react';

export function useApi(id) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = id
        ? `https://jsonplaceholder.typicode.com/todos/${id}`
        : `https://jsonplaceholder.typicode.com/todos`;

      try {
        const response = await fetch(`${url}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const todoData = await response.json();
        setTodos(todoData);
      } catch (error) {
        console.error('Error fetching todos', error);
      }
    }
    fetchData();
  }, []);
  return { todos };
}
