// SELECTING THE DOM ELEMENT 
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElment = document.getElementById("decrement");
const resetElelment = document.getElementById("reset");




// ACTION IDENTIFIERS /CONSTANT --> here we have 3 types of actions.
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

// ACTION CREATORs --> is nothig but a function that creates a action.

const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
};
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};
const reset = () => {
    return {
        type: RESET,
    };
};



// INITIAL STATE 
const initialState = {
    value: 0,
};




// CREATE REDUCER FUNCTION 
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else if (action.type === RESET) {
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
    store.dispatch(increment(5));
});

decrementElment.addEventListener("click", () => {
    store.dispatch(decrement(2));
});

resetElelment.addEventListener("click", () => {
    store.dispatch(reset());
});


// SHOWING THE CHANGES TO THE UI 

const render = () => {
    const state = store.getState();
    counterElement.innerText = state.value.toString();
}
render()
store.subscribe(render);