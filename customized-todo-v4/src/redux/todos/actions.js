import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    TOGGLED,
    LOADED,
    EDITED
} from "./actionTypes";

export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos,
    };
};
export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    };
};

export const edited = (todoId ,todoText) => {
    return {
        type: EDITED,
        payload: {
            todoId,
            todoText
        }
    };
};

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId,
    };
};

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color,
        },
    };
};

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    };
};

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,
    };
};

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    };
};