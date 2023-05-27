import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus)=>{
    // wrappiing the whole thunk function to a anoynimous function 
    // that return the  thunk function 
    return async (dispatch) =>{
        const response = await fetch(`https://bsbserver.herokuapp.com/todos/${todoId}`,{
            method:"PATCH",
            body: JSON.stringify({
                
                completed:!currentStatus,
            }),
            headers:{
                "Content-type":"application/json; charset= UTF-8"
            }
        });
        const todo = await response.json();
        dispatch(toggled(todo.id));
    
    } ;
}

export default  updateStatus;

// this thunk is called in Header.js component 
