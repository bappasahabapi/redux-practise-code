import { deleted } from "../actions";

const deleteTodo = (todoId)=>{
    // wrappiing the whole thunk function to a anoynimous function 
    // that return the  thunk function 
    return async (dispatch) =>{
         await fetch(`https://bsbserver.herokuapp.com/todos/${todoId}`,{
            method:"DELETE",
        });
        
        dispatch(deleted(todoId));
    
    } ;
}

export default  deleteTodo;

// / this thunk is called in Todo.js component 