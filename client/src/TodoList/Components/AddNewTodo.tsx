import React from "react";
import styled from "styled-components";

const AddTodoWrapper = styled.div`
  text-align: center;
  form {
    margin: 40px auto;
    input {
      height: 30px;
      border-top: none;
      border-right: none;
      border-left: none;
    }
    .modal__btn--add {
      background: skyblue;
      margin-left: 30px;
      border-radius: 20px;
      border: none;
      padding: 10px;
      border-radius: 20px;
      cursor: pointer;
    }
  }
`;
export type Props = {
  newTodo: string;
  setNewTodo: (newTodo: string) => void;
  addNewTodo: (newTodo: string) => void;
};
const AddNewTodo: React.FC<Props> = ({ newTodo, setNewTodo, addNewTodo }) => {
  const submitFunction = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      alert("계획을 입력하세요");
      return;
    }
    addNewTodo(newTodo);
    setNewTodo("");
  };
  return (
    <AddTodoWrapper>
      <form onSubmit={(e) => submitFunction(e)}>
        <input
          type="text"
          placeholder="새로운 계획을 입력하세요"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button className="modal__btn--add">할 일 추가</button>
      </form>
    </AddTodoWrapper>
  );
};

export default AddNewTodo;
