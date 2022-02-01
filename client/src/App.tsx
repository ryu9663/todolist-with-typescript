import React, { useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import styled from "styled-components";
import Title from "./TodoList/Components/Title";

const Body = styled.div`
  border: 1px gray solid;
  width: 500px;
  margin: 0 auto;
`;
const App: React.FC = () => {
  return (
    <>
      <Body>
        <Title />
        <TodoList />
      </Body>
    </>
  );
};
export default App;
