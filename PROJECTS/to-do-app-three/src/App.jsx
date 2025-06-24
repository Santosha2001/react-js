import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  /*
  let initialTodoItems = [
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
  */

  const [todoItems, setTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log("New Item Added:", itemName, itemDueDate);
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItem(newTodoItem);
  };

  const handleDeleteItem = (itemName) => {
    console.log("Delete Item:", itemName);
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItem(newTodoItems);
    console.log("Updated Todo Items:", newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewTodoItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <div className="items-container">
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
