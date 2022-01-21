import { useSelector } from "react-redux";

import ToDoList from "./components/ToDoList";
import ToDoInput from "./components/ToDoInput";

function App() {
  const toDos = useSelector((state) => state);

  return (
    <div>
      <h1>To-do📝</h1>
      <ToDoInput />
      <ul>
        {toDos.map((toDo, idx) => (
          <ToDoList key={idx} text={toDo.text} id={toDo.id} completed={toDo.completed} />
        ))}
      </ul>
    </div>
  );
}

export default App;
