'use client';
import { useApi } from '../../api';

export default function ToDo({ params }) {
  // get params
  const todo = useApi(params.id);
  console.log(todo);
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}
