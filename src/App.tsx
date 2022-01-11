import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

const initialTodos: Array<Todo> = [
  { id: 0, text: "Walk the dog", complete: true },
  { id: 1, text: "Write app", complete: false },
  { id: 2, text: "Hangout with friend", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else return todo;
    });
    setTodos(newTodos);
  };
  return (
    <>
      {/* <TodoListItem todo={todos[0]} /> */}
      {todos.map((todo) => {
        return (
          <React.Fragment key={todo.id}>
            <TodoListItem todo={todo} toggleTodo={toggleTodo} />
          </React.Fragment>
        );
      })}
    </>
  );
};
export default App;
