import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go School",
      dueDate: "5/10/2023",
    },
    {
      name: "React JS",
      dueDate: "24/11/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItems todoItems={todoItems}></TodoItems>
      </div>
    </center>
  );
}

export default App;
