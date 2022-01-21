import { useDispatch } from "react-redux";
import { DELETE_TODO, CLICK_TODO } from "../store";

function ToDoList({ text, id, completed }) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch({
      type: DELETE_TODO,
      id,
    });
  }

  function toDoComplete() {
    dispatch({
      type: CLICK_TODO,
      id,
    });
  }

  return (
    <div>
      <li onClick={toDoComplete}>
        {completed ? (
          <span style={{ textDecorationLine: "line-through" }}>{text}</span>
        ) : (
          <span>{text}</span>
        )}
        <button onClick={onClick}>x</button>
      </li>
    </div>
  );
}

export default ToDoList;
