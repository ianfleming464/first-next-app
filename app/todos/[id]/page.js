'use client';
import { useApi } from '../../api';
import { useContext } from 'react';
import { TodoContext } from '../../store/todo-context';

export default function ToDo({ params }) {
  const { todos, updateTodo } = useContext(TodoContext);
  const currentTodo = todos.filter(todo => todo.id === Number(params.id))[0]; // turns out params.id is a string. This changes the type to a number. Then, because filter returns an array, we grab the first and only item in the array.
  console.log(currentTodo, typeof currentTodo);
  // console.log('params.id data type:', typeof params.id);

  if (currentTodo) {
    // console.log('Todo ID:', currentTodo.id);
    // console.log('Todo Title:', currentTodo.title);
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
