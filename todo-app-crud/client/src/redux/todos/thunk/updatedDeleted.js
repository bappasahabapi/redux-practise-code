import { deleted } from "../actions";

const updatedDeleted = (todoId) => {
  return async (dispatch) => {
    await fetch(`https://assignment-4todo.herokuapp.com/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default updatedDeleted;
