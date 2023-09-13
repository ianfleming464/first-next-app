'use client';
import { useApi } from '../../api';
import { useContext } from 'react';
import { TodoContext } from '../../store/todo-context';

export default function ToDo({ params }) {
  const { todos, updateTodo } = useContext(TodoContext);
  const currentTodo = todos.filter(todo => todo.id === params.id);
  console.log(params.id);
  console.log(todos);
  console.log(currentTodo);

  if (currentTodo) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
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
        <h1>Loading...no, error. ERROR!! Nothing to do.</h1>
      </>
    );
  }
}
