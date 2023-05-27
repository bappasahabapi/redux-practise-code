// 1st-- initial state
//2nd -- create reducer function(state, action )
//3rd  create store
//4th button click lister
//5th showing changes in UI


// selecting the dom elements
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElment = document.getElementById("decrement");
const resetElement = document.getElementById("reset");

// 1st-- initial state
const initialState = {
    value: 0,
};

//   2nd -- create reducer function(state, action )
// action--> type, payload

function counterReducer(state = initialState, action) {
    // action={
    //     type:'increment'
    // }

    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - 1,
        };
    } else if (action.type === "reset") {
        return {
            value: 0,
        };
    } else {
        return state;
    }
}

//3rd  create store
const store = Redux.createStore(counterReducer);

//5th showing changes in UI
const render = () => {
    const state = store.getState();
    counterElement.innerText = state.value.toString();
}

render();
store.subscribe(render);

// 4th button click listner
incrementElement.addEventListener("click", () => {
    store.dispatch({
        type: "increment",
    });
});
decrementElment.addEventListener("click", () => {

    store.dispatch({
        type: "decrement",
    });
});
resetElement.addEventListener("click", () => {
    store.dispatch({
        type: "reset",
    });
});


// showing changes in UI