import React from "react";
import styled from "styled-components";
import { Todo } from "../TodoList";

type Props = {
  onClick: () => void;
};
const Btn = styled.button`
  background: skyblue;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 10px;
  border: none;
`;

const RemoveTodoBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <div>
      <Btn onClick={onClick}>삭제</Btn>
    </div>
  );
};

export default RemoveTodoBtn;
