import { loaded } from "../actions";
const  fetchComplete = async(dispatch) => {
    const response= await fetch("https://assignment-4todo.herokuapp.com/todos")
    const todos= await response.json()
    dispatch(loaded(todos))
};

export default fetchComplete;