import React, { useEffect } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: relative;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.2);
  align-items: center;
  height: 100vh;
  z-index: 1000;
`;
const ModalView = styled.div`
  position: fixed;
  background-color: white;
  padding: 50px;
  z-index: 2;
  border: 1px solid white;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  form {
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    input {
      height: 30px;
      border-top: none;
      border-right: none;
      border-left: none;
    }
    .modal__btn--submit {
      background: skyblue;
      border-radius: 20px;
      border: none;
      width: 50px;
      margin: 10px auto 0;
      padding: 10px;
      border-radius: 20px;
      cursor: pointer;
    }
  }

  .modal__btn--off {
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    font-size: 1.5rem;
    border-radius: 20px;
    margin: 0 auto;
    cursor: pointer;
  }
`;
export type Props = {
  onClick: () => void;
  todoId: string;
  editTodoHandler: (todoId: string) => void;
  editTodo: string;
  setEditTodo: (editTodo: string) => void;
};
const EditTodoModal: React.FC<Props> = ({ onClick, todoId, editTodoHandler, editTodo, setEditTodo }) => {
  const submitFunction = (e: React.FormEvent) => {
    e.preventDefault();
    if (editTodo.length === 0) {
      alert("계획을 입력하세요");
      return;
    }
    editTodoHandler(todoId);
  };

  return (
    <>
      <ModalContainer>
        <ModalBackdrop onClick={onClick}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form onSubmit={(e) => submitFunction(e)}>
              <input
                type="text"
                placeholder="변경할 계획을 입력해주세요"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
              ></input>
              <button className="modal__btn--submit">변경</button>
            </form>
            <button className="modal__btn--off" onClick={onClick}>
              &times;
            </button>
          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
    </>
  );
};

export default EditTodoModal;
