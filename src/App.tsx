import React, { useState, useEffect } from "react";
import TodoList, { Todo } from "./TodoList/TodoList";
import TodoListItem from "./TodoList/TodoListItem";

const App: React.FC = () => {
  return (
    <>
      <TodoList />
    </>
  );
};
export default App;
