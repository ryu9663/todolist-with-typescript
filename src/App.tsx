import React, { useState, useEffect } from "react";
import TodoListItem from "./TodoListItem";

const initialTodos: Array<Todo> = [
  { id: 0, text: "Walk the dog", complete: true },
  { id: 1, text: "Write app", complete: false },
  { id: 2, text: "Hangout with friend", complete: false },
];

const App: React.FC = () => {
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const filteredTodo: Array<Todo> = todos.map((el) => {
      if (el.id === selectedTodo.id) {
        console.log("클릭한거", el);
        return { ...el, complete: !selectedTodo.complete };
      } else {
        console.log("클릭안한거", el);
        return el;
      }
    });
  };

  return (
    <>
      <ul>
        <React.Fragment>
          {todos.map((todo) => {
            return (
              <React.Fragment key={todo.id}>
                <TodoListItem todo={todo} toggleTodo={toggleTodo} />
              </React.Fragment>
            );
          })}
        </React.Fragment>
      </ul>
    </>
  );
};
export default App;
