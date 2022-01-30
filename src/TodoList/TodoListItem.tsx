import React from "react";
import styled from "styled-components";
import { Todo, ToggleTodo } from "./TodoList";

const TodoListLi = styled.li`
  display: flex;

  .complete {
    text-decoration: line-through;
  }
  label {
    margin: 5px;
    padding: 10px;
    border: 1px gray solid;
  }
`;
export type TodoListItemProps = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <TodoListLi>
      <label className={todo.complete ? "complete" : ""}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </TodoListLi>
  );
};

export default TodoListItem;
