import { useRef } from "react";

function AddTodo({ onNewTodoItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleNewItemChange = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewTodoItem(todoName, todoDueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleNewItemChange}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
