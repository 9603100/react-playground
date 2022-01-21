import { createStore } from "redux";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLICK_TODO = "CLICK_TODO";

const reducer = (toDos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        { text: action.text, id: action.id, completed: action.completed },
        ...toDos,
      ];
    case DELETE_TODO:
      return toDos.filter((toDo) => toDo.id !== action.id);
    case CLICK_TODO:
      return toDos.map((toDo) => {
        if (toDo.id === action.id) {
          return {
            ...toDo,
            completed: !toDo.completed,
          };
        } else {
          return toDo;
        }
      });
    default:
      return toDos;
  }
};

const toDoStore = createStore(reducer);

export default toDoStore;
