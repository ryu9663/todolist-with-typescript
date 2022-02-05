import React from "react";
import styled from "styled-components";

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

const EditTodoBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <div>
      <Btn onClick={onClick}>수정</Btn>
    </div>
  );
};

export default EditTodoBtn;
