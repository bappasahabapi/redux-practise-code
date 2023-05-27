import { colorSelected } from "../actions";

const updateColor = (todoId, color)=>{
    // wrappiing the whole thunk function to a anoynimous function 
    // that return the  thunk function 
    return async (dispatch) =>{
        const response = await fetch(`https://bsbserver.herokuapp.com/todos/${todoId}`,{
            method:"PATCH",
            body: JSON.stringify({
                
               color:color
            }),
            headers:{
                "Content-type":"application/json; charset= UTF-8"
            }
        });
        const todo = await response.json();
        dispatch(colorSelected(todo.id, todo.color));
    
    } ;
}

export default  updateColor;

// / this thunk is called in Todo.js component 