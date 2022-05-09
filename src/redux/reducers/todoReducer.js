import { v4 } from "uuid";
import {
  ADD_TOD0,
  DELETE_TODO,
  COMPLETE_TODO,
  RESET_TODO_LIST,
} from "../constants/constants";

const initialState = {
  todoList: [],
  task: "dsadasda",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOD0:
      //   return [
      //     ...state,
      //     {
      //       id: action.payload.id,
      //       task: action.payload.task,
      //       isCompleted: action.payload.isCompleted,
      //     },
      //   ];
      return [...state];
    case DELETE_TODO:
      return state.todolist.filter((todo) => todo.id !== action.payload.id);

    case COMPLETE_TODO:
      return state.todolist.map((todo) =>
        todo.task === action.payload.task
          ? {
              ...todo,
              isCompleted: true,
            }
          : todo
      );
    case RESET_TODO_LIST:
      return state.todoList;
    default:
      return state;
  }
};

export default todoReducer;
