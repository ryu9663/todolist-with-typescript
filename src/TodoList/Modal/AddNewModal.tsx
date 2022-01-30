import React, { useEffect } from "react";
export type Props = {
  onClick: () => void;
  newTodo: string;
  setNewTodo: (newTodo: string) => void;
  addNewTodo: (newTodo: string) => void;
};
const AddNewModal: React.FC<Props> = ({ onClick, newTodo, setNewTodo, addNewTodo }) => {
  const submitFunction = (e: React.FormEvent) => {
    e.preventDefault();
    addNewTodo(newTodo);
  };
  console.log(newTodo);
  //   useEffect(() => {
  //     addNewTodo(newTodo);
  //   }, [newTodo]);

  return (
    <>
      <form onSubmit={(e) => submitFunction(e)}>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
        <button>할 일 추가</button>
      </form>
      <button onClick={onClick}>나가기</button>
    </>
  );
};

export default AddNewModal;
