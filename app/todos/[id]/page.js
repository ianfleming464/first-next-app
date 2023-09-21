'use client';
import { useSelector } from 'react-redux';

export default function ToDo({ params }) {
  const todos = useSelector(state => state.todo.todos);

  const currentTodo = todos.filter(todo => todo.id === Number(params.id))[0];

  if (currentTodo) {
    return (
      <main className='flex min-h-screen flex-col items-center p-24'>
        <h3 className='text-2xl font-bold text-center mb-6'>To-Do Number : {currentTodo.id} </h3>
        <p className='text-lg text-center mb-6'>Title : {currentTodo.title}</p>
        <h5 className='text-lg font-bold text-center mb-6'>
          Status : {currentTodo.completed ? 'COMPLETED' : 'INCOMPLETE'}
        </h5>
      </main>
    );
  } else {
    return (
      <>
        <h1 className='text-2xl font-bold text-center mt-8'>Loading...PLEASE HAVE PATIENCE</h1>
      </>
    );
  }
}
