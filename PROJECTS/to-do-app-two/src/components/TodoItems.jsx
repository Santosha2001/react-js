import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
    return <>
        <div className={styles.itemsContainer}>
            {todoItems.map((item) => (
                <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
            ))}

            {/* <TodoItem todoDate={"4/11/2023"} todoName={"Go School"}></TodoItem> */}
            {/* <TodoItem2></TodoItem2> */}
        </div>
    </>
}
export default TodoItems;