import { edited } from "../actions";

const editTodo = (todoId,todoText)=>{
    // wrappiing the whole thunk function to a anoynimous function 
    // that return the  thunk function 
    return async (dispatch) =>{
        const response = await fetch(`https://bsbserver.herokuapp.com/todos/${todoId}`,{
            method:"PATCH",
            body: JSON.stringify({
                text:todoText,
                
            }),
            headers:{
                "Content-type":"application/json; charset= UTF-8"
            }
        });
        const todo = await response.json();
        dispatch(edited(todo.id, todoText));
    
    } ;
}

export default  editTodo;


// this thunk is called in Todo.js component 