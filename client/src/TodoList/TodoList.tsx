import React, { useState } from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import SureToRemoveModal from "./Modal/SureToRemoveModal";
import RemoveTodoBtn from "./Components/RemoveTodoBtn";
import AddNewTodo from "./Components/AddNewTodo";
import CompletedTodoList from "./Components/CompletedTodoList";
import EditTodoBtn from "./Components/EditTodoBtn";
import EditTodoModal from "./Modal/EditTodoModal";
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
  padding: 10px;
  text-align: center;
`;
const TodoWrapper = styled.div`
  overflow: hidden;
`;
const TodoListLi = styled.li`
  display: flex;
  justify-content: center;
  margin: 15px;
  .complete {
    text-decoration: line-through;
  }
  label {
    margin: 0 15px;
  }
`;
function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [completedTodos, setCompletedTodos] = useState<never[] | Todo[]>(initialTodos.filter((el) => el.complete));
  const [removeTodoId, setRemoveTodoId] = useState<number>(0);
  const [editTodoId, setEditTodoId] = useState<number>(0);
  const [removeModalHandler, setRemoveModalHandler] = useState<boolean>(false);
  const [editModalHandler, setEditModalHandler] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editTodo, setEditTodo] = useState<string>("");
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    console.log(todos);
    if (!selectedTodo.complete) {
      // set
      console.log("완료");
      setCompletedTodos([...completedTodos, { ...selectedTodo, ...{ complete: !selectedTodo.complete } }]);
    } else {
      console.log("미완료");
      const filteredTodo: Todo[] = completedTodos.filter((el) => {
        return el.text !== selectedTodo.text;
      });
      setCompletedTodos(filteredTodo);
    }

    const filteredTodo: Todo[] = todos.map((el) => {
      if (el.text === selectedTodo.text) {
        return { ...el, complete: !selectedTodo.complete };
      } else {
        return el;
      }
    });
    setTodos(filteredTodo); //체크 유무
  };
  const addNewTodo = (newTodo: string) => {
    const newTodoList = {
      id: todos.length + 1,
      text: newTodo,
      complete: false,
    };
    setTodos([...todos, newTodoList]);
    // setModalHandler(false);
  };
  const removeTodoFunc = (todoId: number) => {
    const filteredTodos = todos.filter((el) => el.id !== todoId);
    setTodos(filteredTodos);
    setRemoveModalHandler(false);
  };
  const editTodoFunc = (todoId: number) => {
    const editedTodos = todos.map((el, idx) => {
      if (idx === todoId) {
        const editedTodo = { ...el, ...{ text: editTodo } };
        return editedTodo;
      } else return el;
    });
    setTodos(editedTodos);
    setEditTodo("");
    setEditModalHandler(false);
  };

  return (
    <>
      {removeModalHandler ? (
        <SureToRemoveModal
          todoId={removeTodoId}
          onClick={() => setRemoveModalHandler(false)}
          removeTodoHandler={removeTodoFunc}
        />
      ) : null}
      {editModalHandler ? (
        <EditTodoModal
          todoId={editTodoId}
          onClick={() => setEditModalHandler(false)}
          editTodoHandler={editTodoFunc}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      ) : null}
      <EntireContainor>
        <React.Fragment>
          <AddNewTodo addNewTodo={addNewTodo} setNewTodo={setNewTodo} newTodo={newTodo} />
          <TodoWrapper>
            {todos
              .filter((el) => !el.complete)
              .map((todo) => {
                return (
                  <TodoListLi key={`${todo.id}+${todo.text[1]}`}>
                    <TodoListItem todo={todo} toggleTodo={toggleTodo} />
                    <EditTodoBtn
                      onClick={() => {
                        setEditTodoId(todo.id);
                        setEditModalHandler(true);
                      }}
                    />
                    <RemoveTodoBtn
                      onClick={() => {
                        setRemoveTodoId(todo.id);
                        setRemoveModalHandler(true);
                      }}
                    />
                  </TodoListLi>
                );
              })}
          </TodoWrapper>
          <CompletedTodoList completedTodo={completedTodos} toggleTodo={toggleTodo} />
        </React.Fragment>
      </EntireContainor>
    </>
  );
}

export default TodoList;
