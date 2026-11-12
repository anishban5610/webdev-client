"use client";

import { useState } from "react";
import { useTodosContext, type Todo } from "./todosContext";

function TodoRow({ todo }: { todo: Todo }) {
  const { updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState(todo.title);

  return (
    <li className="mb-2 flex gap-2">
      <input
        aria-label={`Title for ${todo.title}`}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="rounded border border-neutral-300 px-3 py-1.5"
      />
      <button
        type="button"
        disabled={!title.trim()}
        onClick={() => updateTodo({ id: todo.id, title })}
        className="rounded bg-blue-600 px-3 py-1.5 text-white disabled:opacity-50"
      >
        Update
      </button>
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="rounded bg-red-600 px-3 py-1.5 text-white"
      >
        Delete
      </button>
    </li>
  );
}

export default function ReactContextTodoList() {
  const { todos, addTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  return (
    <section id="wd-react-context-todo-list" className="mt-4">
      <h3>Context Todo List</h3>
      <form
        className="mb-3 flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          if (!title.trim()) return;
          addTodo(title);
          setTitle("");
        }}
      >
        <input
          aria-label="New todo title"
          placeholder="New todo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="rounded border border-neutral-300 px-3 py-1.5"
        />
        <button
          type="submit"
          disabled={!title.trim()}
          className="rounded bg-green-600 px-3 py-1.5 text-white disabled:opacity-50"
        >
          Add
        </button>
      </form>
      {todos.length === 0 && <p>No todos yet.</p>}
      <ul>
        {todos.map((todo) => <TodoRow key={todo.id} todo={todo} />)}
      </ul>
    </section>
  );
}
