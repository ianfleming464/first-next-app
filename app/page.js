'use client';
import { useApi } from './api';
import Link from 'next/link';

export default function Home() {
  const { todos, updateTodo } = useApi();

  console.log(todos);

  // const updatedTodo = todos.map(todo => {

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
      {/* <ToDos displayTodos={displayTodos} /> */}
    </main>
  );
}
// I don't understand the component tree. If I call ToDos here, should I then useApi() in the Todos component, and render an individual say ToDo compnent within said list? Where does page.js fall into the equation?! Page.js is always a dynamic route? In React, it's easier to visualise the flow of information from top to bottm, and how to render and structure things in relaation to how the file system looks. I'm not sure how to do that here. I'm not sure how to structure the components.
// from Slack:
// So I can fetch and display the data but, it’s basically used like a React app so not exactly employing any of Next’s advantages. I wanted to fetch the data on a server side component but I was having trouble figuring it out.
// I ended up fetching it client side in a custom hook, exporting it and using it elsewhere. In the home page component, where it’s displayed. In React, for this task, I would probably fetch it in like the App component, pass it to a Todos container component, which would then render a simple todo component (like a card or something) with the props from Todos. I can’t quite figure that out, because of the multitude of page.js pages. It gets confusing really fast
// Also the fact that out examples were called Home.js,referring to house info, and Cat, threw me off.
// I’m having problems visualising the component tree and data flow in a next app. There’s so many index or page pages, and folders, and then layouts that appear on other pages, etc. that it baffles me a bit. I understand the theory of all the new things it brings but the practice is the problem, ha. So I apologise in advance for not having a huge amount done in this case, this is one week where I’m unable to do the homework so well
