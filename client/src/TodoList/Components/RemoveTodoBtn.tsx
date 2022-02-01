import React from "react";
import styled from "styled-components";
import { Todo } from "../TodoList";

type Props = {
  todoId: number;
  onClick: () => void;
};
const Btn = styled.button`
  background: skyblue;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
`;

const RemoveTodoBtn: React.FC<Props> = ({ todoId, onClick }) => {
  return (
    <div>
      <Btn onClick={onClick}>삭제</Btn>
    </div>
  );
};

export default RemoveTodoBtn;
