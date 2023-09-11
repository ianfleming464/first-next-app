'use client';
import { useApi } from '../../api';

export default function ToDo({ params }) {
  const todo = useApi(params);
  console.log(todo);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h3 className='text-2xl font-bold text-center mb-6'>To-Do :</h3>
      <p className='text-lg'>{todo.title}</p>
    </main>
  );
}
