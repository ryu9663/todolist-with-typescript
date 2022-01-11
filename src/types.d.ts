type Todo = {
  id: number;
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
