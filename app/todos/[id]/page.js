'use client';
import { useApi } from '../../api';

export default function ToDo({ params }) {
  console.log(params);
  // Here the params are basically the ID of the Todo in question, as this makes up the URL. We need to use this ID to fetch the data for the specific Todo. We can do this by using the useApi hook we created earlier. We can pass the ID to the hook and it will return the data for the specific Todo. We can then use this data to display the Todo on the page.
  const { todos } = useApi(params.id);
  console.log(todos);
  // It's not optimal calling a variable todos, when it's only one todo, but it's the same data structure as the todos array, and it works so....
  if (todos) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h3 className='text-2xl font-bold text-center mb-6'>To-Do Number : {todos.id} </h3>
        <p className='text-lg text-center mb-6'>Title : {todos.title}</p>
        <h5 className='text-lg font-bold text-center mb-6'>
          Status : {todos.completed ? 'COMPLETED' : 'INCOMPLETE'}
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
