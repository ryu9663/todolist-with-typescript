import React from "react";
import "./TodoListItem.css";
interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </li>
  );
};
export default React.memo(TodoListItem, (prev: any, next: any): boolean => {
  return prev.todo.complete === next.todo.complete;
});
