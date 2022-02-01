import React from "react";
import styled from "styled-components";
import { Todo, ToggleTodo } from "./TodoList";

export type TodoListItemProps = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <label className={todo.complete ? "complete" : ""}>
      <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
      {todo.text}
    </label>
  );
};

export default TodoListItem;
