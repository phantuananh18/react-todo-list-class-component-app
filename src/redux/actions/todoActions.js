import {
  ADD_TOD0,
  DELETE_TODO,
  COMPLETE_TODO,
  RESET_TODO_LIST,
} from "../constants/constants";

export const onHandleAddTodo = () => {
  console.log("Add Todo");
  return {
    type: ADD_TOD0,
  };
};

export const onHandleDeleteTodo = (task) => {
  console.log("Delete Todo");
  return {
    type: DELETE_TODO,
    payload: task,
  };
};

export const onHandleCompleteTodo = (id) => {
  console.log("Complete Todo");
  return {
    type: COMPLETE_TODO,
    payload: id,
  };
};

export const onHandleResetTodo = () => {
  console.log("Reset Todo");
  return {
    type: RESET_TODO_LIST,
  };
};
