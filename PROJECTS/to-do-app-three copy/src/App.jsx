import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import AddTodo from "./components/AddToDo";

function App() {
  const [todoItems, setTodoItem] = useState([]);

  /** 
  const handleNewItem = (itemName, itemDueDate) => {
    console.log("New Item Added:", itemName, itemDueDate);
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItem(newTodoItem);
  };
  */
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItem((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
    console.log("New Item Added:", itemName, itemDueDate);
    console.log("Updated Todo Items:", [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ]);
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
