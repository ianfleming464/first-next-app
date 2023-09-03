import Link from 'next/link';

/**
 * url: https://jsonplaceholder.typicode.com/todos
 * display all todos from the url in a list
 * should inlucde a checkbox to mark the todo as complete(or incomplete)
 * clicking on a todo should take you to a page that displays the todo's title and description (e.g. /todos/1)
 *
 * concetps: useEffect, useState, Link
 */

export default function ToDo() {
  return (
    <div>
      <Link href='/'>HOME LINK</Link>
      <h1>ToDos</h1>
    </div>
  );
}
