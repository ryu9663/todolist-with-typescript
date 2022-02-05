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
  removeTodoHandler: (todoId: string) => void;
};
const SureToRemoveModal: React.FC<Props> = ({ onClick, todoId, removeTodoHandler }) => {
  const submitFunction = (e: React.FormEvent) => {
    e.preventDefault();
    removeTodoHandler(todoId);
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
              <div>계획을 삭제하시겠습니까??</div>
              <button className="modal__btn--submit" type="submit" onKeyUp={(e) => console.log(e.key)}>
                확인
              </button>
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

export default SureToRemoveModal;
