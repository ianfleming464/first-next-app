import React from 'react';
import Link from 'next/link';

const ServerFetch = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();

  return (
    <>
      <h1>Server Fetch</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className='flex items-center justify-between mb-2'>
            <Link href={`/todos/${todo.id}`} key={todo.id}>
              <p className='text-lg'>{todo.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServerFetch;

// function displayTodos() {
//   return todos.map(todo => {
//     return (
//       <li key={todo.id} className='flex items-center justify-between mb-2'>
//         <Link href={`/todos/${todo.id}`} key={todo.id}>
//           <p className='text-lg'>{todo.title}</p>
//         </Link>
//         <input
//           onChange={() => updateTodo(todo.id)}
//           type='checkbox'
//           className='h-6 w-6 ml-2'
//           checked={todo.completed}
//         />
//       </li>
//     );
//   });
// }
