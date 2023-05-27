import { added } from "../actions";

const addTodo = (todoText)=>{
    // wrappiing the whole thunk function to a anoynimous function 
    // that return the  thunk function 
    return async (dispatch) =>{
        const response = await fetch('https://bsbserver.herokuapp.com/todos',{
            method:"POST",
            body: JSON.stringify({
                text:todoText,
                completed:false
            }),
            headers:{
                "Content-type":"application/json; charset= UTF-8"
            }
        });
        const todo = await response.json();
        dispatch(added(todo.text));
    
    } ;
}

export default  addTodo;


// this thunk is called in Todo.js component 