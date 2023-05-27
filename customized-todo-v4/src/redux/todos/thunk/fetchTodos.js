import { loaded } from "../actions";

const fetchTodos = async (dispatch) =>{
    const response = await fetch('https://bsbserver.herokuapp.com/todos');
    const todos = await response.json();
    dispatch(loaded(todos));

} ;

export default  fetchTodos;


// call this fetchTodos function in the TodoList component