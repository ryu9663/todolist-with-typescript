import styled from "styled-components";
export type Props = {
  onClick: () => void;
};
const Btn = styled.button`
  background: skyblue;
  padding: 10px;
  border-radius: 10px;
`;
const AddTodoBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <div>
      <Btn onClick={onClick}>Add New Todo</Btn>
    </div>
  );
};

export default AddTodoBtn;
