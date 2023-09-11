'use client';
import { useApi } from './api';
import Link from 'next/link';

export default function Home() {
  const { todos, updateTodo } = useApi();

  console.log(todos);

  function displayTodos() {
    return todos.map(todo => {
      return (
        <li key={todo.id} className='flex items-center justify-between mb-2'>
          <Link href={`/todos/${todo.id}`} key={todo.id}>
            <p className='text-lg'>{todo.title}</p>
          </Link>
          <input
            onChange={() => updateTodo(todo.id)}
            type='checkbox'
            className='h-6 w-6 ml-2'
            checked={todo.completed}
          />
        </li>
      );
    });
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold text-center mb-6'>The Confusing Next JS To-Do Attempt</h1>
      <h3 className='text-2xl font-bold text-center mb-6'>To-Dos</h3>
      <ul className='flex-col items-center justify-center mb-4'>{displayTodos()}</ul>
    </main>
  );
}
