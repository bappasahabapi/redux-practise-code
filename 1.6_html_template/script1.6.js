// SELECTING THE DOM ELEMENT 
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElment = document.getElementById("decrement");
const resetElelment = document.getElementById("reset");


// INITIAL STATE 
const initialState = {
    value: 0,
};

// CREATE REDUCER FUNCTION 
function counterReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + 1
        }
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - 1
        }
    } else if (action.type === "reset") {
        return {
            value: 0
        };
    } else {
        return state;
    }

};

// CREATE STORE 
const store = Redux.createStore(counterReducer);

// ADD EVENT LISTNER TO THE BUTTON 

incrementElement.addEventListener("click", () => {
    store.dispatch({ type: "increment" });
});

decrementElment.addEventListener("click", () => {
    store.dispatch({ type: "decrement" });
});

reset.addEventListener("click", () => {
    store.dispatch({ type: "reset" });
});


// SHOWING THE CHANGES TO THE UI 

const render = () => {
    const state = store.getState();
    counterElement.innerText = state.value.toString();
}
render()
store.subscribe(render);