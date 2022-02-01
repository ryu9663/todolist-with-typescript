import React from "react";
import { Todo, ToggleTodo } from "../TodoList";

type Props = {
  completedTodo: never[] | Todo[];
  toggleTodo: ToggleTodo;
};

const CompletedTodoList: React.FC<Props> = ({ completedTodo, toggleTodo }) => {
  console.log(completedTodo);
  return (
    <div>
      <h2>완료된 계획들</h2>
      {completedTodo.map((el) => {
        return (
          <label className={el.complete ? "complete" : ""}>
            <input type="checkbox" checked={el.complete} onChange={() => toggleTodo(el)} />
            {el.text}
          </label>
        );
      })}
    </div>
  );
};

export default CompletedTodoList;