import React, { useState } from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import AddTodoBtn from "./Components/AddTodoBtn";
import AddNewModal from "./Modal/AddNewModal";
export type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void;

export const initialTodos: Todo[] = [
  { id: 0, text: "강아지 산책", complete: true },
  { id: 1, text: "코딩연습", complete: false },
  { id: 2, text: "친구랑 놀러가기", complete: false },
];
const EntireContainor = styled.ul`
  /* display: flex; */
  /* flex-direction: column; */
  border: 1px gray solid;
  padding: 10px;
`;
const TodoWrapper = styled.div`
  border: 1px gray solid;

  overflow: hidden;
`;
function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [modalHandler, setModalHandler] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const filteredTodo: Todo[] = todos.map((el) => {
      if (el.text === selectedTodo.text) {
        return { ...el, complete: !selectedTodo.complete };
      } else {
        return el;
      }
    });
    setTodos(filteredTodo);
  };
  const addNewTodo = (newTodo: string) => {
    const newTodoList = {
      id: todos.length,
      text: newTodo,
      complete: false,
    };
    setTodos([...todos, newTodoList]);
    setModalHandler(false);
  };
  return (
    <EntireContainor>
      {modalHandler ? (
        <AddNewModal
          onClick={() => setModalHandler(false)}
          addNewTodo={addNewTodo}
          setNewTodo={setNewTodo}
          newTodo={newTodo}
        />
      ) : (
        <React.Fragment>
          <TodoWrapper>
            {todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <TodoListItem todo={todo} toggleTodo={toggleTodo} />
                </div>
              );
            })}
          </TodoWrapper>
          <AddTodoBtn onClick={() => setModalHandler(true)} />
        </React.Fragment>
      )}
    </EntireContainor>
  );
}

export default TodoList;
